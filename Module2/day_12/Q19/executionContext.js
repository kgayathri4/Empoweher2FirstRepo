
let age = 25;


function displayAge() {
  console.log("Age inside displayAge():", age);
}


function changeAge() {
  age = 30;   
  console.log("Age inside changeAge():", age);
}



console.log("Initial global age:", age);

displayAge();   
changeAge();    

console.log("Global age after changeAge():", age);