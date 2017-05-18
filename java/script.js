// Lecture: variables
/*

var name='john';
console.log(name);

var lastName='smith';
console.log(lastName);

var age=26;
console.log(age);

var fullage=true;
console.log(fullage);
*/

// Lecture:variables 2
/*
var name='john';
var age=26;

//console.log(name + age);
//console.log(age + age);

var job, ismarried;

job='teacher';
ismarried=false;

//console.log(job);

console.log(name +'is a '+ age +'yaer old '+ job + '.ismaried '+ ismarried + '.');

age = 'nine';job = 'bus driver'

console.log(name +'is a '+ age +'yaer old '+ job + '.ismaried ? '+ ismarried + '.');


//var lastname=prompt('what is your last name?');
//console.log(lastname);

alert(name +'is a '+ age +'yaer old '+ job + '.ismaried '+ ismarried + '.');
*/

// Lecture:opertors
/*
var now=2016
var birthyear=now-26;
birthyear = now - 26 *2; 

console.log(birthyear);
var hariage=26;
var vihariage=30;

hariage = (3+6)*4-5;

console.log(hariage);
*/

/////If & Else statements
/*
var name='john';
var age=25;
var isMarried='no';

if (isMarried==='yes'){
    console.log(name + ' is maried');
}else{
    console.log(name  + ' grt maried soon');
}

isMarried=true;

if(isMarried){
    console.log('yes');
}else{
    console.log('no');
}
*/
/*
////logic and switch

var age=20;

if(age>20){
    con.log('study');
}else{
    console.log('dont study')
}
*/
/*
var name='hari';
console.log(name);

var lastname='vihari';
console.log(name +lastname);

var age=23;
console.log(name+lastname+age)
*/
/*
var name='hari';
var age=23;
console.log(name+' '+age);


var job,married;

job='driver';
married=true;

console.log(name+" "+age+" "+job+" "+married)

var lastname=prompt('what is u r last name?')

console.log(lastname);
*/
/*
var age=27;

if(age>=9 && age <=17){
    console.log('john is teen')
}else if (age >=18 || age<=26){
    console.log('john is ready to marry')
}else{console.log('john i sto old to marry')
};


var job=' ';
job= prompt('waht hari does???')

switch (job){
    case 'driver':
        console.log('hari drives nissan');
        break;
    case 'it':console.log('hari is a UNKNOWN  DEVELOPER');
        break;
    case 'student':
        console.log('hari studied mim for stem');
        break;
    default:
        console.log("what the hell r u doing??");
}
*/

///if and else statements
/*
var a1,a2,h1,h2

a1=15;a2=15;
h1=280;h2=280;

var sc1=h1+a1*5;
var sc2=h2+a2*5;

if (sc1>sc2){
    console.log("A1 is winner with "+sc1+" pints")}
else if (sc2>sc1){
    console.log ('A2 is the winnwe with '+sc2+' poniyts')}
else{
    console.log('get the hell out of hear with ' +sc1+ "and "+sc2+' points')};
*/

////var birth=1993;
///functions
/*
function calage(birth){
    var age=2016-birth;
    console.log(age+" is the age of ");
    return age;
}

function retire(name,year){
    var age=calage(year);
    var retire=65-age;
    if (retire>0){console.log(retire+" will retire soon "+name);        
    }else{
        console.log(name+' has already retired')
    }
    }

retire('hari',1993);
retire('vihari',1994);
retire('lahari',1995);
retire('hitesh',1950);

calcage(1993);
function calcage(year){
    console.log(2017-year);
}



var retire=function(year){
    console.log(65-(2017-year));
}
retire(1990);



var a='hari';

first();

function first(){
    var b='vihari';
    secound();
    function secound(){
        var c ='lahari';
        console.log(a+ b + c);
    }
}
*/

var hari={
    name:'hari',
    birth:1993,
    calc:function(){
        console.log(this);
        console.log(2017-this.birth)
    } 
}

hari.calc();











































































