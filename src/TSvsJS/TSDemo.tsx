import App from "../App";

type DemoProps = {
  title: string;
};

// Ts tüm kodlar tüm tarayıcı versiyonlarının anlacağı format olan ES5 çevriliyor. webpack, babel bir kütüphane yapar.
// yani burdaki yazılan kod tarayıcı tarafından js dönüşünce kesinlikle çalışak

interface ISmartCar {
  teslaScreen(): void;
}

interface IKey<T> {
  key: T;
}

// typescripte access modifier dediğimiz bir kavram da var
// private (field),protected (kalıtım verilen sınıfa sadece açılan değerler),public (props)
class BaseCar {
  protected engineType: string = "";
  public start(): void {}
}

// ts de nesneleri interface vasıtası ile yeni özellikler kazandırabiliyoruz.
// ts de bir hata varsa build alıp sunucuya kodlar deploy edilmeden önce hata alıyoruz.
class Car extends BaseCar implements ISmartCar, IKey<string> {
  private _name: string = "";

  // getter setter
  public getName() {
    return this._name;
  }

  public setName(value: string) {
    this._name = value;
  }

  constructor(name: string) {
    super(); // base sınıfın constructor tetiklenir. kalıtım alındığı takdirde kalıtım alınan sınıfın c# daki gibi base() methodu tetiklenmiş olur.
    this._name = name;
  }

  public key: string = "";

  teslaScreen(): void {
    throw new Error("Method not implemented.");
  }
}

// typescript tarafında tek bir instance ile çalışan c# daki static sınıflarda burda kullanılır.
// static sınıflar ts de static yazılmaz ama üyeleri static yazılır.
class DateHelper {
  public static getPrettyDate(date: Date): string {
    return date.toDateString();
  }
}

export function DemoFunc(props: DemoProps) {
  // typescript diğer bir özelliği strongly typed tip zorlamalı bir teknik.

  //. keyword tek bir instance üzerinden static sınıf gibi methodu çağırdık.
  let dateStr: string = DateHelper.getPrettyDate(new Date());

  let message: string = "message";
  // kod blogunun sonuna kadar artık sting tipinde tanımlnacaktır.
  const isActive: boolean = false;

  const car = new Car("Bmw");
  //const car1 = new Car(); // constructordan bir name değeri istiyor.
  car.getName(); // bmw
  car.setName("mercedes");
  car.getName(); // mercedes
  //car.setName(10);
  car.teslaScreen(); // interfaceden gelen özellik.

  //message();

  //message = 10;

  message.trimEnd();

  //message.parseInt();

  const user = {
    name: "Daniel",
    age: 26,
  };

  //user.location;

  // ts geliştirme anında JIT (just in time) hataları yakalamamızı sağlıyor.

  function flipCoin() {
    // Meant to be Math.random
    return Math.random() < 0.5;
  }

  return (
    <div>
      {props.title}
      {/* <App /> */}
    </div>
  );
}
