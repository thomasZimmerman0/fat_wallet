export default class Reusable_Componenet {

    private HTML: string;
    private styleSheet: string;

    constructor(HTML: string, styleSheetHref: string) {
        this.HTML = HTML;
        let styleSheetLink = /*html*/`<link rel="stylesheet" type ="text/css" href="${styleSheetHref}">`;
        this.styleSheet = styleSheetLink;
    }

    setHTML(newHTML: string): void {
        this.HTML = newHTML;
    }

    setStylesheet(styleSheetHref: string): void {
        let styleSheetLink = /*html*/`<link rel="stylesheet" type ="text/css" href="${styleSheetHref}">`;
        this.styleSheet = styleSheetLink;
    }

    getHTML(): string {
        if(this.HTML == undefined){
            throw new Error("The HTML for the header is currently undefined");
        } else {
            return this.HTML;
        }
    }

    getStylesheet(): string {
        if(this.HTML == undefined){
            throw new Error("The HTML for the header is currently undefined");
        } else {
            return this.styleSheet;
        }
    }

    getElement(): HTMLElement | null {
        if(this.HTML == undefined){
            throw new Error("The HTML for the header is currently undefined");
        } else {
            let wrapper: HTMLElement = document.createElement("div") as HTMLElement;
            wrapper.innerHTML = this.HTML;
            if(wrapper != null){
                return wrapper.firstElementChild as HTMLElement;
            } else {
                return null;
            }
        }
    }

    getStylesheetElement(): HTMLElement | null {
        if(this.styleSheet == undefined){
            throw new Error("The stylesheet for the header is currently undefined");
        } else {
            let wrapper: HTMLElement = document.createElement("div") as HTMLElement;
            wrapper.innerHTML = this.styleSheet;
            if(wrapper != null){
                return wrapper.firstElementChild as HTMLElement;
            } else {
                return null;
            }
        }
    }

}