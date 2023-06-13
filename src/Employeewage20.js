const is_PartTime = 1;
const is_FullTime = 2;
const partTime_Hours = 4;
const fullTime_Hours = 8;
const wage_Per_Hour = 20;

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case is_PartTime:
            return partTime_Hours;
            break;
        case is_FullTime:
            return fullTime_Hours;
            break;
        default:
            return 0;
    }
}

let empHrs = 0;
for (let i = 0; i <= 20; i++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}
let empWage = empHrs * wage_Per_Hour;
console.log("Total Hours employee worked: " + empHrs + " Emp Wage earned is " + empWage);