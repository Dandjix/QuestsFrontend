<script lang="ts">
    let {line} = $props()
    let text = $state(line.text)
</script>

<input type="text" value="{text}"/>