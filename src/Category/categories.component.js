(function () {
    angular.module('MenuApp')
        .config(['$sceDelegateProvider', function ($sceDelegateProvider) {
            $sceDelegateProvider.resourceUrlWhitelist(['**']);
        }])
        .component('categoryList', {
            //category.template.html
            templateUrl: 'http://172.23.134.19:8082',
            bindings: {
                items: '<',
            }
        });
})();