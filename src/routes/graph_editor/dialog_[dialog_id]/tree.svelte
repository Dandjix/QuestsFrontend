<script lang="ts">
	import type { Dialog } from "./classes.svelte";
	import EdgeCanvas from "./edge/edgeCanvas.svelte";
	import EdgeComponent from "./edge/edgeComponent.svelte";
	import NodeComponent from "./nodeComponent.svelte";

    const {dialog, width, height}:{dialog:Dialog,width:number,height:number} = $props();

</script>

<style>
    .background{
        position: relative;
        background-color: beige;
    }
</style>

<div class="background" style="width: {width}px; height:{height}px;">
    <EdgeCanvas {dialog} {width} {height}/>

    {#each dialog.nodes as node (node.id)}
    <NodeComponent {node}/>
    {/each}

    {#each dialog.edges as edge, i (i)}
    <EdgeComponent {edge}/>
    {/each}

</div>