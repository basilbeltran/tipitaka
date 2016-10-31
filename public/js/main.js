
angular.module("buddha", [])
    .controller("mindController", mindControl);

mindControl.$inject = ['$http'];

function mindControl($http) {
    var mindThis = this;

    mindThis.greeting = "Monks...";
    trace("Address the monks");

    $http.get('/api/buddha/allWordsArray').then(function(response) {
      console.log(response.data);
      mindThis.arr = response.data;
    });
    trace("show sorted words");
}

trace = (text) => {
  console.log( (window.performance.now() / 1).toFixed(3) + ': ' + text );
}
