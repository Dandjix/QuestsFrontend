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
	 *
	 */
	constructor(lines: NPCLine[], x: number, y: number, id: number) {
		this.lines = lines;
		this.x = x;
		this.y = y;
		this.id = id;
	}
}

class Dialog {
	nodes: DialogNode[];
	edges: DialogEdge[];

	/**
	 *
	 */
	constructor(nodes: DialogNode[], edges: DialogEdge[]) {
		this.nodes = nodes;
		this.edges = edges;
	}
}

export { NPCLine, PlayerLine, DialogNode, Dialog };
