var unit=600;
var bill =0; 
var a;
if(unit<50){
    bill = unit*0.50;
    unit=0;
}
if(unit>=50){
   a=Number(50*0.50);
   unit-=50;
   bill += a;
   a=0
}
if (unit<100){
    a = Number(unit * 0.75);
    unit=0;
    bill += a;
    a=0;
}
if (unit>=100){
    a=Number(unit*0.75);
    unit-=100;
    bill += a;
    a=0;
}
if (unit>0){
    a = Number(unit* 1.20);
    bill += a;
    a=0;
}

console.log("total bill amount",Number(bill*1.2));