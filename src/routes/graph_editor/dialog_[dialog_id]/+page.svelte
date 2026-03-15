<script lang="ts">
	import { page } from '$app/state';
	import Tree from './tree.svelte';

	// import NodeComponent from "./nodeComponent.svelte"

	import { NPCLine, DialogNode, Dialog, PlayerLine } from './classes.ts';
	import { DialogEdge } from './edge/classes.ts';

	const dialog_width = 1920;
	const dialog_height = 4000;

	const lines = [
		new DialogNode([new NPCLine('1')], dialog_width / 2 - 300, 100, 1),
		new DialogNode([new NPCLine('2')], dialog_width / 2, 400, 2),
		new DialogNode([new NPCLine('3')], dialog_width / 2 + 450, 700, 3),
		new DialogNode([new NPCLine('4')], dialog_width / 2 - 450, 1000, 4),
		new DialogNode(
			[
				new NPCLine('hullo'),
				new NPCLine('how are you ?'),
				new NPCLine('may I help you ?'),
				new NPCLine('you deaf or what ?')
			],
			dialog_width / 2,
			dialog_height / 2,
			5
		),
		new DialogNode([new NPCLine('goobye')], dialog_width / 2, dialog_height / 2 + 150, 6)
	];

	let dialog: Dialog = new Dialog(lines, [
		new DialogEdge(new PlayerLine('Buzz off'), lines[0], lines[1]),
		new DialogEdge(new PlayerLine('Buzz off'), lines[1], lines[2]),
		new DialogEdge(new PlayerLine('Buzz off'), lines[2], lines[3]),
	]);
</script>

<style>
	.container{
		width: 100%;
		height: 100%;
	}

	.graph{
		display: flex;
		justify-content: center;
		align-items: center;
	}

</style>

<div class="container">


	<h1>Editing dialog : {page.params.dialog_id}</h1>
	<div class="graph">
		<Tree {dialog} width={dialog_width} height={dialog_height}></Tree>
	</div>
	
</div>