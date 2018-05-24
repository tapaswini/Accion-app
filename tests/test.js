describe('dataController', function () {
    
    beforeEach(module('myApp'));
    
    it('scopeTestSpec',
        
        inject(function ($controller, $rootScope) {
            var $scope = $rootScope.$new();
            $controller('dataController', {
                $scope: $scope
            });
            
            expect($scope.sortType).toEqual('userId');
            expect($scope.sortReverse).toBeDefined();
        expect($scope.sortReverse).toBeFalsy();
        }));
        
it('scopeTestSpecFunction',
        inject(function ($controller, $rootScope) {
            var $scope = $rootScope.$new();
            var controllerInst = $controller('dataController', {
                $scope: $scope
            });
            expect(controllerInst).toBeDefined();
        }));
});