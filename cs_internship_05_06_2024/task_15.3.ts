const array=["1","a","2","b","3","c","4","d","5","e"];
array.forEach((value)=>{
  if(!isNaN(Number(value))){
    console.log(Number(value));
  }else{
    console.log(value.toUpperCase());
  }
})
