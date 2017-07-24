angular.module('appCherryPick')
        .controller("rootController", function ($scope) {
            $scope.pages = {
                now: 'pages/home.page.html',
                home: 'pages/home.page.html',
                create: 'pages/new.page.html'
            };
        });