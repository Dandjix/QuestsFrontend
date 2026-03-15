import { QuestsEvent } from '../../events';
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
	/**
	 * the arguments are the new position of the node
	 */
	onMoved: QuestsEvent<[number,number]>

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
		this.lines = lines;
		this.x = x;
		this.y = y;
		this.id = id;
		this.onMoved = new QuestsEvent();
	}
}

class Dialog {
	nodes: DialogNode[];
	edges: DialogEdge[];
	/**
	 * argument is the node that has been moved
	 */
	onNodeMoved = new QuestsEvent<DialogNode>()
	private _nodeHandlers = new Map<DialogNode, () => void>();

	addNode(node : DialogNode){
		this.nodes.push(node)
		const func = () => {
			this.onNodeMoved.emit(node)
		}
		this._nodeHandlers.set(node,func)
		node.onMoved.subscribe(func)
	}

	removeNode(node : DialogNode){ 
		const index : number = this.nodes.indexOf(node)
		if(index >= 0){
			this.nodes.splice(index,1)
			const func = this._nodeHandlers.get(node)
			if (func){
				node.onMoved.unsubscribe(func)
				this._nodeHandlers.delete(node)
			}
			else{
				console.warn("Node was removed which was not registered in nodeHandlers (most likely it was not added with addNode)")
			}
		}
	}


	constructor(nodes: DialogNode[], edges: DialogEdge[]) {
		this.nodes = [];
		nodes.forEach(n => {this.addNode(n)});
		
		this.edges = edges;
	}
}

export { NPCLine, PlayerLine, DialogNode, Dialog };
