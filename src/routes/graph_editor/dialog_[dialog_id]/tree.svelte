<script lang="ts">
	import type { Dialog } from "./classes";
	import EdgeTracer from "./edge/edgeTracer.svelte";
	import NodeComponent from "./nodeComponent.svelte";
    let {dialog, width, height}:{dialog:Dialog,width:number,height:number} = $props();

</script>

<style>
    .background{
    }
</style>

<div class="background" style="width: {width}px; height:{height}px;">
    <EdgeTracer edges={dialog.edges}/>
    {#each dialog.nodes as node (node.id)}
        <NodeComponent {node}/>
    {/each}

</div>