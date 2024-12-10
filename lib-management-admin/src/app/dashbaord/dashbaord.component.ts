import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrl: './dashbaord.component.scss'
})
export class DashbaordComponent {



  array = [
    {
      title : "Student",
      details : '90'
    },
    {
      title : "Books",
      details : '50'
    },
    {
      title : 'Released',
      details : '15'
    },
    {
    title : 'Available Books',
    details :'10'
    }
  ]

}
