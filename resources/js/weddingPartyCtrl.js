(function()
{
 
    var app = angular.module("nausicaa")
    
    app.directive('weddingParty', function(){
        
        return{

            restrict:'E',
            scope: { person: '=' },
            templateUrl:'resources/templates/weddingPartyTemplate.html',
            link: function link(scope, element, attrs) {

                scope.genderLogic = genderLogic;

                function genderLogic(gender)
                {
                    gender = !!gender;

                    return gender;
                }


            }

        }        
    });
})();