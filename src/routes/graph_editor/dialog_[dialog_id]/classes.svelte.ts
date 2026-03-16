import { SvelteMap } from 'svelte/reactivity';
import type { DialogEdge } from './edge/classes';

class NPCLine {
	text: string;

	constructor(text: string) {
		this.text = text;
	}
}

class PlayerLine {
	text: string;

	constructor(text: string) {
		this.text = text;
	}
}

class DialogNode {
	lines: NPCLine[];
	x: number;
	y: number;
	id: number;

	getTopInput() : [number,number]
	{
		const element = document.getElementById("dialog-node-"+this.id)!
		const rect = element.getBoundingClientRect()
		return [this.x,this.y - rect.height/2]
	}

	getBottomOutput() : [number,number]
	{
		const element = document.getElementById("dialog-node-"+this.id)!
		const rect = element.getBoundingClientRect()
		return [this.x,this.y + rect.height/2]
	}

	/**
	 *
	 */
	constructor(lines: NPCLine[], x: number, y: number, id: number) {
		this.lines = $state(lines);
		this.x = $state(x);
		this.y = $state(y);
		this.id = $state(id);
	}
}

class Dialog {
	nodes: DialogNode[];
	edges: DialogEdge[];
	/**
	 * argument is the node that has been moved
	 */
	private _nodeHandlers = new SvelteMap<DialogNode, () => void>();

	addNode(node : DialogNode){
		this.nodes.push(node) 
	}

	removeNode(node : DialogNode){ 
		const index : number = this.nodes.indexOf(node)
		if(index >= 0){
			this.nodes.splice(index,1)
		}
	}


	constructor(nodes: DialogNode[], edges: DialogEdge[]) {
		this.nodes = [];
		nodes.forEach(n => {this.addNode(n)});
		
		this.edges = edges;
	}
}

export { NPCLine, PlayerLine, DialogNode, Dialog };
