function Pet (name, age, type) {
  this.name = name;
  this.age = age;
  this.type = type;
}


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var petsName = $("#petName").val();
    var petsAge = parseInt($("#petAge").val());
    var petsType = $("#petType").val();
    alert(petsName + petsAge + petsType);

    var newPet = new Pet (petsName, petsAge, petsType);

  });
});
