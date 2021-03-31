const options = {};

window.onload = () => {

    axios.get('http://localhost:3000/cities')
    .then(response => {
        const cities = response.data.citiesData;

        // handle success
        cities.map(element => {
            const city_state = element.name;
            options[city_state] = null;
        });
    })
    .catch(error => {
        // handle error
        console.log(error);
    })
}

document.addEventListener('input', () => {
    const elems = document.querySelector('.autocomplete');
    const instances = M.Autocomplete.init(elems, { data: options, minLength: 2 });
});