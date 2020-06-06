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
  }
}

// дочерний класс - синие чернила
class BlueInk extends Ink {
  constructor() {
    super("blue");
  }
}

// дочерний класс - черные чернила
class BlackInk extends Ink {
  constructor() {
    super("black");
  }
}

// класс Создатель - фабрика
class CreatorInk {
  factoryMethod() {}
}

// дочерний класс - создатель Продукта А
class CreatorBlueInk extends CreatorInk {
  factoryMethod() {
    return new BlueInk();
  }
}

// дочерний класс - создатель Продукта Б
class CreatorBlackInk extends CreatorInk {
  factoryMethod() {
    return new BlackInk();
  }
}

// An array of creators
const creators = [
  new CreatorBlueInk(),
  new CreatorBlackInk()
];

// Iterate over creators and create products
for (let creator of creators) {
  creator.factoryMethod();
}
