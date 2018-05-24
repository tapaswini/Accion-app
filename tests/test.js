describe('dataController', function () {
    //2.
    beforeEach(module('myApp'));
    //3.
    it('scopeTestSpec',
        //4.
        inject(function ($controller, $rootScope) {
            var $scope = $rootScope.$new();
            $controller('dataController', {
                $scope: $scope
            });
            //5.
            expect($scope.sortType).toEqual('userId');
            expect($scope.sortReverse).toBeDefined();
        expect($scope.sortReverse).toBeFalsy();
        }));
            //6.
it('scopeTestSpecFunction',
        inject(function ($controller, $rootScope) {
            var $scope = $rootScope.$new();
            var controllerInst = $controller('dataController', {
                $scope: $scope
            });
            expect(controllerInst).toBeDefined();
        }));
});