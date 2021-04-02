//Objeto school para popular o form
var school = []

school.push({
  name: "school_state",
  placeholder: "",
  type: "text",
  label: "Estado da Escola",
  id: "school_state"
});

school.push({
  name: "school_city",
  placeholder: "",
  type: "text",
  label: "Cidade",
  id: "school_city",
  class: "autocomplete"
});

school.push({
  name: "school_name",
  placeholder: "",
  type: "text",
  label: "Nome da Escola",
  id: "school_name"
});

export default school;
