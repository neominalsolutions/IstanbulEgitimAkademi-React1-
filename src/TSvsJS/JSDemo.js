// ES6 ile geldi claa
// ES6 class versiyonun desteklenemyen eski versiyon taracılar olabilir.
// eski tarayıcı class kodunu yorumlayamıyor.
// js de generic yapılar yok generic class yada method diye bir tanım yok.
// her değişken js de any;
// js de kalıtım var mı oop modelli bir kalıtım var mı
// ES6 da gelen özellik sayesinde extend keyword ile kalıtım sağlıyabiliriz

import { DemoFunc } from "./JSDemo";
// c# namespace kavramına denk gelir using kavramına denk gelir. fakat ES5 destekleyen bir tarayıcıda module import edemez hata alır.

class BaseCar {
  engineType;
  start() {
    console.log("start");
  }
}

class Car extends BaseCar {
  _name;

  getName() {
    return this._name;
  }

  setName(value) {
    this._name = value;
  }

  constructor(name) {
    console.log("car-name", name);
    super(); // js base sınıfın contructor'ını tetiklemeyi zorunlu hale getirmez unutursak hata alabiliriz.
  }

  startEngine() {
    // bazı kodları çalıştırıp
    // base olan kalıtım alınan servisteki start methodunu tetikleyebiliriz.
    super.start(); // start
    // ES6 daki bu kalıtım özelliği eski tarayıcılarda desteklenmiyor hata alma ihtimalimiz yüksek.
  }
}

// class bazı özellikleri rehber olarak aldıkları yapılar var.
// c# interface ile class yeni özellikler eklenebilir.
// js interface tanımı yok.

export function DemoFunc() {
  const message = "message";

  const car = new Car(); // yanlış bir tanımlama şekli constructor yok
  const car1 = new Car("bmw");
  car.getName(); // audi
  car.setName("voswagen");
  car.getName(); // voswagen
  car.setName(10); // hata vermez. yanlış tanımlama şekli sadece string değerler ile doğru çalışır.
  car.engineType = "v16";

  message();

  message = 10;

  message.parseInt();

  const user = {
    name: "Daniel",
    age: 26,
  };

  const location = user.location;

  function flipCoin() {
    // Meant to be Math.random()
    return Math.random < 0.5; // 0 ile 1 arasında rastgele değer üreten bir fonsksiyon yazım yanlışında dolayı değer üretemediğinden sonuç hep false
    // hatalı yazımdan dolayı sonuç her zaman false
  }
}
