(function()
 {
    var app = angular.module('nausicaa',[]);
    
    function weddingController()
    {
        vm=this;
        
        
        var amy = {
            userImg:"resources/img/people/amy_brown.png",
            userGender:0,  //0F - 1M
            userName:"Amy Brown",
            userAffil:0, //0K - 1J
            whoToCouple:"Katie's College Roomate",
            school:"ud",
            title:"",
            role:"Maid of Honor",
            desc:""
        
        };
        
        var tom = {
            userImg:"resources/img/people/tom_kerrigan.png",
            userGender:1,  //0F - 1M
            userName:"Tom Kerrigan",
            userAffil:1, //0K - 1J
            whoToCouple:"Jimmy's College Roomate",
            school:"ud",
            title:"",
            role:"",
            desc:""
        
        };
        
        vm.people = [amy, tom];
        
        
        
        
    }
    
    
    
    app.controller('weddingController', weddingController);
    
    app.directive('weddingParty', function(){
        
        return{
        
            restrict:'E',
            scope: { person: '=' },
            templateUrl:'resources/templates/weddingPartyTemplate.html',
            link: function link(scope, element, attrs) {
                
                
                
                scope.genderLogic = genderLogic;
                
                function genderLogic(gender){
            
                    gender = !!gender;
                    
                    return gender;
                }
                
                
            }
            
        }        
    });
    
})();