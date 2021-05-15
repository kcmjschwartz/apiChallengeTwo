
const baseUrl = 'https://calendarific.com/api/v2/holidays';
const key = '374a137e66a0737672e2816b140a3fdf0be28d3b';
const searchForm = document.querySelector('form');

const enteredCountry = document.querySelector('.country');
const enteredYear = document.querySelector('.year');
const enteredType = document.querySelector('.holidayType');
searchForm.addEventListener('submit', fetchHolidayInfo);



async function fetchHolidayInfo(e){
    e.preventDefault();
    let url = baseUrl+'?api_key='+key+'&country='+enteredCountry.value+'&year='+enteredYear.value+'&type='+enteredType.value;
    console.log(url);
    let response = await fetch(url);
    console.log(response);
    let infoReturned = await response.json()
    console.log(infoReturned);
}