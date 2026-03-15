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

class DialogEdge {
	from: DialogNode;
	to: DialogNode;
	line: PlayerLine;
	/**
	 *
	 */
	constructor(line: PlayerLine, from: DialogNode, to: DialogNode) {
		this.line = line;
		this.from = from;
		this.to = to;
	}
}

class Dialog {
	nodes: DialogNode[];
	// edges : Edge[]

	/**
	 *
	 */
	constructor(
		nodes: DialogNode[]
		//  edges : Edge[]
	) {
		this.nodes = nodes;
		// this.edges = edges
	}
}

export { NPCLine, PlayerLine, DialogNode, DialogEdge, Dialog };
