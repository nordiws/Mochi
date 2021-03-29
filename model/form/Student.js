
//Objeto student para popular o form
var student = []

student.push({
  name: "std_name",
  placeholder: "",
  type: "text",
  label: "Nome do Estudante",
  property : ""
});

student.push({
  name: "std_nickname",
  placeholder: "",
  type: "text",
  label: "Sobrenome do Estudante",
  property : ""
});

student.push({
  name: "std_age",
  placeholder: "",
  type: "number",
  label: "Idade",
  property : "min=0 step=1"
});

student.push({
  name: "std_grade",
  label: "Serie",
  options: [ "first grade", "second grade", "third grade" ]
});

export default student;
