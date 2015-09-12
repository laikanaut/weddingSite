(function()
 {
    var app = angular.module('nausicaa',[]);
    
    function weddingController()
    {
        vm=this;
        
        
        vm.person={
            userImg:"",
            userGender:0,
            userName:"Amy Brown",
            userAffil:0,
            school:"ud",
            title:"",
            role:"Maid of Honor",
            desc:""
        
        }
        
    }
    
    
    
    app.controller('weddingController', weddingController);
    
    app.directive('weddingParty', function(){
        
        return{
        
            restrict:'E',
            templateUrl:'resources/templates/weddingPartyTemplate.html'
            
        }        
    });
    
})();