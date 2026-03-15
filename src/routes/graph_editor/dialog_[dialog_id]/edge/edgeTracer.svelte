<script lang="ts">
    import { DialogEdge } from "./classes";

    let {edges}:{edges:DialogEdge[]} = $props()

</script>

<div>
    <h1> hello, there are {edges.length} edges</h1>
</div>