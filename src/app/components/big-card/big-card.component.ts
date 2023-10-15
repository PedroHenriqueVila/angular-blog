import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {

  @Input()
  photoCover: string =""
  @Input()
  cardTitle: string =""
  @Input()
  cardDescription: string ="lasciate ogni esperanza voi ch'entrate"
  @Input()
  id: string="0"


  constructor() { }

}
