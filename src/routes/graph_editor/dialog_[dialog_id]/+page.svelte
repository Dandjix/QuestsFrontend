<script lang="ts">
	import { page } from "$app/state";
	import Tree from "./tree.svelte";


	class Node {
		text : string
		x : number
		y : number
		id : number

		/**
		 *
		 */
		constructor(text : string, x : number, y : number, id : number) {
			this.text = text
			this.x = x
			this.y = y
			this.id = id
		}
	}
	class Edge{
		from : Node
		to : Node
		text : string
		/**
		 *
		 */
		constructor(from : Node, to : Node, text : string) {
			this.from = from
			this.to = to
			this.text = text
		}
	}


	class Dialog{
		nodes : Node[]
		edges : Edge[]
		
		 /**
		  *
		  */
		 constructor(nodes : Node[],edges : Edge[])
		 {
			this.nodes = nodes
			this.edges = edges
		 }
	}

	let dialog = new Dialog(
		[new Node("Hello, how are you doing on this fine day, sir ?",0,0,0)],
		[]
	);

</script>
<h1>Editing dialog : {page.params.dialog_id}</h1>

<Tree {dialog} width={1000} height={750}></Tree>

