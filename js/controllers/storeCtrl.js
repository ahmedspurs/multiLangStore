angular.module("myApp")
.controller("storeCtrl",function($scope,$rootScope){
    $(document).ready(function(){
        $('#showNav').click(function(){
            $('.navigation').show(500);
            $(this).hide()
        })
    
        $('#hideNav').click(function(){
            $('.navigation').hide(500);
            $('#showNav').show(600)
        })
    })

    $scope.storeP = [
        [
            {name:"I Phone 7" , price:"1290",img:"../img/1.jpg"},
            {name:"Camrey 2007" , price:"100",img:"../img/2.jpg"},
            {name:"Mate 8" , price:"520",img:"../img/3.jpg"},
            {name:"I Phone 8" , price:"700",img:"../img/4.jpg"},
            {name:"Road bike" , price:"300",img:"../img/5.jpg"},
            {name:"Galaxy s8" , price:"110",img:"../img/6.jpg"},
            {name:"Camrey 2007" , price:"100",img:"../img/2.jpg"},
            {name:"Mate 8" , price:"520",img:"../img/3.jpg"},
            
        ],
        [
            {name:"ايفون 7" , price:"1290",img:"../img/1.jpg"},
            {name:"كامري 2007" , price:"100",img:"../img/2.jpg"},
            {name:"توشببا ستالايت" , price:"520",img:"../img/3.jpg"},
            {name:"جالاكسي اس 5" , price:"700",img:"../img/4.jpg"},
            {name:"دراجه طريق" , price:"300",img:"../img/5.jpg"},
            {name:"خوده دراجه" , price:"110",img:"../img/6.jpg"},
            {name:"كامري 2007" , price:"100",img:"../img/2.jpg"},
            {name:"توشببا ستالايت" , price:"520",img:"../img/3.jpg"},
        ]
    ]
})