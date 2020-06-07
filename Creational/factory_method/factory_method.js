// Factory method (фабрика)

// Тип: порождающий

// Назначение: создание объектов различных типов одним
// интерфейсом

// Плюсы: создание объектов, независимо от их типов
// и сложности процесса создания.

// Минусы: даже для одного объекта необходимо создать
// соответствующую фабрику, что увеличивает код.

// класс Чернила
class Ink {
  constructor(color) {
    this.color = color;
    this.create();
  }

  create() {
    console.warn(`Create ink with color: ${this.color}`);
    return this;
  }
}

class FactoryInk {
  factoryMethod() {}
}

// дочерний класс - создатель синих чернил
class FactoryBlueInk extends FactoryInk {
  factoryMethod() {
    return new Ink("blue");
  }
}

// дочерний класс - создатель черных чернил
class FactoryBlackInk extends FactoryInk {
  factoryMethod() {
    return new Ink("black");
  }
}

const inks = [];

// An array of creators
const creatorsInks = [
  new FactoryBlueInk(),
  new FactoryBlackInk()
];

// Iterate over creators and create products
for (let creator of creatorsInks) {
  inks.push(creator.factoryMethod());
}

console.warn("inks", inks);