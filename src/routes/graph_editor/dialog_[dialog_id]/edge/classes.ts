import type { DialogNode, PlayerLine } from "../classes";

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

export {DialogEdge}