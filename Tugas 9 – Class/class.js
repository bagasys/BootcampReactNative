class Animal {
  constructor(name, legs=4, cold_blooded=false) {
    this.name = name;
    this.legs = legs;
    this.cold_blooded = cold_blooded;
  }
}



var sheep = new Animal("shaun");

console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false


class Ape extends Animal{
  constructor(name, legs=2, cold_blooded=false) {
    super(name, legs, cold_blooded);
  }

  yell() {
    console.log('Auooo');
  }
}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"

class Frog extends Animal{
  constructor(name, legs=4, cold_blooded=false) {
    super(name, legs, cold_blooded);
  }

  jump() {
    console.log('hpp hop');
  }
}

var kodok = new Frog("buduk")
kodok.jump() // "hop hop"

//


class Clock {
  constructor({template}) {
    this.template = template;
  }

  render() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    var output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  };

  start = function() {
    this.render();
    const that = this;
    this.timer = setInterval(() => {that.render();}, 1000);
  };

}

var clock = new Clock({template: 'h:m:s'});
clock.start();