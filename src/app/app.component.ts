import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Mini calculadora';

  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  /* Para que no concatene, se declara los numeros tipo string y se parsea dentro de suma numero1: String = 0;
      y los inputs del html tipo text funciona.
      o se ponen los inputs tipo number*/
  sumar(): void {
    this.resultado = this.numero1 + this.numero2;
  }

  resta(): void {
    this.resultado = this.numero1 - this.numero2;
  }
}
