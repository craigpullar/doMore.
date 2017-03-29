class Routes {
    constructor(){
        this.routes = [];
    }

    addRoute(method, path, handler) {
        let route = {
            method : method,
            path : path,
            handler : handler
        };

        this.routes.push(route);
    }
    getRoutes() {
        return this.routes;
    }
}
module.exports = new Routes();