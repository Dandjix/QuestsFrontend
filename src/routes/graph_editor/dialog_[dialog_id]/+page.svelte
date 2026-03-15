<script lang="ts">
	import { page } from '$app/state';
	import Tree from './tree.svelte';

	// import NodeComponent from "./nodeComponent.svelte"

	import {NPCLine,DialogNode, Dialog} from "./classes.ts"



	let dialog : Dialog = new Dialog(
		[new DialogNode([
			new NPCLine("hullo"),
			new NPCLine("how are you ?"),
			new NPCLine("may I help you ?"),
			new NPCLine("you deaf or what ?"),
		],5,10,1),
		new DialogNode([new NPCLine("goobye")],5,100,2)],
		[]
	);
</script>

<h1>Editing dialog : {page.params.dialog_id}</h1>

<Tree {dialog} width={1000} height={750}></Tree>
