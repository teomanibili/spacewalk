import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'workshop0',
  templateUrl: './workshop0.component.html',
  styleUrls: ['./workshop0.component.scss']
})
export class Workshop0Component implements OnInit {

  labels: string[] = [];
  constructor() { 
    for (let i = 1; i < 5; i++) {
      this.labels.push(''+i);    
    }
  }

  ngOnInit() {
  }

}
