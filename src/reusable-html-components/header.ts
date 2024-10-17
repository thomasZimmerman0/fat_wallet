import Reusable_Componenet from "./reusable-component";
export default class Header extends Reusable_Componenet {

    constructor(HTML?: string, styleSheetHref?: string) {
        if(styleSheetHref == undefined){
            styleSheetHref = "../css/header.css";
        }
        if(HTML == undefined){
            HTML = /*html*/`
            <header class="layout-header">
                <img class="header-logo" src="../assets/logo-placeholder.png" alt="logo">
                <ul class="header-links">
                    <li>Home</li>
                    <li>Budget Builder</li>
                    <li>Sign Up</li>
                </ul>
            </header>
            `
        }
        super(HTML, styleSheetHref);
    }
}