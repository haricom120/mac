///function

/* var john ={
    name : 'john';
    birth:1990;
    job :'driver';
}; 

var Person =function(name,birth,job){
    this.name=name;
    this.birth=birth;
    this.job=job; 
}

Person.prototype.calcage=function(){
        console.log(2016-this.birth);
    }
Person.prototype.lastname='baba';
var john= new Person('john',1998,'teacher');
var hari= new Person('hari',1993,'teacher');
var vihari= new Person('vihari',1993,'saftey');
john.calcage();
hari.calcage();
vihari.calcage();

console.log(john);
console.log(hari);
console.log(hari.lastname);
*/
////primitives
/*
var a=2;
var b=3;
a=4;
console.log(a);
console.log(b);

////objects
var obj1={
    name:'hari',
    age:23,
};
var obj2=obj1;
obj1.age=22;

console.log(obj1.age);
console.log(obj2.age);

////function
var age=23;
var obj={
    name:'hari',
    city:'st.joseph',
};

function change(a,b){
    a=30;
    b.city='missouri';
};

change(age ,obj);

console.log(age);
console.log(obj.city);



var year=[1990,1985,1995,1999,2000];

function arryclac(arr ,fn){
    var arrres=[];
    for (var i = 0;i < arr.length;
        i++){
        arrres.push(fn(arr[i]));
    }return arrres;
}


function calages(el){
    return 2016-el;
}

function fullages(el){
    return el>=18;
}

var ages=arryclac(year,calages);
var fages=arryclac(ages,fullages);
console.log(ages);
console.log(fages);
*/

//////functions 
/*
function addnumber(a,b){
    var add=a+b;
    return add;
}

function devide(a,b){
    var add1=addnumber(a,b);
    var dev=(add1/2);
    return dev;
}

function multi(a,b){
    var dev1=devide(a,b);
    var mul=dev1*9;
    return mul
}

function sub(a,b){
    var mul=multi(a,b);
    var sub=mul-1;
    return sub
}
var hari=sub(2,4);
console.log(hari);


function getup(a){
    var getup=a;
    return getup;
}
function brfa(a){
    var get=getup(a);
    var braf=get+1;
    return braf;
}

var h=brfa(8);
console.log(h);

function all(a,b,c){
    var add=a+b+c;
    var sub=add-2;
    var mutli=sub*10;
    var dev=(mutli/2+c);
    return dev;
}

var h=all(2,3,4);
console.log(h);

function age(birth){
    var year=2016-birth;
    var masters=year-1.5;
    var bach=masters-4;
    var inter=bach-2;
    var tenth=inter-1;
    var born=tenth-10;
    return born
}

var boka=age(1991);
console.log(boka);
*/
//////////////
/*
function inter(job){
    if (job ==='design'){
        return function(name){
            console.log(name + ', can u plese expalin');
        }
    }else if (job === 'teacher'){
        return function(name){
            console.log(name + ',what do u teach');
        }
    }else {
        return function(name){
            console.log('heloo'+ 'wajts do u do?');
        }
    }
}

var techquestion=inter('teacher');
var destech=inter('design');

techquestion('john');
destech('hari');

*/
////////ifee
/*
function game(){
    var score=Math.random() *10;
    console.log(score>=5);
}
game();

(function(good){
    var score=Math.random() *10;
    console.log(score>=5-good);
})(5);
*/
/*
function retire(retireage){
    var a='left to retite';
    return function(yearofbirth){
    var age=2016-yearofbirth;
    console.log((retireage-age)+a);
    }
}

retire(66)(1900);

function question(job){
    return function(name){
        if (job ==='driver'){
        console.log(name +' what car u drive');
    }else if (job ==='car'){
        console.log(name +'what car brand ');
    }else{
        console.log(name+'do smething else')
    }
}
}

question()('hari');
*/

/*
var hari={
    name:'hari',
    age:23,
    job:'student',
    present: function(style,time){
        if(style==='formal'){
    console.log('good morning its '+ time+this.name+this.age+this.job);
    }else if(style==='informal'){
        console.log('good afternoone'+time+this.name+this.age+this.job);
        }
    }
}

var vihari={
    name:'vihari',
    age:24,
    job:'safety',
};

hari.present('informal','morning');
    
hari.present.call(vihari,'formal','afternoon');    
*/
function question(question,answers,correct){
    this.question=question;
    this.answers=answers;
    this.correct=correct;
}
question.prototype.displayquestion =function() {    console.log(this.question);
    for(var i=0;i<this.answers.length; i++){
        console.log(i+': '+this.answers[i]);
    }
}

var q1 = new question('what is my life',['yes','no'],0);

var q2 = new question('what is my name',['hari','vihari','lahari'],1);

var q3 = new question('what the hell i am doing',['study','job','nonsence'],2);

var questions=[q1,q2,q3];
var n=Math.floor(Math.random()*questions.length);

questions[n].displayquestion();

var answer=prompt('please select u r wish');


































