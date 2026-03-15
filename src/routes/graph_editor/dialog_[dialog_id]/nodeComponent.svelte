<script lang="ts">
	import Icon from '@iconify/svelte';
	import LineInput from './lineInput.svelte';

	const { node } = $props();

	let x = $state(node.x);
	let y = $state(node.y);

	function moveDialog(event: MouseEvent) {
		x += event.movementX;
		y += event.movementY;
		console.log('set node x and y to : ', node.x, node.y);
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
		node.x = 0;
		node.y = 0;
	}
</script>

<div class="frame" style="left: calc(50% + {x}px); top: calc(50% + {y}px);">
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

		position: relative;
		translate: 50% 50%;
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
