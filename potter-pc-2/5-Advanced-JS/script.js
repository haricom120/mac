//// Function Constructor

/*
var hari={
    name:'hari',
    birth:1993,
    job:'driver',
};


var Person=function(name, birth, job){
    this.name=name;
    this.birth=birth;
    this.job=job;
    };
Person.prototype.calcage=function(){
        console.log(2017-this.birth)
    };
Person.prototype.lastname='MWSU';

var vihari=new Person('vihari',1994,'safety' );
var lihari=new Person('lihari',1990,'doctor' );

vihari.calcage();
lihari.calcage();

console.log(vihari.lastname);
console.log(lihari.lastname);

*/


////object create

/*
var pp={
    clslcsge:function(){
    console.log(2017-birth);
    }
};


var hari=Object.create(pp);
hari.name='hari';
hari.birth=1993;
hari.job='driver';


var vihari=Object.create(pp,{
    name:{value:'vihari'},
    birth:{value:1994},
    job:{value:'safety'},
});
*/

/// Primitives vs object
/*
var ob1={
    name:'hari',
    age:26,
};
var ob2=ob1;
ob1.age=30;

console.log(ob1.age);
console.log(ob2.age);


var age=27;
var obj={
    name:'hari',
    city:'us'
};
function change(a,b){
    a=30;
    b.city="missouri";
}
change(age,obj);
console.log(age);
console.log(obj.city);

var years=[1980,1985,1990,1985,1993,2011];

function arrayCalc(arr, fn){
    var arrres=[];
    for(var i=0;i<years.length;i++){
        arrres.push(fn(arr[i]));
    }return arrres;
}

function alacage(el){
    return 2017-el;
}

function fullage(el){
    return el >=18;
}

function hart 
var ages=arrayCalc(years,alacage);
var fukagess=arrayCalc(ages,fullage);
console.log(ages);
console.log(fukagess);
*/
/*
function inq(job){
    if(job ==='driver'){
        return function(name){
            console.log(name + ' can u please explain the route');
        }
    }else if(job ==='safety'){
        return function(name){
            console.log(name+' where seat belt')
        }
    }else{
        return function(name){
            console.log(name +" what shall we do??")
        }
    }
}

var dquestion=inq('');

dquestion('hari');


function game(){
    var score = Math.random()*10;
    console.log(score>=5);
}
game();

(function(){
    var score = Math.random()*10;
    console.log(score>=5);
})();

var calcage=function(birth){
    console.log(2017-birth);
}
calcage(1993);

var retire=function(calcage){
    console.log(65-calcage);
}
retire(1993);


function ret(retage){
    return function(birth){
        var age=2016-birth;
        console.log(age);
        console.log(retage-age)
    }
}

ret(66)(1993);
ret(65)(1993);
ret(69)(1993);
*/











































































































