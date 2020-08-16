function Employee(name,salary){

   if(!(this instanceof Employee)){
       return new Employee(name,salary);
   }
    this.name = name;
    this.salary = salary;
}

Employee.prototype.calculateSalary = function(){
    let month = new Date().getMonth()+1;
    let tax =0;
    total=this.salary*month;


    if(total<=20000){
        tax = total*0.2;
    }
    else if(total>20000 && total<=30000){
        tax = total * 0.25;
    }else{
        tax = total * 0.3;
    }
    return {
        tax : tax,
        paid : total - tax
    }

}

let emp1 = new Employee('yiğit',3000);
let emp1_salary = emp1.calculateSalary();

console.log(`${emp1.name} isimli personel toplam ${emp1_salary.tax} TL vergi kesintisi ile ${emp1_salary.paid} TL maaş almıştır. `);

let emp2 = new Employee('Can',4000);
console.log(emp2.calculateSalary())