<script lang="ts">
	import { onMount } from 'svelte';
	import type { Dialog } from '../classes';

	const { dialog, width, height }: { dialog: Dialog; width: number; height: number } = $props();

	const drawEdges = () => {
		const canvas = document.getElementById('questsEdgeCanvas') as HTMLCanvasElement;
		const context = canvas.getContext('2d')!;

		const bezier_strength = 75

		context.lineWidth = 7;
		context.strokeStyle = '#444';
		context.lineCap = "round"

		//clear canvas
		context.clearRect(0, 0, canvas.width, canvas.height);

		context.beginPath();
		dialog.edges.forEach((edge) => {
			const [fromX, fromY] = edge.from.getBottomOutput();
			const [toX, toY] = edge.to.getTopInput();

			context.moveTo(fromX, fromY);
			//bezier shenanigans

			context.bezierCurveTo(
				fromX,fromY + bezier_strength,
				toX,toY - bezier_strength,
				toX, toY);
		});
		context.stroke();
	};

	// svelte-ignore state_referenced_locally
	dialog.onNodeMoved.subscribe(drawEdges);

	onMount(() => {
		drawEdges();
	});
</script>

<canvas {width} {height} id="questsEdgeCanvas" class="canvas"></canvas>

<style>
	.canvas {
		border: 1px dashed gray;
	}
</style>
