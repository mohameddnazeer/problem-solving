function rentalCarCost(d) {
    
    const carByDay= 40;
    
    
    if (d >= 7) {
        return (d * carByDay) - 50;
    }
    if (d >= 3) {
        return (d * carByDay) - 20;
    }
    return d * carByDay;
  }

  console.log(rentalCarCost(7)); // 230
    console.log(rentalCarCost(3)); // 100
    console.log(rentalCarCost(2)); // 80
    console.log(rentalCarCost(1)); // 40
  