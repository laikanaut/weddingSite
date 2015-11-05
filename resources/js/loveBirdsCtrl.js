(function()
{
 
    var app = angular.module('nausicaa')
    
    app.directive('loveBirds', function(){
        
       return{
           
           templateUrl:'resources/templates/loveBirdsTemplate.html',
           link: function(scope, elem, attrs) {
               
                scope.bride = {
                    userImg:"resources/img/people/katie_potter.png",
                    userGender:0,  //0F - 1M
                    userName:"Katie Potter",
                    userAffil:0, //0K - 1J
                    whoToCouple:"The Bride",
                    school:"ud",
                    title:"",
                    role:"",
                    desc:""

                };
               
               scope.groom = {
                    userImg:"resources/img/people/jimmy_meisterich.png",
                    userGender:1,  //0F - 1M
                    userName:"Jimmy Meisterich",
                    userAffil:1, //0K - 1J
                    whoToCouple:"The Groom",
                    school:"ud",
                    title:"",
                    role:"",
                    desc:""

                };
               
               scope.isExpanded = false;
               
                scope.heartClick = function() {
                    
                   scope.isExpanded = !scope.isExpanded;
                   
               }
               
           }
           
       }
        
    });
})();
    
    
    