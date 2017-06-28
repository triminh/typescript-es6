let calculateSalary = function() {
    return 100000;
}

let calculateSalaryArrow = (bonus:number, tax:number) => 1000000 + bonus - tax;

 console.log(calculateSalary());
 console.log(calculateSalaryArrow(80, 5));