angular.
    module('phoneDetail').
        component('phoneDetail', {
            templateUrl: 'phone-detail/phone-detail.template.html',
            controller: ['$routeParams', '$log', 'Phone',
                function PhoneListController($routeParams, $log, Phone) {
                    var self = this;

                    self.phone = Phone.get({phoneId: $routeParams.phoneId}, function (phone) {
                        self.setImage(phone.images[0]);
                    });

                    self.setImage = function (imageUrl) {
                        self.mainImageUrl = imageUrl;
                    };
                }
            ]
        });
