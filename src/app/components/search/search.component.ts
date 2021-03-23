import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  @Output() enteredYear:EventEmitter<string> = new EventEmitter();
  
  year:string = "";
  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit() {
    const year = this.year;
    this.enteredYear.emit(year);
  }
}
