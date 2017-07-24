angular.module('appCherryPick')
        .controller("addController", function ($scope, $http, $sce) {
            $scope.dynamicPopover = {
                content: 'Hello, World!',
                templateUrl: 'myPopoverTemplate.html',
                title: 'Title'
            };

            $scope.source_repo = "";
            $scope.source_commit = "";
            $scope.source_branch = "";
            $scope.source_repos = ["A", "B", "C"];
            
            $scope.target_repo = "";
            $scope.target_tag = "";
            $scope.target_repos = ["A", "B", "C"];

            $scope.selectSourceRepo = function (repo) {
                $scope.source_repo = repo;
                $scope.isSourcePopupOpen = false;
            };
            
            $scope.selectSourceCommit = function (repo) {
                $scope.source_commit = repo;
            };
             $scope.deselectSourceCommit = function () {
                $scope.source_commit = null;
            };

            $scope.selectTargetRepo = function (repo) {
                $scope.target_repo = repo;
                $scope.isTargetPopupOpen = false;
            };

            $scope.source_load_repos = function () {

            };

            $scope.target_load_repos = function () {

            };

        });