
//Objeto student para popular o form
var student = []

student.push({
  name: "std_name",
  placeholder: "",
  type: "text",
  label: "Nome do Estudante",
  id : "std_name"
});

student.push({
  name: "std_nickname",
  placeholder: "",
  type: "text",
  label: "Sobrenome do Estudante",
  id : "std_nickname"
});

student.push({
  name: "std_age",
  placeholder: "",
  type: "text",
  label: "Idade",
  id : "std_age"
});

student.push({
  name: "std_grade",
  label: "Serie",
  options: [ "Ensino fundamental I (1° até 5°ano)", "Ensino fundamental II (6° até 9° ano)", "Ensino médio (1°,2° e 3°ano)", "EJA (Educação para adultos)" ],
  id : "std_grade"
});

export default student;
