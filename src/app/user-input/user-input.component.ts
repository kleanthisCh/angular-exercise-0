import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent {
  @Output() submit = new EventEmitter<string>();

  word = '';

  onSubmit(insertedWord: string) {
    if (insertedWord != '') {
      console.log('insertedWord = ' + insertedWord);
      this.word = insertedWord;
      console.log('this.word = ' + this.word);
      this.submit.emit(insertedWord);
    }
  }
}
