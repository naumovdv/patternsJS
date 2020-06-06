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
  }
}

class BlueInk extends Ink {
  constructor() {
    super("blue")
  }
}

class BlackInk extends Ink {
  constructor() {
    super("black");
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

class BlueBody extends Body {
  constructor() {
    super("blue")
  }
}

class BlackBody extends Body {
  constructor() {
    super("black");
  }
}

// класс Ручка - абстрактная фабрика
class Pen {
  constructor(ink, body) {
    this.ink = ink;
    this.body = body;

    this.createInk();
    this.createBody();

    console.warn("Pen Created");
    console.warn("-----------");
    
  }

  createInk() {
    this.ink.create();
  };

  createBody() {
    this.body.create();
  };
}

class BluePen extends Pen {
  constructor() {
    console.warn("Blue Pen Create");
    
    super(
      new BlueInk(),
      new BlueBody()
    );
  }
}

class BlackPen extends Pen {
  constructor() {
    console.warn("Black Pen Create");

    super(
      new BlackInk(), 
      new BlackBody()
    );
  }
}

const bluePen = new BluePen();
const blackPen = new BlackPen();