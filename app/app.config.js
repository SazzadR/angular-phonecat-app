phonecatApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider.when('/phones', {
        template: '<phone-list></phone-list>'
    });

    $routeProvider.when('/phones/:phoneId', {
        template: '<phone-detail></phone-detail>'
    });

    $routeProvider.otherwise('/phones');
}]);