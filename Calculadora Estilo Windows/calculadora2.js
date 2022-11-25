
const display =  document.getElementById('display')


    let num = '0';
    let correndo_total = 0;
    let operador_previo;


    function click(value){
        
        if(isNaN(value)){
            simbolos(value);
        }
        else{
            numeros(value);
        }
        display.innerText = num;
    }

    function simbolos(symbol){
        switch(symbol){
            case 'C':
                num = '0';
                correndo_total = 0;
                break;
            case '=':
                if(operador_previo === null){
                    return
                }
                flushOperation(parseInt(num));
                operador_previo = null;
                num = correndo_total;
                correndo_total = 0;
                break;
            case '←':
                  if(num.length === 1){
                    num = '0';
                  }
                  else{
                    num = num.toString(0, num.length - 1);
                  }
                  break;
            case '+':
            case '-':
            case '÷':   
            case '×':
                math(symbol);
                break;
                 
        }
    }

    function math(symbol){
        if(num === '0'){
            return;
        }
        
        const isnum = parseInt(num);

        if(correndo_total === 0){
            correndo_total = isnum;
        }
        else{
            flushOperation(isnum);
        }
        operador_previo = symbol;
        num = '0';

    }


    function flushOperation(isnum){

        if(operador_previo === '+'){
            correndo_total += isnum;
        }
        else if(operador_previo === '-'){
            correndo_total -= isnum;
        }
        else if(operador_previo === '×'){
            correndo_total *= isnum;
        }
        else if(operador_previo === '÷'){
            correndo_total /= isnum;
        }
        
    }

    function numeros(numberString){

        if(num === '0'){
            num = numberString;
        }
        else{
            num += numberString;
        }
    }

    function init(){
        document.querySelector('.teclas').addEventListener('click', function(event){
            click(event.target.innerText);
        })
    }

    init();
    