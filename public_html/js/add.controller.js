angular.module('appCherryPick')
        .controller("addController", function ($scope, BBService, DBService) {
            $scope.project_name = "RDM-FOR-JCP";
            $scope.project_internal = "RDMFORJCP";

            $scope.source_repo = "";
            $scope.source_commit = "";
            $scope.source_branch = "";
            $scope.source_repos = ["A"];

            $scope.target_repo = "";
            $scope.target_tag = "";
            $scope.target_repos = [];

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

            $scope.selectTargetTag = function (tag) {
                $scope.target_tag = tag;
            };
            $scope.deselectTargetTag = function () {
                $scope.target_tag = null;
            };


            $scope.load_repos = function (project) {
                $scope.load_repos_status = true;
            };
            

            $scope.load_tags = function (repo) {
                $scope.load_tags_status = false;
            };

            $scope.load_commits = function (repo) {
                $scope.load_commits_status = false;
            };

            $scope.load_commit_info = function (commitId) {
                $scope.load_commit_info_status = false;
            };

            $scope.load_commit_branch = function (commitId) {
                $scope.load_commit_branch_status = false;
            };
            
            
            $scope.load_repos();

        });