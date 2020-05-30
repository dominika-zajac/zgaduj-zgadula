import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  czyTrwaGra = false;
  czyWygrana = false;
  podpowiedz = "";
  // null oznacza ze zmienna ma pustą wartość
  liczbaKomputera = null; 
  wpisanaLiczba = null;
  min = 1;
  max = 10;

  rozpocznijGre() {
    /*
    Jakie wartości powinny mieć zmienne na początku naszej gry?
    Co powinien zrobić komputer?
    */
  }

  sprawdzLiczbe() {
    /*
    Ta funkcja powinna porównać liczbę wybraną przez komputer i wpisaną przez gracza,
    a następnie ustawić odpowiednie wartości zmiennych:
    - czyTrwaGra
    - czyWygrana
    - podpowiedz
    */
  }

  wylosujNowaLiczbe(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }
}
