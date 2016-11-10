
angular.module('mind')
    .factory('mindFactory', mindFactory);

mindFactory.$inject = ['$http'];

function mindFactory ($http) {

    return {

        createHero : function(heroData){
            return $http.post('/api/heroes', heroData)
        },

        getHero : function(heroID){
            heroID = heroID ? '/' + heroID : ''
            return $http.get('/api/heroes' + heroID)
        }

    }
}
