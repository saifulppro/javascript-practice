// leap year system.
function isleapYear(year) {
    const LeapYear = year % 4;;
if (LeapYear == 0){
    console.log('This year is a leap year');
    } 
else 
    {
    console.log('This year is a not leap year');
    }
}
const checked = isleapYear(2001);
console.log(checked);