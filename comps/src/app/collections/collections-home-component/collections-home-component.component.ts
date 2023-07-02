import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home-component',
  templateUrl: './collections-home-component.component.html',
  styleUrls: ['./collections-home-component.component.css']
})
export class CollectionsHomeComponentComponent implements OnInit {

  data = [
    {
      name:'Tarun',
      age: 19,
      job: 'Retailer'
    },
    {
      name:'Rohan',
      age: 23,
      job: 'Logistics'
    },
    {
      name:'Arpit',
      age: 24,
      job: 'Call Center'
    }
  ];

  headers = [
    {
      key: 'name', label:'Name'
    },
    {
      key: 'age', label:'Age'
    },
    {
      key: 'job', label:'Job'
    }
  ]

  constructor() {}

  ngOnInit(): void {
      
  }
}
