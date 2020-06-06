// Builder (строитель)

// Тип: порождающий

// Назначение: Отделяет конструирование сложного объекта от
//   его представления так, что в результате одного и того
//   же процесса конструирования могут получаться разные 
//   представления.

// Плюсы: 
//   - позволяет изменять внутреннее представление продукта;
//   - изолирует код, реализующий конструирование и
//     представление;
//   - дает более тонкий контроль над процессом 
//     конструирования.

class Pen {
  constructor() {
    this.colorInk = "blue";
    this.colorBody = "blue";
  }
}

class PenBuilder {
  constructor() {
    this.pen = new Pen();
  }

  addCap() {
    this.pen.cap = true;
    return this;
  }

  addClip() {
    this.pen.clip = true;
    return this;
  }

  changeColorInk(color) {
    this.pen.colorInk = color;
    return this;
  }

  build() {
    return this.pen;
  }
}

const penDefault = new PenBuilder().build();
const penCustom = new PenBuilder()
                    .addCap()
                    .addClip()
                    .changeColorInk("black")
                    .build();

console.warn("penDefault", penDefault);
console.warn("penCustom", penCustom);