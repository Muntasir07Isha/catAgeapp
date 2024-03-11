document.getElementById('calculateButton').addEventListener('click',function(){

    const catAge = parseFloat(document.getElementById('catAge').value)  ;
    
    if(!isNaN(catAge) && catAge >=0) {
        const roundedCatAge = Math.round(catAge);
        let humanAge;
    
        if (roundedCatAge == 1) {
            humanAge = 15;
        }
        else if (roundedCatAge == 2)
        {
            humanAge = 24;
        }
        else {
            humanAge = 24 +(roundedCatAge-2) * 4;
    
    }
    document.getElementById('result').textContent = `Your cat's age is ${humanAge} in human years.`
    }
    else {
        document.getElementById('result').textContent = 'Please Enter a valid number';
    }
    
    
    });
    