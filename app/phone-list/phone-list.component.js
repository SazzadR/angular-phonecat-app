angular.
    module('phoneList').
        component('phoneList', {
            templateUrl: 'phone-list/phone-list.template.html',
            controller: ['$http', '$log', 'Phone',
                function PhoneListController($http, $log, Phone) {
                    var self = this;
                    self.phones = Phone.query();
                    self.orderProp = 'age';
                }
            ]
        });
