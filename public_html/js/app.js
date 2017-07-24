(function () {
    angular.module('appCherryPick', ['ui.bootstrap', 'ngSanitize'])
            .service("BBService", function ($http) {
                return {
                    getRepos: function (ProjectName) {
                        return $http.get("");
                    },
                    getTags: function (RepoName) {
                        return $http.get("");
                    },
                    getCommits: function (RepoName) {
                        return $http.get("");
                    },
                    getCommitStatus: function (commitId) {
                        return $http.get("");
                    },
                    getCommitBranch: function (commitId) {
                        return $http.get("");
                    }
                };
            })
            .service("DBService", function ($http) {
                return {
                    
                };
            });

})();