"use strict";
// var getA = function(a){
//     return a;
// }

// let getA = a =>a;

// let square = (a) =>{return a*a};

// var a =4;
// let square = _ =>{return a*a};

// let  mult = (a,b)=>{return a*b};
// console.log(mult(3,5))

var x = function(){
    this.val = 1;
    setTimeout(()=>{
        this.val++;
        console.log(this.val);
    },1)
};
var xx= new x();

var y = (...n)=>{
    console.log(n[0]);
}

y(1,2,3);