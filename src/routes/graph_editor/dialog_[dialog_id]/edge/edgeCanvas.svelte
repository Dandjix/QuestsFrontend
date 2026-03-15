<script lang="ts">
	import { onMount } from 'svelte';
	import type { Dialog } from '../classes';

	const { dialog }: { dialog : Dialog } = $props();

	const drawEdges = ()=>{
		const canvas = document.getElementById("questsEdgeCanvas") as HTMLCanvasElement
		const context = canvas.getContext("2d")!

		context.lineWidth = 7
		context.strokeStyle = "#444"

		//clear canvas
		context.clearRect(0, 0, canvas.width, canvas.height);

		context.beginPath()
		dialog.edges.forEach((edge) =>{


			const fromX = (edge.from.x ) 
			const fromY = (edge.from.y ) 
			const toX = (edge.to.x ) 
			const toY = (edge.to.y ) 

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
