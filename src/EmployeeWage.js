const is_PartTime = 1;
const is_FullTime = 2;
const partTime_Hours=4;
const fullTime_Hours=8;
const wage_Per_Hour = 20;

let emp_WorkHours=0;
emp_Wage_Check = Math.floor(Math.random()*10)%3;
switch(emp_Wage_Check){
    case is_PartTime:
        emp_WorkHours = partTime_Hours;
        break;
    case is_FullTime:
        emp_WorkHours = fullTime_Hours;
        break;
    default:
        emp_WorkHours = 0;        
}
let emp_Wage_Check = emp_WorkHours*wage_Per_Hour;
console.log(emp_Wage_Check);