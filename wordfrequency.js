function wordFrequency(phrase){
    let frequency = {}
    words = phrase.split(' ')
    console.log(words)
    for(const word of words){
        if(word in frequency){
            frequency[word]++
        }
        else{
            frequency[word] = 1
        }
    }
    return frequency
}
console.log(wordFrequency('lol lol love'))