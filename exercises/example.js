//Regular Variable
let myName;
myName="Graham";
console.log(myName); //Graham
myName="Reginald";
console.log(myName); //Reginald

//Constant Variable
const speedlimit=55;

//Multiple Variables on one line
let var1,var2,var3="Hello World",var4,var5,var6;
console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);
console.log(var5);
console.log(var6);


let bankAccount=0;
console.log("bank Account value:"+bankAccount);
//bankAccount=10;
//bankAccount=10;
bankAccount=bankAccount+10;
console.log("bank Account value:"+bankAccount);
bankAccount=bankAccount+10;
console.log("bank Account value:"+bankAccount);
//bankAccount=bankAccount+50;
bankAccount+=50; //bankAccount=bankAccount+50;
console.log("bank Account Value:"+bankAccount);

let number=0;

number+=10;//number:10
number-=2;//number:8
number*=10;//number:80
number/=5;//number:16

console.log(5===5);//true
console.log(5===2);//false
console.log("Kevin"==="Kyle");//false
console.log("Graham"==="Graham")//true

let username="YWCA"
let password=4990
console.log(username==="YWCA" && password===4990);//true
console.log(username==="YWCA" && password==="5000");//false

console.log(username==="YWCA" || password===4990);//true
console.log(username==="YWCA" || password==="5000");//true

let checkbox=false;
console.log("Checkbox Clicked");
checkbox=!checkbox;
console.log("Checkbox:" + checkbox);

let age=17;
let IsCitizen=false;
let IsFelon=false;
console.log("Can I vote?");
console.log(age>=18 && IsCitizen);
console.log("Can I vote this time");
console.log(!IsFelon || (age>=18 && IsCitizen));
//              T           F           F
//              T    ||         F
//                      T
