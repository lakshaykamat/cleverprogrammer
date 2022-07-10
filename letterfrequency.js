const letterFrequency = (phrase) =>{
    //stored Object
    let frequency = {}
    //loop for checking the existing letter or not
    for(const letter of phrase){
        //phrase
        console.log("LETTER " + letter)
        //phrase in frequency(obj)
        if(letter in frequency){
            //gives 1
            console.log("frequency " + frequency[letter])
            frequency[letter]++
        }
        else{
            //gives undefined
            console.log("frequency2 " + frequency[letter])
            frequency[letter] = 1
        }
    }
    return frequency
}
console.log(letterFrequency('haha'))