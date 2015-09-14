(function()
 {
    var app = angular.module('nausicaa',['ngAnimate']);
    
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
        
        vm.homepage = "resources/pages/ourwedding.html";
        vm.currentPage = "ourwedding";
        vm.loadPage = loadPage;
        
        
        function init(){
            
        }
        
        function loadPage(page)
        {
            vm.homepage = "resources/pages/"+page+".html";
            vm.currentPage = page;
            
        }
        
        init();
        
        
        
    }
    
    
    
    app.controller('weddingController', weddingController);
    
    
    
})();