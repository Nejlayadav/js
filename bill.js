//bill
var unit=45;
var bill =0; 
var a,b,c,x;
if(unit<50){
    bill = unit*0.50;
    unit=0
}
if(unit>=50){
   a=Number(50*0.50);
   unit-=50;
   bill += a;
}
if (unit<100){
    x = Number(unit * 0.75);
    unit=0;
    bill += x;
}
if (unit>=100){
    b=Number(unit*0.75);
    unit-=100;
    bill += b;
}
if (unit>0){
    c = Number(unit* 1.20);
    bill += c;
}

console.log("total bill amount",Number(bill*1.2));