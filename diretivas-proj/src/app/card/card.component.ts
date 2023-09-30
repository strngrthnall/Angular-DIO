import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  produtos: string[] = []

  constructor() {
    this.produtos = [
      'mouse',
      'teclado',
      'cabo',
      'fonte',
      'placa de vídeo'
    ]
  }

  ngOnInit(): void {
  }

  adicionar() {
    this.produtos.push("marcos")
  }
}
