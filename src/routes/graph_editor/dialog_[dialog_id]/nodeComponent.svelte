<script lang="ts">
	import Icon from '@iconify/svelte';
	import LineInput from './lineInput.svelte';
	import type { DialogNode } from './classes';

	const { node } : {node: DialogNode} = $props();

	let x = $derived(node.x);
	let y = $derived(node.y);

	function moveTo(new_x : number, new_y : number){
		x = new_x
		y = new_y
		node.x = new_x
		node.y = new_y
		node.onMoved.emit([new_x,new_y])
	}

	function moveDialog(event: MouseEvent) {
		moveTo(x+ event.movementX,y+event.movementY)
	}

	function startDragging() {
		window.addEventListener('mousemove', moveDialog);
		window.addEventListener('mouseup', stopDragging);
	}
	function stopDragging() {
		window.removeEventListener('mousemove', moveDialog);
		window.removeEventListener('mouseup', stopDragging);
	}

	function edit() {
		moveTo(0,0)
	}
</script>

<div class="frame" style="left: {x}px; top: {y}px;" id="dialog-node-{node.id}">
	<button class="move-handle" onmousedown={startDragging} onmouseup={stopDragging}>
		<Icon icon="si:move-duotone" color="text" width="30" height="30" />
	</button>

	<p class="status"><bold>NPC line</bold></p>
	<p class="text">
	{#each node.lines as line, i (i)}
		<LineInput {line}/>
	{/each}
	</p>
	<span class="actions">
		<button class="icon-button">
			<Icon icon="mdi:pen" color="orange" width="40" height="40" onclick={edit} />
		</button>

		<button class="icon-button higher">
			<Icon icon="famicons:cut-sharp" color="#106" width="40" height="40" />
		</button>

		<button class="icon-button">
			<Icon icon="mdi:trash" color="red" width="40" height="40" />
		</button>
	</span>

	<button class="icon-button bottom-center">
		<Icon icon="ci:link-vertical" width="40" height="40"></Icon>
	</button>
</div>

<style>
	.frame {
		background-color: #667;
		border-radius: 2rem;
		padding: 1rem;
		border: 2mm ridge #eef;
		width: 15rem;
		font-size: large;
		text-align: justify;

		position: absolute;
		translate: -50% -50%;
	}

	.status {
		margin-top: 0;
		color: #a00;
	}

	.text {
		color: #112;
	}

	.icon-button {
		width: fit-content;
		height: fit-content;
		border-radius: 50px;
	}
	.higher{
		position: relative;
		bottom: 8px;
	}
	.bottom-center {
		position: absolute;
		left: 50%;
		bottom: 0;
		transform: translate(-50%, 50%);
	}

	.actions {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
		padding-left: 1rem;
		padding-right: 1rem;
	}

	.move-handle {
		width: 100%;
		margin-bottom: 0.75rem;
		height: 35px;
		border-radius: 17.5px;
		cursor: move;
	}
</style>
