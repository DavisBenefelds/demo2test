class Character {
  constructor(name, hp, attack, heal) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.heal = heal
  }
}

var char1 = new Character("Char 1", 100, 15, 10)
var char2 = new Character("Char 2", 120, 25, 15)
var char3 = new Character("Char 3", 125, 10, 10)
var char4 = new Character("Char 4", 110, 20, 15)

let jsonToData = '{"playerParty":{"characters":[{"name":"myHero1", "hp":50, "maxHP":70, "battleOptions": ["Attack","Block","Heal",""]},{"name":"myHero2", "hp":50, "maxHP":70, "battleOptions": ["Hit","Duck","Drink",""]}]}, "enemyParty":{"characters":[{"name":"myEnemy1", "hp":50, "maxHP":70, "battleOptions": ["Attack","Block","Heal",""]},{"name":"myEnemy2", "hp":0, "maxHP":70, "battleOptions": ["Hit","Duck","Drink",""]}]}}'
let parties = JSON.parse(jsonToData)
console.log(parties)

// GENERATE HERO RADIO BUTTONS
  const heroes = ["char1", "char2"];

  // generate the radio groups        
  const group = document.querySelector("#heroes");
  group.innerHTML = heroes.map((hero) => `<div>
          <input type="radio" name="hero" value="${hero}" id="${hero}">
            <label for="${hero}">${hero}</label>
      </div>`).join(' ');
  
  // add an event listener for the change event
  const radioButtonsHero = document.querySelectorAll('input[name="hero"]');
  for(const radioButton of radioButtonsHero){
      radioButton.addEventListener('change', showSelectedHero);
  }        
  
  function showSelectedHero(e) {
      console.log(e);
      if (this.checked) {
          document.querySelector('#outputHero').innerText = `You have selected ${this.value}, now choose your opponent`;
      }
  }


// GENERATE ENEMY RADIO BUTTONS
  const enemies = ["char3", "char4"];

  // generate the radio groups        
  const group2 = document.querySelector("#enemies");
  group2.innerHTML = enemies.map((enemy) => `<div>
          <input type="radio" name="enemy" value="${enemy}" id="${enemy}">
          <label for="${enemy}">${enemy}</label>
      </div>`).join(' ');
  
  // add an event listener for the change event
  const radioButtonsEnemy = document.querySelectorAll('input[name="enemy"]');
  for(const radioButton of radioButtonsEnemy){
      radioButton.addEventListener('change', showSelectedEnemy);
  }        
  
  function showSelectedEnemy(e) {
      console.log(e);
      if (this.checked) {
          document.querySelector('#outputEnemy').innerText = `Your enemy is ${this.value}`;
      }
  }
 
  // Define actions for action buttons

    function attack(){
      //console.log(e);
      if (showSelectedHero != null){
        if (showSelectedEnemy != null){
          // and if attack pressed -->
          // do attack
        }
        else {
          // choose your fighters
        }
      }
    }

    function heal(){
      //console.log(e);
      if (showSelectedHero != null){
          // and if heal pressed -->
          // heal
        }
        else {
          // choose your hero
        }
      }

