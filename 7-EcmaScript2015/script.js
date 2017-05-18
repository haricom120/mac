



/*
var name5='hari';
var age5=23;
name5='vihari';
console.log(name5);


const name6='lahari';
let age6=34;
//name6='hari';
console.log(name6);

function testpass(passed){
   if (passed) {var name='baip';
    var birth=1993;
               console.log(name +birth+'u have got lisence')}
}

testpass(true);

function testpass6(passed){
   if (passed) {
        let name='baip';
        const birth=1993;
               console.log(name +birth+'u have got lisence')}
}

testpass6(true);

let i=23;

for(i=0;i<5;i++){
console.log(i)    
}



let name='hari ';
let birth=1993;
let job='driver';

function agecal(year){
     return 2016-year;
    //return age;
    ////console.log(name+job+age);
}

console.log(`he is ${name} and he is ${agecal(birth)} and his living is ${job}` );


const n=`${name} ${job}`;
console.log(n.startsWith('h'));
console.log(n.endsWith('r'));
console.log(n.includes('ri'));
console.log(`${name}` .repeat(3));
*/

const years=[1990,1992,1993,1994];

var age5=years.map(function(el){
    return 2016-el;               
                   });
console.log(age5);                   

const ages6=years.map(el => 2016-el);
console.log(ages6);




















