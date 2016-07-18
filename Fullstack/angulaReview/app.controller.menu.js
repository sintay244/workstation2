angular.module('CakeApp')
	.controller('MenuController', MenuController)

MenuController.$inject = ['CheesecakeFactory']

function MenuController(CheesecakeFactory) {
    console.info('MenuController:CheesecakeFactory', CheesecakeFactory)

    var Menu = this

    Menu.title = 'Awesome sauce'
    Menu.items = CheesecakeFactory.menuItems
    Menu.search=''
    Menu.items=CheesecakeFactory.menuitems
}
