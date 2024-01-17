import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements OnInit{

  searchResult: FlightReadModel[] = [
    {
      airline: "American Airlines",
      remainingNumberOfSeats: 10,
      departure: { time: Date.now().toString(), place: "New York" },
      arrival: { time:Date.now().toString(), place: "Los Angeles" },
      price: 100,
    },
    {   
      airline: "Delta Airlines",
      remainingNumberOfSeats: 30,
      departure: { time: Date.now().toString(), place: "Chicago" },
      arrival: { time: Date.now().toString(), place: "Phoenix" },
      price: 550,
    },
    {
      airline: "British Airways",
      remainingNumberOfSeats: 52,
      departure: { time: Date.now().toString(), place: "Miami" },
      arrival: { time: Date.now().toString(), place: "Las Vegas" },
      price: 750,
    },
    {
      airline: "United Airlines",
      remainingNumberOfSeats: 10,
      departure: { time: Date.now().toString(), place: "New York" },
      arrival: { time: Date.now().toString(), place: "Seattle" },
      price: 1000,
    }
  ]
  constructor() { }
  ngOnInit(): void { }
  
}

export interface FlightReadModel {
  airline: string;
  arrival: TimePlaceReadModel;
  departure: TimePlaceReadModel;
  price: number;
  remainingNumberOfSeats: number;

}

export interface TimePlaceReadModel {
  place: string;
  time: string;
}
