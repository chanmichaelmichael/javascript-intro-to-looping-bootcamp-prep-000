function forLoop(array){
  for(let j=0; j<25; i++){
    if(j===1){
      array.push("I am 1 strange loop")
    }
    else{
      array.push(`I am ${j} strange loops.`)
    }
  }
}

function whileLoop(number){
  while (number>0){
    console.log(number--)
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