angular.
    module('phoneDetail').
        component('phoneDetail', {
            template: 'TBD: Detail view for <span>{{ $ctrl.phoneId }}</span>',
            controller: ['$routeParams', '$log',
                function PhoneListController($routeParams, $log) {
                    this.phoneId = $routeParams.phoneId
                }
            ]
        });