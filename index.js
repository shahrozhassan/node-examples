var rect=require('./rectangle');

function solveRectangle(l,b){
   rect(l,b,(err,rectangle)=>{
    if(err){
        console.log("Error:" + err.message);
    }
    else{
        console.log("Area of Rectangle is " + rectangle.area());
        console.log("Perimeter of Rectangle is " + rectangle.perimeter());
       
    }
    });
     console.log("This statement is after call to rect()");
}

   
    // console.log("Length of triangle is " + l + " breath of the triangle is " + b);
    // if(l<=0 || b<=0){
    //     console.log("Length and breath of the triangle must be greater than 0");
    // }
    // else{
    //     console.log("perimeter of the triangle is " +rect.perimeter(l,b));
    //     console.log("Area of the triangle is " + rect.area(l,b));
    // }

solveRectangle(2,4);
