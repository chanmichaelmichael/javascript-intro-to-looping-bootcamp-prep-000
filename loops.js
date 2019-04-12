function forLoop(a){
  for(let j=0; j<25; j++){
    if(j===1){
      a.push("I am 1 strange loop")
    }
    else{
      a.push(`I am ${j} strange loops.`)
    }
  }
}

function whileLoop(number){
  while (number>0){
    console.log(number)
    number-=1
  }
  console.log("done")
}

var i = 0;
function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(integer){
  do {
    console.log("I run once regardless.")
  }
  while(incrementVariable() < integer)
}