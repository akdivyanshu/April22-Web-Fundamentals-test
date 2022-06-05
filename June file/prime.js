let input = 5 
let no = 0
for (let i = 2; i < 1000000; i++) {
    let count = 0
    for (let j = 2; j < i; j++) {
        
        if(i%j === 0){
            count++
            break
        }
    }
    if(count === 0){
        no++
    } 
    if(no === input){
        console.log(i)
        break;
    }
    
}