const validateBtn = document.getElementById("validateBtn");
const next = document.getElementById("nextBtn");

// Inputs
const school_city = document.getElementById("school_city");
const school_name = document.getElementById("school_name");
const city_id = document.getElementById("city_id");
const school_id = document.getElementById("school_id");

// Listas para cidade
const optionsCities = {};
const cities = [];

//Lista para escola
const optionsSchools = {};
const schools = [];


// Inicializando autocomplete
document.addEventListener('input', () => {
    M.Autocomplete.init(school_city, { data: optionsCities, minLength: 2, limit: 5 });  
});

document.addEventListener('input', () => { 
    M.Autocomplete.init(school_name, { data: optionsSchools, minLength: 2, limit: 5 });
});


// autocomplete - Nome da escola
school_name.addEventListener('focusin', async () => {

    if (school_city.value.length == 0) {
        school_city.className += " invalid"
        const toastHTML = '<span>Informe a cidade primeiro</span>';
        M.toast({ html: toastHTML })

    } else {
        await setCityId(school_city.value);
    }
})

validateBtn.addEventListener('click', async () => {
    await setCityId(school_city.value);
    await setSchoolId(school_name.value);
})

// Filtrando, validando e pegando ID
const setCityId = async inputValue => {
    const response = await cities[0].filter(item => {
            
        const cityUpperCase = item.city.toUpperCase();

        if(item.name == inputValue || cityUpperCase == inputValue.toUpperCase()) {
            return item;
        }
    })

    if(response.length !== 0) {
        await getSchools(response[0].id);
        city_id.value = response[0].id;
    }else {
        school_city.className += " invalid"
        const toastHTML = '<span>Está cidade não existe</span>';
        M.toast({ html: toastHTML })
    }
    
    
}

const setSchoolId = async inputValue => {
    const response = await schools[0].filter(item => {
            
        const schoolUpperCase = item.name.toUpperCase().trim();
    
        if(schoolUpperCase === inputValue.toUpperCase()) {
            return item;
        }
    })

    if(response.length !== 0) {
        school_id.value = response[0].id;
        validateBtn.style.display = "none";
        next.style.display = "inline"
        const toastHTML = '<span>Tudo OK!</span>';
        M.toast({ html: toastHTML })
    }else {
        school_name.className += " invalid"
        const toastHTML = '<span>Escola invalida</span>';
        M.toast({ html: toastHTML })
    }

}

// Buscando cidades
window.onload = async () => { 
    try {
        const response = await axios.get(`/cities`);
        const list = response.data.citiesData;

        cities.push(list);
       
        list.map(element => optionsCities[element.name] = null);

    } catch (error) {
        console.log(error);
    }
}

// Buscando escolas
const getSchools = async id => {
    try {
        const response = await axios.get(`/schools/${id}`);
        const list = response.data.schoolsData;

        schools.push(list);
    
        list.map(element => optionsSchools[element.name] = null);

    } catch (error) {
        console.log(error)
    }
}