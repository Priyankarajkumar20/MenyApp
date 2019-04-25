(function () {
    angular.module('MenuApp')
        .config(['$sceDelegateProvider', function ($sceDelegateProvider) {
            $sceDelegateProvider.resourceUrlWhitelist(['**']);
        }])
        .component('categoryList', {      
            templateUrl: 'src/Category/menu.template.html',
            bindings: {
                items: '<',
            }
        });
})();