// Inputs
const elems = document.querySelector('.autocomplete');
const school_name = document.getElementById("school_name");
const city_id = document.getElementById("city_id");


const options = {};
const listCities = [];

// Buscando dados
window.onload = async () => {

    /*
    try {
        const response = await axios.get(`/cities`);
        const cities = response.data.citiesData;

        listCities.push(cities);
       
        cities.map(element => options[element.name] = null );

    } catch (error) {
        console.log(error);
    }*/

    axios.get(`/cities`)
        .then(response => {
            const cities = response.data.citiesData;
            listCities.push(cities);
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
    const instances = M.Autocomplete.init(elems, { data: options, minLength: 2, limit: 5 });
});

school_name.addEventListener('click', () => {

    if (elems.value.length == 0) {
        const toastHTML = '<span>Informe a cidade</span>';
        M.toast({ html: toastHTML })

    } else {
        const response = listCities[0].filter(item => {

            const city = item.city.toUpperCase();
            const value = elems.value.toUpperCase();

            if (item.name == elems.value || city == value) {
                return item;
            }
        });

        console.log(response);
        if (response.length !== 0) {
            city_id.value = response[0].id;
        } else {
            const toastHTML = '<span>Está cidade não existe</span>';
            M.toast({ html: toastHTML })
        }
    }

})
