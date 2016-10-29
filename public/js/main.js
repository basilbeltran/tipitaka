angular.module("buddha", [])
    .controller("mindController", mindControl);

mindControl.$inject = ['$http'];

function mindControl($http) {
    var mindThis = this;

    mindThis.greeting = "Monks...";

    $http.get('/api/buddha/allWords').then(function(response) {
      console.log(response.data);
        // mindThis.counter = JSON.parse(response.data.response.body);
        // console.log(mindThis.counter);

        // mindThis.counter at this point is a big object with property names
        // which are the words and the values are how many times he has said it

        // massage the data into an array on the front end
        // this can also be done on the back end in order to make the page load faster
        // because node is much faster than browser JavaScript
        // an array of objects is easier to sort using ng-repeat
        // mindThis.arr = [];
        // for(prop in mindThis.allWords) {
        //     mindThis.arr.push({
        //         word: prop,
        //         count: mindThis.counter[prop]
        //     });
        // }

        // console.log(mindThis.arr);
        //console.log(response.data.body);

        // the data has already been massaged on the back end now
    //mindThis.arr = response.data.body;
    });
}
