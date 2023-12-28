import { Component, Input, OnInit } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {

  tabChange: boolean = true;

  ngOnInit(): void {
    
  }
  switchTab(){
    this.tabChange=true;
  }


}
