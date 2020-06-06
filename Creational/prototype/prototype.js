// Prototype (прототип)

// Тип: порождающий

// Назначение: создания объекта через клонирование другого
//   объекта вместо создания через конструктор

// Используется чтобы:
//   - избежать дополнительных усилий по созданию объекта
//     стандартным путём (имеется в виду использование
//     конструктора, т.к. в этом случае также будут вызваны
//     конструкторы всей иерархии предков объекта), когда
//     это непозволительно дорого для приложения.
//   - избежать наследования создателя объекта (object
//     creator) в клиентском приложении, как это делает
//     паттерн abstract factory.
//   - избежать построения иерархий классов или фабрик,
//     параллельных иерархий классов продуктов;

class Pen {
  constructor(colorInk, colorBody) {
    this.colorInk = colorInk;
    this.colorBody = colorBody;
  }

  create() {
    return new Pen(this.colorInk, this.colorBody);
  }
}

const prototypePen = new Pen("blue", "blue");

const pen_1 = prototypePen.create();
const pen_2 = prototypePen.create();

pen_1.colorInk = "black";
pen_2.colorBody = "black";

console.warn("pen_1", pen_1);
console.warn("pen_2", pen_2);
