var git = require('./execute');


var gitFolder = __dirname + '/' + Date.now();
var remoteName = 'origin';
var remoteUrl = 'https://sanmeranam:gayatri%4000@github.com/sanmeranam/gitapp.git';
var commitId = "019bf6fb5007ee8f18eaf2e8b4902e560b838da3";




git.init(gitFolder);

git.clone(remoteUrl)
        .then(function (result) {
            console.log("clone");
            return git.checkout("test2");
        })
        .then(function (result) {
            return git.cherrypick(commitId);
        })
        .then(function (result) {
            return git.addAll();
        })
        .then(function (result) {
            return git.push();
        })
        .catch(function (err) {
            console.log(err);
        });
