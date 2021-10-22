import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'randomQs';

  num1 = Math.floor((Math.random() * 19) + 1);
  num2 = Math.floor((Math.random() * 19) + 1);

  correct = this.num1 + this.num2;
  ans:any = '';
  right = 0;
  wrong = 0;

  getAnswer() {
    if (this.ans == this.correct) {
      this.right++;
      this.num1 = Math.floor((Math.random() * 19) + 1);
      this.num2 = Math.floor((Math.random() * 19) + 1);
      this.correct = this.num1 + this.num2;
      this.ans = '';
    } else {
      this.wrong++;
      this.num1 = Math.floor((Math.random() * 19) + 1);
      this.num2 = Math.floor((Math.random() * 19) + 1);
      this.correct = this.num1 + this.num2;
      this.ans = '';
    }
  }

  onKeypressEvent(event: any) {
    if (event.key === "Enter" && this.ans != ''){
      this.getAnswer();
    }
  }

}
