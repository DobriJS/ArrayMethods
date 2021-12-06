//** public -- This method can be called any where, any time **/
//** private -- This method can only be called by other methods in this class */
//** protected -- This method can be called by other methods in this class, or by other methods in child class */

class Vehicle {
  constructor(public color: string) {
    this.color = color;
  }

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
car.startDrivingProcess();
