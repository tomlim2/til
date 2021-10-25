let strs1 = ["start", "star", "stair"];
const getPrefix = strs => {
  const shared = [];
  
  for(let i = 0; i < strs.length-1; i++){
    let index = 0;
    
    for(let j = i; j < strs.length; j++){
      // console.log(`strs[${i}] and strs[${j}], strings are ${strs[i]} and ${strs[j]}`);
      
      if (strs[j][0] === strs[i][0]){
        
        if(strs[i][index] === strs[j][index] && shared[index] !== strs[i][index]){
        shared.push(strs[i][index]);
        index += 1;
        }
      } else {
        return ""
      }
      
      
    }
  } return shared.join('');
}



console.log(getPrefix(strs1))