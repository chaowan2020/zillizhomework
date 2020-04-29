import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public directionsMap: Map<string, {capitalKey: string, preposition: string}>;
  public directions: Array<string> = [];
  constructor() {
    this.directionsMap = Object.entries(DirectionsPreposition)
      .reduce((map, [key, preposition]) =>
        map.set(key, {capitalKey : key.charAt(0).toUpperCase() + key.slice(1), preposition}), new Map());
  }

  ngOnInit(): void {
    this.directions = [...this.directionsMap.keys()];
  }
}
enum DirectionsPreposition {
  top = 'Above',
  bottom = 'Below',
  left = 'On',
  right = 'On'
}

