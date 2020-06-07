// Abstract factory (фбстрактная фабрика)

// Тип: порождающий

// Назначение: предоставляет интерфейс для создания семейств
//   взаимосвязанных или взаимозависимых объектов, не
//   специфицируя их конкретных классов.

// Применяется в случаях:
//  - когда программа должна быть независимой от процесса и
//    типов создаваемых новых объектов.
//  - когда необходимо создать семейства или группы
//    взаимосвязанных объектов исключая возможность
//    одновременного использования объектов из разных этих
//    наборов в одном контексте.

// Плюсы:
//   - изолирует конкретные классы;
//   - упрощает замену семейств продуктов;
//   - гарантирует сочетаемость продуктов.

// Минусы:
//   - сложно добавить поддержку нового вида продуктов.

// класс Чернила
class Ink {
  constructor(color) {
    this.color = color;
  }

  create() {
    console.warn(`Create ink with color: ${this.color}`);
    return this;
  }
}

// класс Корпус
class Body {
  constructor(color) {
    this.color = color;
  }
  create() {
    console.warn(`Create body with color: ${this.color}`);
  }
}

// класс Ручка - абстрактная фабрика
class Pen {
  create(){}
}

class BluePen extends Pen {
  constructor() {
    super();
    console.warn("Blue Pen Create");
    this.ink = new Ink("blue");
    this.body = new Body("blue");
  }

  create() {
    this.ink.create();
    this.body.create();
    return this;
  }
}

class BlackPen extends Pen {
  constructor() {
    super();
    console.warn("Black Pen Create");
    this.ink = new Ink("black");
    this.body = new Body("black");
  }

  create() {
    this.ink.create();
    this.body.create();
    return this;
  }
}

pens = [];
creatorsPen = [ 
  new BluePen(), 
  new BlackPen()
];

for (let creator of creatorsPen) {
  pens.push(creator.create());
}

console.warn("pens", pens);