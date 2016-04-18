var LandingPageController=function($scope) {
    $scope.models = {
        helloAngular: "I work!"
    };
}

//inject 
LandingPageController.$inject = ['$scope'];