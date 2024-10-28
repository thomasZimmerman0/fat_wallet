import Reusable_Componenet from "./reusable-component";
export default class Header extends Reusable_Componenet {

    constructor(HTML?: string, styleSheetHref?: string) {
        if(styleSheetHref == undefined){
            styleSheetHref = "../css/budget-builder.css";
        }
        if(HTML == undefined){
            HTML = /*html*/`
            <div>
                <canvas id="myChart"></canvas>
            </div>
            `
        }
        super(HTML, styleSheetHref);
    }
}