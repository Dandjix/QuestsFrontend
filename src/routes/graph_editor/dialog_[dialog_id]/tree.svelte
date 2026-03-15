<script lang="ts">
	import type { Dialog } from "./classes";
	import EdgeCanvas from "./edge/edgeCanvas.svelte";
	import NodeComponent from "./nodeComponent.svelte";

    const {dialog, width, height}:{dialog:Dialog,width:number,height:number} = $props();

</script>

<style>
    .background{
        position: relative;
    }
</style>

<div class="background" style="width: {width}px; height:{height}px;">
    <EdgeCanvas {dialog} {width} {height}/>

    {#each dialog.nodes as node (node.id)}
    <NodeComponent {node}/>
    {/each}

</div>