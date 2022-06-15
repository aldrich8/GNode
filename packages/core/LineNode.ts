// import AbsNode from "./AbsNode";
import Node from "./Node";

class LineNode extends Node {
    type: string = "lineNode";

    public line: boolean = true;
    public lineStyle = "solid";
    public lineWidth = 1;
    public lineColor = "black";
    public lineDash = [];
    public lineDashOffset = 0;

    public backgroundColor: string | null = null;
    public backgroundOpacity: number | null = null;

    public fontSize: number | null = null;
    public fontFamily: string | null = null;
    public fontColor: string | null = null;
    public fontStyle: string | null = null;
    public fontWeight: string | null = null;
    public fontVariant: string | null = null;


    getLineBorderProperties() {
        return {
            lineStyle: this.lineStyle,
            lineWidth: this.lineWidth,
            lineColor: this.lineColor,
            lineDash: this.lineDash,
            lineDashOffset: this.lineDashOffset
        }
    }

    getLineFontProperties() {
        return {
            fontSize: this.fontSize,
            fontFamily: this.fontFamily,
            fontColor: this.fontColor,
            fontStyle: this.fontStyle,
            fontWeight: this.fontWeight,
            fontVariant: this.fontVariant,
        }
    }

    getBackgroundProperties() {
        return {
            backgroundColor: this.backgroundColor,
            backgroundOpacity: this.backgroundOpacity,
        }
    }

    // rewrite this method
    getNodeData() {
        const nodeData = super.getNodeData();
        return {
            ...nodeData,
            line: this.line,
            lineStyle: this.lineStyle,
            lineWidth: this.lineWidth,
            lineColor: this.lineColor,
            lineDash: this.lineDash,
            lineDashOffset: this.lineDashOffset,
            backgroundColor: this.backgroundColor,
            backgroundOpacity: this.backgroundOpacity,
            fontSize: this.fontSize,
            fontFamily: this.fontFamily,
            fontColor: this.fontColor,
            fontStyle: this.fontStyle,
            fontWeight: this.fontWeight,
            fontVariant: this.fontVariant,
        }
    }
}

export default LineNode;