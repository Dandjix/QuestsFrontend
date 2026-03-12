<script lang="ts">
	import Icon from '@iconify/svelte';
	const { node } = $props();
</script>

<div class="frame" style="left: calc(50% + {node.x}px); top: calc(50% + {node.y}px);">
	<button class="move-handle">
		<Icon icon="si:move-duotone" color="text" width="30" height="30" />
	</button>
	
	<p class="status"><bold>NPC line</bold></p>
	<p class="text">
		{node.text}
	</p>
	<span class="actions">
		<button class="icon-button">
			<Icon icon="mdi:pen" color="yellow" width="50" height="50" />
		</button>
		<button class="icon-button">
			<Icon icon="mdi:trash" color="red" width="50" height="50" />
		</button>
	</span>
</div>

<style>
	.status {
		margin-top: 0;
		color: #a00;
	}

	.text {
		color: #112;
	}

	.icon-button{
		width: fit-content;
		height: fit-content;
		border-radius: 25px;
	}

	.actions {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
		padding-left: 1rem;
		padding-right: 1rem;
	}

	.frame {
		background-color: #667;
		border-radius: 2rem;
		padding: 1rem;
		border: 2mm ridge #eef;
		width: 15rem;
		font-size: large;
		text-align: justify;

		position: absolute;
		translate: -50%;
	}

	.move-handle{
		width: 100%;
		margin-bottom: 0.75rem;
		height: 35px;
		border-radius: 17.5px;
	}
</style>
