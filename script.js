class Skoda {
    constructor(brand, model, maxSpeed, color) {
        this.brand = brand;
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.color = color;
    }

    info() {
        return alert(`${this.brand} Модель ${this.model} ${this.maxSpeed}км/ч `)
    }

    colorOnly() {
        return alert(`${this.color}`)
    }

    blueBg(){
        document.querySelector('body').style.backgroundColor = "blue";
    }
    redBg(){
        document.querySelector('body').style.backgroundColor = "red";
    }
}

class Model extends Skoda {
    constructor(brand, model, maxSpeed, color) {
        super(brand, model, maxSpeed, color);
    }
}

const car1 = new Model('Skoda', 'Fabia', 180, 'red')
const car2 = new Model('Skoda', 'Rapira', 220, 'blue')
car1.redBg();
