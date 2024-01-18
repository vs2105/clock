import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { maxWordsValidator } from './directive/500word.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent implements OnInit {

  myForm!: FormGroup;
  yourForm!: FormGroup;

  constructor(private fb: FormBuilder){
    this.myForm = this.fb.group({
      myInput: ['', [Validators.required, maxWordsValidator(100)]]
    });

    this.yourForm = this.fb.group({
      yourTextarea: ['', [Validators.required, maxWordsValidator(100)]]
    });
  }

  time: NgbTimeStruct = { hour: 13, minute: 30, second: 30 };
 
	seconds = true;

  formattedTime: string = '';

  textInput: string = '';
  wordCount: number = 0;
  maxWordLimit: number = 500;

  onInputChange(event: any): void {
    // Get the input value
    const inputValue: string = event.target.value;

    // Count the number of words
    const words: string[] = inputValue.trim().split(/\s+/);
    this.wordCount = words.length;

    // Enforce the maximum word limit
    if (this.wordCount > this.maxWordLimit) {
      // Trim the input to the maximum word limit
      const trimmedInput: string = words.slice(0, this.maxWordLimit).join(' ');
      this.textInput = trimmedInput;
      this.wordCount = this.maxWordLimit;
    }
  }


  ngOnInit(): void {
    this.myForm = this.fb.group({
      time: [this.time],
    });

    this.formatTime()
  }

  formatTime(): void {
    this.formattedTime = `${this.time.hour}:${this.time.minute}:${this.time.second}`;
  }
 
}
