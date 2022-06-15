import Node from "../../packages/core/Node";

function render(rootNode: Node) {
    const nodeTree = rootNode.getNodeData();
}

export function mount(selector: string, nodeTree: Node) {
    render(nodeTree);
}