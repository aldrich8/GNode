import Node from "./Node";

export default class ConditionNode extends Node {
    type: string = "conditionNode";
    public condition: string = "";

    getNodeData() {
        const nodeData = super.getNodeData();
        return {
            ...nodeData,
            condition: this.condition,
        };
    }
}