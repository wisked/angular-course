var app = angular.module('LunchCheck', []);
app.controller('LunchCheckController', ['$scope', function ($scope) {
        $scope.input = '';
        $scope.submit = function () {
            if ($scope.input.length === 0) {
                $scope.message = 'Please enter data first'
            }
            else {
                var item = $scope.input.split(', ');
                $scope.message  = item.length <= 3 ? 'Enjoy' : 'Too much!'
            }

        }
    }
]);
