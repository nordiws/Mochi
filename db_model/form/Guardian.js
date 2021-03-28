
//Objeto guardian para popular o form
var guardian = []

guardian.push({
  name: "guardian_name",
  placeholder: "",
  type: "text",
  label: "Nome do Responsável",
});

guardian.push({
  name: "guardian_lastname",
  placeholder: "",
  type: "text",
  label: "Sobrenome do Responsável",
});

guardian.push({
  name: "cpf",
  placeholder: "999.999.999-99",
  type: "text",
  label: "CPF",
});

guardian.push({
  name: "phone_number",
  placeholder: "(55) 99999-9999",
  type: "text",
  label: "Telefone",
});

guardian.push({
  name: "cep",
  placeholder: "99999-000",
  type: "text",
  label: "CEP",
});

guardian.push({
  name: "street",
  placeholder: "Rua/Av",
  type: "text",
  label: "Rua",
});

guardian.push({
  name: "number",
  placeholder: "",
  type: "number",
  label: "Número",
});

guardian.push({
  name: "state",
  placeholder: "",
  type: "text",
  label: "Estado",
});

guardian.push({
  name: "city",
  placeholder: "",
  type: "text",
  label: "Cidade",
});

export default guardian;
