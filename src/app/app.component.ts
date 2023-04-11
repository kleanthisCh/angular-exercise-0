import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-exercise-0';
  rWord = '';
  words: string[] = [];
  ewords: string[] = [];
  owords: string[] = [];
  //receivedWord: string | undefined;

  onSubmit(receivedWord: string) {
    console.log('app.component.ts receivedWord = ' + receivedWord);
    this.rWord = receivedWord;
    this.words.push(this.rWord);
    if (this.rWord.length % 2 === 0) {
      this.ewords.push(this.rWord);
    } else {
      this.owords.push(this.rWord);
    }
  }
}
