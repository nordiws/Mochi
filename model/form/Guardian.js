
//Objeto guardian para popular o form
var guardian = []

guardian.push({
  name: "guardian_name",
  placeholder: "",
  type: "text",
  label: "Nome do Responsável",
  id : "guardian_name"
});

guardian.push({
  name: "guardian_lastname",
  placeholder: "",
  type: "text",
  label: "Sobrenome do Responsável",
  id : "guardian_lastname"
});

guardian.push({
  name: "cpf",
  placeholder: "999.999.999-99",
  type: "text",
  label: "CPF",
  id : "cpf"
});

guardian.push({
  name: "phone_number",
  placeholder: "(55) 99999-9999",
  type: "text",
  label: "Telefone",
  id : "phone"
});

guardian.push({
  name: "state",
  placeholder: "",
  type: "text",
  label: "Estado",
  id : "state"
});

guardian.push({
  name: "cep",
  placeholder: "99999-000",
  type: "text",
  label: "CEP",
  id : "cep"
});

guardian.push({
  name: "city",
  placeholder: "",
  type: "text",
  label: "Bairro",
  id : "city"
});

guardian.push({
  name: "street",
  placeholder: "Rua/Av",
  type: "text",
  label: "Rua",
  id : 'street'
});

guardian.push({
  name: "number",
  placeholder: "",
  type: "text",
  label: "Número",
  id : "number"
});

export default guardian;
