<script lang="ts">
	import '../../../main.css';

	import Icon from '@iconify/svelte';
	import LineInput from './lineInput.svelte';
	import type { DialogNode } from './classes';

	const { node }: { node: DialogNode } = $props();

	let x = $derived(node.x);
	let y = $derived(node.y);

	function constrained(new_x: number, new_y: number): [number, number] {
		//check if inside
		const canvas = document.getElementById('questsEdgeCanvas')!;
		const canvasRect = canvas.getBoundingClientRect();

		const frame = document.getElementById('dialog-node-' + node.id)!;
		const frameRect = frame.getBoundingClientRect();

		const left = 0 + frameRect.width / 2;
		const right = canvasRect.width - frameRect.width / 2;
		const top = 0 + frameRect.height / 2;
		const bottom = canvasRect.height - frameRect.height / 2;

		new_x = Math.max(left, Math.min(new_x, right));
		new_y = Math.max(top, Math.min(new_y, bottom));

		return [new_x, new_y];
	}

	function moveTo(new_x: number, new_y: number) {
		[x, y] = constrained(new_x, new_y);
		node.x = x;
		node.y = y;
		node.onMoved.emit([x, y]);
	}

	function moveDialog(event: MouseEvent) {
		moveTo(x + event.movementX, y + event.movementY);
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
		moveTo(0, 0);
	}
</script>

<div class="frame" style="left: {x}px; top: {y}px;" id="dialog-node-{node.id}">
	<button class="move-handle" onmousedown={startDragging} onmouseup={stopDragging}>
		<Icon icon="si:move-duotone" color="text" width="30" height="30" />
	</button>

	<button class="plug top-center">
		<Icon icon="ci:link-vertical" width="30" height="30"></Icon>
	</button>

	<p class="status"><bold>NPC line</bold></p>
	<p class="text">
		{#each node.lines as line, i (i)}
			<LineInput {line} />
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

	<button class="plug bottom-center">
		<Icon icon="ci:link-vertical" width="30" height="30"></Icon>
	</button>
</div>

<style>
	.frame {
		background-color: var(--node-color);
		padding: 1rem;
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
	.higher {
		position: relative;
		bottom: 8px;
	}
	.bottom-center {
		left: 50%;
		bottom: 0;
		transform: translate(-50%, 100%);
		border-radius: 0 0 50px 50px;
	}
	.plug {
		position: absolute;
		width: 100px;
		background-color: var(--node-color);
		border: none;
	}
	.plug:hover {
		background-color: var(--edge-color);
	}
	.top-center {
		left: 50%;
		top: 0;
		transform: translate(-50%, -100%);
		border-radius: 50px 50px 0 0;
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
