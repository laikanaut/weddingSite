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
        
        var tomp = {
            userImg:"resources/img/people/tom_potter.png",
            userGender:0,  //0F - 1M
            userName:"Tom Potter",
            userAffil:0, //0K - 1J
            whoToCouple:"Katie's Brother",
            school:"ud",
            title:"",
            role:"",
            desc:""
        
        };
        
        var casey = {
            userImg:"resources/img/people/casey_keller.png",
            userGender:0,  //0F - 1M
            userName:"Casey Keller",
            userAffil:0, //0K - 1J
            whoToCouple:"Katie's High School Friend",
            school:"ud",
            title:"",
            role:"",
            desc:""
        
        };
        
        var lauren = {
            userImg:"resources/img/people/lauren_peach.png",
            userGender:0,  //0F - 1M
            userName:"Amy Brown",
            userAffil:0, //0K - 1J
            whoToCouple:"Katie's High School Friend",
            school:"ud",
            title:"",
            role:"",
            desc:""
        
        };
        
        var john = {
            userImg:"resources/img/people/john_dicairano.png",
            userGender:0,  //0F - 1M
            userName:"Amy Brown",
            userAffil:0, //0K - 1J
            whoToCouple:"Jimmy's Cousin",
            school:"ud",
            title:"",
            role:"Best Man",
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
        
        vm.brideSide = [amy, tomp, casey, lauren];
        vm.groomSide = [john, tom];
        
        
        vm.homepage = "resources/pages/ourwedding.html";
        vm.currentPage = "ourwedding";
        vm.loadPage = loadPage;
        vm.menuExpanded = false;
        vm.toggleMenu = toggleMenu;
        
        function init(){
            
        }
        
        function loadPage(page)
        {
            vm.homepage = "resources/pages/"+page+".html";
            vm.currentPage = page;
            vm.menuExpanded = false;
            
        }

        function toggleMenu()
        {
            vm.menuExpanded = !vm.menuExpanded;
        }
        
        init();
        
        
        
    }
    
    
    
    app.controller('weddingController', weddingController);
    
    
    
})();