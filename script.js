var names = ["Carleton", "Avi", "Azat", "Ann"];

$(document).ready(function(){

$.each(names, function(index, name){
  console.log("hey " + name);
});

$.map(names, function(name, index){
   return name + " loves JavaScript";
});

});
