import React,{ Component} from "react";
import "./assets/style.css";
import quizs from "./quizService/index1";
import QuestionBox from './QuestionBox';
import Result from './Result';
import jwt_decode from 'jwt-decode'



class Question extends Component{
	constructor() {
		super()
		this.state = {
		  user_name: '',
		  name: '',
		  email: '',
		  errors: {},
		  questionBank:[],
		score: 0,
		responses: 0
		}
	  }
	  

	getQuestions=()=>{
		quizs().then(question =>{
			this.setState({
				questionBank:question
			});
		});

	};
	computeAnswer =(answer,correctAnswer)=>{
		if (answer=== correctAnswer){
			this.setState({
				score: this.state.score + 1
			});

		}
		this.setState({
			responses: this.state.responses<10 ? this.state.responses +1 :10
		})
	}
	playAgain=()=>{
		this.getQuestions();
		this.setState({
			score:0,
			responses:0
		})
	}
	componentDidMount() {
		this.getQuestions();
		const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      user_name: decoded.user_name,
      name: decoded.name,
      email: decoded.email,
	  pass:decoded.password
    })
	}
	render()
	{
		return(
			<div >
			<div >
				<br></br>
			 <h3>Welcome, To Quiz,  {this.state.user_name}</h3>
			 <br></br>
			</div>
			{this.state.questionBank.length >0 && this.state.responses<10 && this.state.questionBank.map(
				({question,answers,correct,questionId})=> (
					<QuestionBox question={question} options={answers} key={questionId} selected={answer =>this.computeAnswer(answer,correct)}/>
				)
				)}
				{this.state.responses === 10? (<Result name={this.state.name} score={this.state.score} playAgain={this.playAgain}/>):null}	
					
			</div>
			
			);
	}

}
export default Question;