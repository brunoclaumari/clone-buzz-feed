import { Component, OnInit } from '@angular/core';

import quizz_questions from '../../../assets/data/quizz_questions.json'

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit{

  title:string = "";

  questions : any;
  questionSelected : any;
  //questionSelectedMaxIndex:number = 0;

  answers:string[] = [];
  answerSelected:string = "";

  questionIndex:number = 0;
  questionMaxIndex:number = 0;

  finished:boolean = false;

  constructor() {

  }

  ngOnInit(): void {
    this.fillData();
  }

  fillData(){
    if(quizz_questions){
      //debugger;
      this.finished = false;
      this.title = quizz_questions.title;

      this.questions = quizz_questions.questions;
      this.questionSelected = this.questions[this.questionIndex];
      //this.questionSelectedMaxIndex = quizz_questions.questions[this.questionIndex].options.length;

      this.questionMaxIndex = this.questions.length;
      this.answers = [];
      this.answerSelected = "";
    }

  }

  playerChoice(aliasChoice:string){
    this.answers.push(aliasChoice);
    console.log(this.answers);
    this.nextStep();

  }

  async nextStep(){
    this.questionIndex += 1;
    if(this.questionMaxIndex > this.questionIndex){
      this.questionSelected = this.questions[this.questionIndex];
    }
    else{
      this.finished = true;
      this.verificaVilaoOuHeroi();
    }
  }

  verificaVilaoOuHeroi(){
    /*
    "A": "Você muito provavelmente seria um super vilão!",
    "B": "Você muito provavelmente seria um super Herói!"
    */
   debugger;
    var vilao = this.answers.filter(x=> x == "A");
    var heroi = this.answers.filter(x=> x == "B");
    if(vilao.length > heroi.length){
      this.answerSelected = quizz_questions.results.A;
    }
    else{
      this.answerSelected = quizz_questions.results.B;
    }

  }

}
