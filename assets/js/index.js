//selector
var element = document.querySelector('#feed')

var model = new Api();
var template = new Template()
var view = new View(element,template)
var controller = new Controller(model,view);
controller.init();

//router setup
var router = new Router(controller)
router.addRoutes("home","/")
router.loadRoute();

