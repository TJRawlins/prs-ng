export class Menu {
    display: string = "";
    route: string = "";
    tooltip: string = "";

    constructor(display: string, route: string) {
        this.display = display;
        this.route = route;
    }
}