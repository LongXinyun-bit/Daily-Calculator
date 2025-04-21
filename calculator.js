
        function calculate(op){   //add op to receive 操作符
            const Num1=parseFloat(document.getElementById ('Num1').value)
            const Num2=parseFloat(document.getElementById('Num2').value)
            let sum;

            if (op === '+') sum = Num1+Num2;
            else if (op === '-') sum=Num1-Num2;
            else if (op === 'x') sum=Num1*Num2;
            else if (op === '÷') sum= Num2 !==0 ?  parseFloat((Num1/Num2).toFixed(2))
            : 'Error denominator cannot be zero';
            document.getElementById('result').textContent=sum; 
}