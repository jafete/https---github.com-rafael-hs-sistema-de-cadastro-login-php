import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro',
  templateUrl: './primeiro.component.html',
  styleUrls: ['./primeiro.component.css']
})
export class PrimeiroComponent implements OnInit {

  name: string = "Abimael Yohane Jafete";
  age: number = 31;
  job ="Desenvolvedor";
  hobbies = ['Corretor', 'Atleta', 'Estudar', 'Passear'];
  car = {
    nome: "Polo",
    ano: 2018,
  };

  constructor() {}
  ngOnInit(): void {

  }
}
