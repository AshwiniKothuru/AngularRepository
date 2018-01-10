import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
firstName: string='Ashwini';
lastName: string='Kothuru';
  constructor() { }

  ngOnInit() {
  }

}
