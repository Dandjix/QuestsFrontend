<script lang="ts">
import Node from "./node.svelte";
    let {dialog, width, height} = $props();

</script>

<style>
    .background{
        background-color: black;
    }
</style>

<div class="background" style="width: {width}px; height:{height}px;">
    {#each dialog.nodes as node (node.id)}
        <Node {node}/>
    {/each}

</div>