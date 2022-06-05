// sum of N odd numebrs 
let num = 11
let sum = 0
let oddArr = []
for (let i = 0; i < 1000000; i++) {
    if(i%2 != 0){
       oddArr.push(i)
        sum+=i
    } 
    if(oddArr.length === num){

        break
    }
    
}
console.log(oddArr,sum)