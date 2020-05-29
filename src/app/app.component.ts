import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  czyTrwaGra = false;
  czyWygrana = false;
  podpowiedz = ""
  liczbaKomputera = null;
  wpisanaLiczba;
  min = 1;
  max = 10;

  rozpocznijGre() {
    this.liczbaKomputera = this.wylosujNowaLiczbe(this.min, this.max);
    this.czyWygrana = false;
    this.czyTrwaGra = true;
    this.wpisanaLiczba = null;
    this.podpowiedz = "";
  }

  sprawdzLiczbe() {
    if (this.wpisanaLiczba === this.liczbaKomputera) {
      this.czyTrwaGra = false;
      this.czyWygrana = true; 
    }
    if (this.wpisanaLiczba < this.liczbaKomputera) {
      this.podpowiedz = "Liczba, o której myślę jest większa niż podana!"
    } else {
      this.podpowiedz = "Liczba, o której myślę jest mniejsza niż podana!"
    }
  }

  wylosujNowaLiczbe(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }
}