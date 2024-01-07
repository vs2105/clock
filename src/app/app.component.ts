import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private fb: FormBuilder){}

  time: NgbTimeStruct = { hour: 13, minute: 30, second: 30 };
 
	seconds = true;



  ngOnInit(): void {
    this.myForm = this.fb.group({
      time: [this.time],
    });
  }
 
}
