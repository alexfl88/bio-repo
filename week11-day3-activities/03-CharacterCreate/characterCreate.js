var Character = function(name = 'Npc1', profession = 'Noob', gender = 'Apache Helicopter', age = 21, strength = 9001, hitpoints = 1){
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.hitpoints = hitpoints;
    this.strength = strength;
  };

  Character.prototype.printStats = function(){
      console.log(`
        ${this.name}
        ${this.profession}
        ${this.gender}
        ${this.age}
        ${this.hitpoints}
        ${this.strength}
      `);
  }

  Character.prototype.isAlive = function(){
    if(this.hitpoints < 0) {
      console.log("Nope this is dead");
      return false;
    }  
    console.log("I'm alive!!");
    return true;
  }

  Character.prototype.attack = function(defender) {
    defender.hitpoints -= this.strength;
  }


  Character.prototype.levelUp = function(){
    this.age += 1;
    this.strength += 5;
    this.hitpoints += 25;
  }

  const apache = new Character();
  
  const rogue = new Character('Beastion', 'Assassin', 'male', 21, 9001, 500);
  
  apache.printStats();
  
  apache.isAlive();
  
  rogue.attack(apache);
  
  apache.isAlive();
  
  rogue.printStats();
  
  rogue.levelUp();
  
  rogue.printStats();