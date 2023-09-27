import { Component, OnChanges, OnInit, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges{

	@Input() nome: string = ''

  constructor() {
		
	}

	ngOnChanges(changes: SimpleChanges): void {

	}

  ngOnInit(): void {
		this.nome = this.nome + 'Marcos'

  }

}
