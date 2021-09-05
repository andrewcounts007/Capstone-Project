import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  post() {
    let boxnumber = document.getElementsByName('inlineRadioOptions');
    let newTitle = document.getElementById('title')?.textContent;

    console.log("hello");
    console.log(newTitle);
    alert('hey');

  }

  constructor() { }

  ngOnInit(): void {
  }


}








