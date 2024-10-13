export default class Header {

    constructor(private HTML?: string, private stylePage?: string) {
        if(this.stylePage == undefined){
            this.stylePage = "../css/header.css";
        }
        if(this.HTML == undefined){
            this.HTML = /*html*/`
            <header>
                <ul class="header-links">
                    <li>Home</li>
                    <li>Budget Builder</li>
                    <li>Sign Up</li>
                </ul>
            </header>
            `
        }
    }

    setHTML(newHTML: string): void {
        this.HTML = newHTML;
    }

    getHTML(): string {
        if(this.HTML == undefined){
            throw new Error("The HTML for the header is currently undefined");
        } else {
            return this.HTML;
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

}