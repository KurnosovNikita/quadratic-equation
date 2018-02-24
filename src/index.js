module.exports = function solveEquation(equation) {
    var arr = equation.split(' ');
    var a, b, c, d, x1, x2;
   
    if(arr[7]==='-'){
        c = +arr[8];
        c*=(-1);
    }else if(arr[7]==='+'){
        c = +arr[8];
    }

    if(arr[3]==='-'){
        b = +arr[4];
        b*=(-1);
    }else if(arr[3]==='+'){
        b=+arr[4];
    }
    var a=+arr[0];
    var d=b*b-(4*a*c);
    var x1 = (b*(-1) + Math.sqrt(d)) / (2*a);
    var x2 = (b*(-1) - Math.sqrt(d)) / (2*a);
    x1 = ~~x1.toFixed(1);
    x2 = ~~x2.toFixed(1);
    if(x2>x1){
        return ([x1,x2]);
    } else if(x2<x1){
        return ([x2,x1]);
    }
    
  // your implementation
}
