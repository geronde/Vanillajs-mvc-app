class Router {
    constructor(controller) {
        this.routes = []
        this.controller=controller
    }
    addRoutes(name, url) {
        this.routes.push({
            name: name,
            url:url
        })
    }
    loadRoute(){
    	const path=window.location.pathname
    	const route = this.routes.filter(r=> path===r.url)[0]
    	if(route){
    		this.controller.renderRoute(route.name)
    	}
    	else {
    		document.querySelector("#feed").innerHTML="not found"
    	}
    }
}
