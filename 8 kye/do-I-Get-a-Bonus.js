function bonusTime(salary, bonus) {
    if(bonus){
        return '£' + (salary * 10);
    }else{
        return '£' + salary;
    }
    }

    console.log(bonusTime(10000, true)); // '£100000'
    console.log(bonusTime(25000, false)); // '£25000'
    