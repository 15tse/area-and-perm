let PI=3.14
//rectangular perimeter and area
rectangularparameter=function(length,width){
    perimeter=2*length+2*width
    return perimeter;
}
console.log(`rectangular perimeter is: ${rectangularparameter(10,15)+ ' meter'}`);
//rectangular area 
rectangulararea=function(length,width){
    if (isNaN(length,width) || (length,width)<=0){
        return;} 
        area=length*width
        return area;
}
console.log(`rectangular area=${rectangulararea(10,25)}`)

//area of circle
areaofcircle=function(r){
    if (isNaN(r) || (r)<=0){
        return;} 
    area=PI*r*r
    return area;
}
console.log(`area of circle = ${areaofcircle(100)}`)
//perimeter of circle
perimeterofcircle=function(r){
    if (isNaN(r) || (r)<=0){
        return;}
        perimeter=2*PI*r*r
        return perimeter;
}
console.log(`perimeter of circle= ${perimeter}`)