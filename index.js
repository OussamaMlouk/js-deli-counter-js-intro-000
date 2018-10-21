function takeANumber(array,name){
  var position = array.length +1
  array.push(name)
  return `Welcome, ${name}. You are number ${position} in line.`
}



function nowServing(array){
  if(array.length >0){
    return `Currently serving ${array[0]}.`;
      array.shift()
    return array.shift
  }
  else{
  return "There is nobody waiting to be served!"
  }
}


function currentLine(array){
  if(array.length === 0){
    return "The line is currently empty."
  }
  else if (array.length === 1){
    return `Currently serving ${array[0]}`
  }
  else{let i = 0
    while(i<array.length){
      var position = `${i+1}. ${array[i]}`
      i++
      var list = `${position}`
    }
    return `The line is currently: ${list}`
  }}

    //for(let i=0; i<array.length; i++){
      //var list = `${i+1}. ${array[i]}`
    //}
    //return `The line is currently: ${list}`
  //}}
