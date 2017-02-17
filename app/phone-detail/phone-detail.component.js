angular.
    module('phoneDetail').
        component('phoneDetail', {
            templateUrl: 'phone-detail/phone-detail.template.html',
            controller: ['$routeParams', '$http', '$log',
                function PhoneListController($routeParams, $http, $log) {
                    var self = this;

                    $http.get('phones/' + $routeParams.phoneId + '.json').then(function (response) {
                        self.phone = response.data;
                    });
                }
            ]
        });
