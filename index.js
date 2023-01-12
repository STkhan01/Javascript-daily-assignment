
/*
Create An Function Which Can Take Any Number 
Of Parameters And Do Addition Of All And Then Return 
The Result To Result Variable And After That Show The 
Result Using  Console
*/


function DoAddition(...number) {
    let sum = 0 ;
    for( let i = 0; i < number.length; i ++){
        sum += number[i];
    }
    return sum;
}
let a = DoAddition(1,2,3,4,5,6)
console.log(a);