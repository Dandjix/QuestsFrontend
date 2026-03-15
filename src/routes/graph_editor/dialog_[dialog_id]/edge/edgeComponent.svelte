<script lang="ts">
	import { onMount } from "svelte";
    import { DialogEdge } from "./classes";

    const {edge} : {edge : DialogEdge} = $props()

    let x : number = $state(0)
    let y : number = $state(0)


    const onMoved = () => {
        const [fromX,fromY] = edge.from.getBottomOutput()
        const [toX,toY] = edge.to.getTopInput()

        const newX = fromX*0.5 + toX*0.5
        const newY = fromY*0.5 + toY*0.5

        x = newX
        y = newY

        console.log("edge moved");
    };  

    edge.from.onMoved.subscribe(onMoved)
    edge.to.onMoved.subscribe(onMoved)

    onMount(()=>{
        onMoved()
    })

</script>

<style>
	.frame {
		background-color: rgb(102, 102, 182);
		border-radius: 2rem;
		padding: 1rem;
		border: 2mm ridge rgb(229, 215, 255);
		width: 15rem;
		font-size: large;
		text-align: justify;

		position: absolute;
		translate: -50% -50%;
	}
</style>

<div class="frame" style="left:{x}px; top:{y}px;">
	<p>Player line</p>
	<p>{edge.line.text}</p>
</div>
