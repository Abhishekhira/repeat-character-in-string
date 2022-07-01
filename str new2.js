function strCh(letter,str) {
    let count=0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i)===letter) {
        count +=1
    }
    
  }
  console.log(count)

}
strCh('m', 'how many times does the character occur in this sentence?')