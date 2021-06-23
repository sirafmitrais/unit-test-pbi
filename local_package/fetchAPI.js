async function fetchCovidJSON() {
    const response = await fetch('https://covid-api.mmediagroup.fr/v1/cases?country=Indonesia');
    const covidData = response.json();
    return covidData;
}

function presentData() {
    fetchCovidJSON().then( result => {
        console.log(result)
    })
}