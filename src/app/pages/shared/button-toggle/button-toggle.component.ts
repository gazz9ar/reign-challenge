import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent implements OnInit {

	public all:boolean = true;
	@Output() toggle = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  public changeNews(newsType:string): void {
	this.toggle.emit(newsType);
	newsType === 'all' ? this.all = true : this.all = false;
  }
}
