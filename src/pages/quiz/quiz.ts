import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html'
})
export class QuizPage {
  numberQ:number = 3;
  questionNumber:number = 1;
  ladebalkenWidth:number = (1 / this.numberQ) * 100;
  buttonText:string = "Nächste Frage";


  constructor(public navCtrl: NavController) {   
  }

  @ViewChild(Slides) slides:Slides;
  

  ngAfterViewInit() {
  }

  slideForMe() {
    if(this.slides.isEnd()) {
      // abgabe
    }
    else 
      this.slides.slideNext();
  }

  questionChanged() {
    let currentQ = this.slides.getActiveIndex() + 1;
    this.questionNumber = currentQ;
    if(this.slides.isEnd()) {
      this.buttonText = "zur Auswertung";
    }
    else {
      this.buttonText = "Nächste Frage";
    }
    this.ladebalkenWidth = (currentQ / this.numberQ) * 100;
  }
}
