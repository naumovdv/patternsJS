// Singleton (синглтон, одиночка) 

// Тип: порождающий

// Плюсы: контролируемый доступ к единственному экземпляру

// Минусы: 
//   - глобальные объекты могут быть вредны для
//   объектного программирования, в некоторых случаях приводя
//   к созданию немасштабируемого проекта;
//   - усложняет написание модульных тестов и следование TDD

// Примеры: корзина в интернет-магазине, плеер на медиа 
//   ресурсе (яндекс.музыка)

class Counter {
  constructor() {
    if (typeof Counter.instance === "object") {
      return Counter.instance;
    }
    this.count = 0;
    Counter.instance = this;
    return this;
  }

  getCount() {
    return this.count;
  }

  increaseCount() {
    return this.count++;
  }
}

const counter_1 = new Counter();
const counter_2 = new Counter();

console.warn("counter_1", counter_1.increaseCount());
console.warn("counter_1", counter_1.increaseCount());
console.warn("counter_2", counter_2.increaseCount());
console.warn("counter_2", counter_2.increaseCount());