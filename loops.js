function forLoop(array){
  for(let i=0; i<25; i++){
    if(i===1){
      array.push("I am 1 strange loop")
    }
    else if(i>1){
      array.push(`I am ${i} strange loops.`)
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
  while()
}