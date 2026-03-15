<script lang="ts">
	import { onMount } from 'svelte';
	import type { Dialog } from '../classes';

	const { dialog }: { dialog : Dialog } = $props();

	const drawEdges = ()=>{
		const canvas = document.getElementById("questsEdgeCanvas") as HTMLCanvasElement
		const context = canvas.getContext("2d")!

		const rect = canvas.getBoundingClientRect();

		// Scale ratio between canvas internal resolution and CSS display size
		const scaleX = canvas.width / rect.width;
		const scaleY = canvas.height / rect.height;

		//clear canvas
		context.clearRect(0, 0, canvas.width, canvas.height);

		context.beginPath()
		dialog.edges.forEach((edge) =>{


			const fromX = (edge.from.x ) / scaleX;
			const fromY = (edge.from.y ) / scaleY;
			const toX = (edge.to.x ) / scaleX;
			const toY = (edge.to.y ) / scaleY;

			context.moveTo(fromX, fromY);
			context.lineTo(toX, toY);
		})
		context.closePath();
		context.stroke();

	}

	dialog.onNodeMoved.subscribe(drawEdges)

	onMount(()=>{
		drawEdges()
	})
</script>

<style>
	.canvas{
		border: 1px solid black;
		z-index: -1000;
	}
</style>



<canvas width="1000" height="1000" id="questsEdgeCanvas" class="canvas"></canvas>
