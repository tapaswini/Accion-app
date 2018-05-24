var app = angular.module('myApp', []);

app.factory('DataService', function($http, $q) {

    var records = [];
    return {

        getData: function() {
            var def = $q.defer();

            $http.get("http://jsonplaceholder.typicode.com/posts")
                .success(function(data) {
                    records = data;
                    def.resolve(data);
                    return records;
                })
                .error(function() {
                    def.reject("Failed to get records");
                });
            return def.promise;
        }
    };

});

app.controller('dataController', ['$scope', 'DataService', function($scope, DataService) {
    $scope.sortType = 'userId'; // seting the default sort type
    $scope.sortReverse = false;
    $scope.geData = function() {
        $scope.loading = true;

        DataService.getData()
            .then(function(data) {
                    $scope.records = data;
                    $scope.loading = false;
                },
                function(data) {
                    console.log('Data retrieval failed.' + data)
                });
    };

    $scope.geData();
}]);