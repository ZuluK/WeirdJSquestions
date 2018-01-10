//1.
console.log([] + []);
//it will try to convert array into a string..type cast to string
//when you try to convert empty array into a string you get an empty string

//2.
function a(){
  return 'hello';
}

const sentence = a('hi');
console.log(sentence);
//would return "hello"
//'hi' is ignored

//3. Take any webpage and make all it's contents editable
//inspect the page using the dev tools. go into the console and type
document.body.contentEditable = true;

//4. Answer the following

function y(){
  console.log(this.length);
}

var x = {
  length: 5,
  method: function (y){
    arguments[0]();
  }
};

x.method(y,1);
//answer is 2


//4.
const x = 'constructor'
console.log(x[x](01));
//answer is one.
//x[x] == nothing but a string function
//x[x] will try to convert (01) into a string.


//5.
console.log(0.1 + 0.2);
//in JS the decimals are in base 10. you'll get
//answer is 0.30000000000000004


//6.
console.log(('hi').__proto__.__proto__.__proto__);
//answer is null
//('hi') is a string and it's '__proto_' is string?
//now what creates a string? Constuctor Object creates all things.
//now what creates a Object?  Object is the top of the chain and so the answer is null.

//7.
//function returns total number of agruments
//dont use loops

let x  = function(){
  return [].slice.call(arguments).length;
}

console.log(x(1,2,3,4,5));

//8.
var A = {

  x:function(){
    console.log('x');
    return A
      },
  y:function(){
    console.log('y');
    return A
    },
  z:function(){
    console.log('z');
    return A
    }
}

A.x().y().z();
//should print x, y, z
