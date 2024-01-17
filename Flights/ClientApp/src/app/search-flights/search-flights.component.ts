import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements OnInit{

  searchResult: any = [
    "American Airlines",
    "Delta Airlines",
    "British Airways",
    "United Airlines"
  ]
  constructor() { }
  ngOnInit(): void { }
  
}
