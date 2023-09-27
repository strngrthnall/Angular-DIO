import {
	Component,
	OnInit,
	DoCheck,
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	OnDestroy
	} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent
implements OnInit,
	DoCheck,
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	OnDestroy {

	quantidade: number = 0

  constructor() { }

	adicionar(){
		this.quantidade += 1
	}

	decrementar() {
		this.quantidade -= 1
	}

	//check -> content -> View

	ngOnInit(): void {
		console.log('ngOnOInit')
	}

	ngDoCheck(): void {
		console.log('ngDoCheck');
	}

	ngAfterContentChecked(): void {
		console.log('ngAfterContentCheck');
	}

	ngAfterContentInit(): void {
		console.log('ngAfterContentInit');
	}

	ngAfterViewChecked(): void {
		console.log('ngAfterViewChecked');
	}

	ngAfterViewInit(): void {
		console.log('ngAfeterViewInit');
	}

	ngOnDestroy(): void {
		console.log('ngOnDestroy')
	}


}
