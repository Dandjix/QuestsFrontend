<script lang="ts">
    import '../../../../main.css'
    import { DialogEdge } from "./classes";

    const {edge} : {edge : DialogEdge} = $props()

    let x : number = $state(0)
    let y : number = $state(0)


    $effect(()=>{
        const [fromX,fromY] = edge.from.getBottomOutput()
        const [toX,toY] = edge.to.getTopInput()

        const newX = fromX*0.5 + toX*0.5
        const newY = fromY*0.5 + toY*0.5

        x = newX
        y = newY

    })

</script>

<style>
	.frame {
		background-color: var(--edge-color);
		padding: 1rem;
		width: 15rem;
		font-size: large;
		text-align: justify;

		position: absolute;
		translate: -50% -50%;
	}
</style>

<div class="frame" style="left:{x}px; top:{y}px;">
	<p>Player line</p>
	<input value={edge.line.text}>
</div>
