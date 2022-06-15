import gNodeUUID from '../utils/uuid';
import BaseNode from './BaseNode';

const nodeCaches = new Map<string, Node>();
export type NodePosition = "top" | "bottom" | "left" | "right" | "Nil"

export interface NodeData {
    id: string;
    parent: string | null;
    type: string;
    deep: number;
    nodePosition: NodePosition;
    leftNodes: NodeData[];
    rightNodes: NodeData[];
    topNodes: NodeData[];
    bottomNodes: NodeData[];
}

class Node implements BaseNode {
    type: string = "node";

    public id: string = gNodeUUID();

    public parent: Node | null = null;

    public deep: number = 0;

    public nodePosition: NodePosition = "Nil";

    public leftNodes: Node[] = [];
    public rightNodes: Node[] = [];
    public topNodes: Node[] = [];
    public bottomNodes: Node[] = [];

    constructor(rootNode?: Node) {
        this.init(rootNode);
    }

    private init(root?: Node): void { }

    private addNode(node: Node, nodePosition: NodePosition): void {
        node.parent = this;
        node.deep = this.deep + 1;
        node.nodePosition = nodePosition;
    }

    public addLeftNode(node: Node): void {
        this.addNode(node, "left");
        this.leftNodes.push(node);
    }
    public addRightNode(node: Node): void {
        this.addNode(node, "right");
        this.rightNodes.push(node);
    }
    public addTopNode(node: Node): void {
        this.addNode(node, "top");
        this.topNodes.push(node);
    }
    public addBottomNode(node: Node): void {
        this.addNode(node, "bottom");
        this.bottomNodes.push(node);
    }

    public getLeftNodes(): Node[] {
        return this.leftNodes;
    }

    public getRightNodes(): Node[] {
        return this.rightNodes;
    }

    removeNode(node: Node): void {
    }

    removeNodeById(id: string): void {
        nodeCaches.delete(id);

        this.leftNodes = this.leftNodes.filter(node => node.id !== id);
        this.rightNodes = this.rightNodes.filter(node => node.id !== id);
        this.topNodes = this.topNodes.filter(node => node.id !== id);
        this.bottomNodes = this.bottomNodes.filter(node => node.id !== id);
    }

    public getRoot(): Node {
        let node: Node = this;
        while (node.parent) {
            node = node.parent;
        }
        return node;
    }

    getNode(id?: string): Node {
        if (id && nodeCaches.has(id)) {
            return nodeCaches.get(id)!;
        }
        return this;
    }

    getNodes(): Map<string, Node> {
        return nodeCaches;
    }

    getNodesArray(): Node[] {
        return [...nodeCaches.values()];
    }

    getNodeData(): NodeData {
        return {
            id: this.id,
            parent: this.parent ? this.parent.id : null,
            deep: this.deep,
            type: this.type,
            nodePosition: this.nodePosition,
            leftNodes: this.leftNodes.map(node => node.getNodeData()),
            rightNodes: this.rightNodes.map(node => node.getNodeData()),
            topNodes: this.topNodes.map(node => node.getNodeData()),
            bottomNodes: this.bottomNodes.map(node => node.getNodeData()),
        };
    }
}

export default Node;