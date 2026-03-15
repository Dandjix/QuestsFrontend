<script lang="ts">
	import { onMount } from 'svelte';
	import type { Dialog } from '../classes';

	const { dialog ,width, height }: { dialog : Dialog, width : number, height : number } = $props();

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

	// svelte-ignore state_referenced_locally
	dialog.onNodeMoved.subscribe(drawEdges)

	onMount(()=>{
		drawEdges()
	})
</script>

<style>
	.canvas{
		border: 1px dashed gray;
		border-radius: 50px;
	}
</style>



<canvas width={width} height={height} id="questsEdgeCanvas" class="canvas"></canvas>
