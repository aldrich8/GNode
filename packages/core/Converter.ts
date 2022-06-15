import Node from "./LineNode";
import ConditionNode from "./ConditionNode";

const node = new Node();
node.addLeftNode(new Node());
node.addRightNode(new Node());
node.leftNodes[0].addTopNode(new ConditionNode());

console.log(node.leftNodes[0].topNodes);