angular.
    module('phoneDetail').
        component('phoneDetail', {
            templateUrl: 'phone-detail/phone-detail.template.html',
            controller: ['$routeParams', '$http', '$log',
                function PhoneListController($routeParams, $http, $log) {
                    var self = this;

                    self.setImage = function (imageUrl) {
                        self.mainImageUrl = imageUrl;
                    }

                    $http.get('phones/' + $routeParams.phoneId + '.json').then(function (response) {
                        self.phone = response.data;
                        self.setImage(self.phone.images[0]);
                    });
                }
            ]
        });
