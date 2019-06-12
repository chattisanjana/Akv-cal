import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  res :any
  display = ""
  title = 'calculator';
  insertChar(num){
   this.display = this.display + num;
  }
  evaluate(){
    console.log();
    this.res = eval(this.display)
  }
  reset(){
    this.res = undefined
    this.display = ""
  }

}
