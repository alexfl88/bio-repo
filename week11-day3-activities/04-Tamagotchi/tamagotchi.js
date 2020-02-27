const DigitalPal = function(){
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
  }
  DigitalPal.prototype.feed = function(){
    if(this.hungry){
      console.log("That was yummy!");
      this.sleepy = true;
      this.hungry = false;
      return;
    } 
    console.log("No thanks I am full");
  }
  DigitalPal.prototype.sleep = function(){
    if(this.sleepy){
      console.log("zzzzzzzzz");
      this.sleepy = false;
      this.bored = true;
      this.increaseAge();
      return;
    }
    console.log("No way! I am not tired!");
  }
  DigitalPal.prototype.play = function(){
    if(this.bored) {
      console.log("Yay! Let's play!");
      this.bored = false;
      this.hungry = true;
      return;
    }
    console.log("Not right now. Maybe later");
  }
  DigitalPal.prototype.increaseAge = function(){
    this.age++;
    console.log(`Happy birthday to me! I am ${this.age} years old`);
  }
  const dog = new DigitalPal();
  dog.outside = false;
  dog.bark = function(){
    console.log("Woof! Woof!");
  }
  dog.goOutside = function(){
    if(!this.outside) {
      console.log("Yay I love the outdoors!");
      this.outside = true;
      dog.bark();
      return;
    }
    console.log("We're already outside!");
  }
  dog.goInside = function(){
    if(this.outside) {
      console.log("Do we have to?");
      this.outside = false;
      return;
    }
    console.log("Already inside!");
  }
  const cat = new DigitalPal();
  cat.houseCondition = 100;
  cat.meow = function() {
    console.log("Meow meow!");
  }
  cat.destroyFurniture = function(){
    if(this.houseCondition <= 0) {
      return;
    } else {
      this.houseCondition -= 10;
      console.log("*evil laugh* take that furniture!");
      this.bored = false;
      this.sleepy = true;
    }
  }
  cat.buyFurniture = function() {
    this.houseCondition += 50;
    console.log("Are you sure about that?");
  }
  dog.bark();
  dog.goOutside();
  dog.goInside();
  cat.meow();
  cat.destroyFurniture();
  cat.buyFurniture();