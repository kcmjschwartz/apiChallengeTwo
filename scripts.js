
const baseUrl = 'https://calendarific.com/api/v2/holidays';
const key = '374a137e66a0737672e2816b140a3fdf0be28d3b';
const searchForm = document.querySelector('form');
const resultsInfo = document.querySelector('.resultsTable')
const holidayResults= document.querySelector('.resultsDisplay')

const enteredCountry = document.querySelector('.country');
const enteredYear = document.querySelector('.year');
const enteredType = document.querySelector('.holidayType');
searchForm.addEventListener('submit', fetchHolidayInfo);

resultsInfo.style.visibility = "hidden";

async function fetchHolidayInfo(e){
    e.preventDefault();
    let url = baseUrl+'?api_key='+key+'&country='+enteredCountry.value+'&year='+enteredYear.value+'&type='+enteredType.value;
    console.log(url);
    let response = await fetch(url);
    console.log(response);
    let infoReturned = await response.json()
    console.log(infoReturned);
    displayHolidays(infoReturned);

}


function displayHolidays(infoReturned){
    while (holidayResults.firstChild) {
        holidayResults.removeChild(holidayResults.firstChild);
    };
        resultsInfo.style.visibility = "";
    
    let holidayInfo = infoReturned.response.holidays;
       console.log(holidayInfo);

    for(let i = 0; i < holidayInfo.length; i++) {

        let holidayName =holidayInfo[i].name;
        let holidayDay = holidayInfo[i].date.datetime.day;
        let holidayMonth = holidayInfo[i].date.datetime.month;
        let holidayYear = holidayInfo[i].date.datetime.year;
        let holidayDescription = holidayInfo[i].description;

        let row = holidayResults.insertRow([i]);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);

        cell1.innerHTML = holidayName;
        cell2.innerHTML = `${holidayMonth}/${holidayDay}/${holidayYear}`;
        cell3.innerHTML = holidayDescription;
    }};
