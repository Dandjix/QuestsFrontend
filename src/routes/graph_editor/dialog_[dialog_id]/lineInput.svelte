<script lang="ts">
    let {line} = $props()
    let text = $derived(line.text)

</script>

<input type="text" value="{text}"/>