const catFactOne = document.getElementById("catFactOne");

function NewCharacter(role, health, armor, dps) {
  this.role = role;
  this.health = health;
  this.armor = armor;
  this.dps = dps;
  this.logCharacter = function () {
    console.log(role, health, armor, dps);
  };
}

const mainCharacter = new NewCharacter("tank", 100, 200, 230);
mainCharacter.logCharacter();

const secondCharacter = new NewCharacter("healer", 30, 50, 200);
secondCharacter.logCharacter();

fetch("https://catfact.ninja/facts")
  .then((res) => res.json())
  .then((data) => {
    const catFactsData = data.data;
    console.log(catFactsData);
    catFactOne.innerHTML = catFactsData[2].fact;
  });
