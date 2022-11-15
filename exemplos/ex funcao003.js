/*
function fatorial(n){
    let fat = 1
    let i
    for(i = 1; i <= n; i++){
        fat = fat * i

    }
    return fat

}
console.log(fatorial(5))
*/

//RECURSIVIDADE

    function fatorial(n){
        if(n == 1){
            return 1
        }
        else{
            return n * fatorial(n - 1)
        }
    }
    console.log(fatorial(5))





