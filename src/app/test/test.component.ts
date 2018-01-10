import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 text1:string='Yipeee!!';
  constructor() { }

  ngOnInit() {
    
  }

}
