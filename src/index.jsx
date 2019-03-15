
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import List from './List.jsx';
import {TodoItem} from './components/Todoitem.jsx';
import {Game} from './game/Game.js';


window.stateMachine = stateMachine;

class App extends React.Component {
	constructor(props, state){
		super(props,state);
		this.game = new Game();
		this.state={
			counter:0,
			term: '',
			items:[],
			bg:[],
			list:[
				{name:'aaa',color:'red' },
			  {name:'bbb',color:'green', bold:true}]
		};
		// this.comp={
		// 	term: '',
		// 	items:[]
		// }
	this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
	}	
	newMove(){
		this.game.movexKub()
	}
	newColor(){
		this.game.changeColor();
	}
	// playGame(){
	// 		this.game = new Game()
	// }
  onChange ()  {
    this.setState({term:event.target.value})
  }
  onSubmit  ()  {
    event.preventDefault()
    this.setState({
      term:'',
      items:[...this.state.items, this.state.term]
    });}
	
 render() {
   return (
   		<div>
				 <input type="text" onChange={(e) =>  this.storeData(e.target.value)}/>
				 <button onClick={this.addItem.bind(this)}>Add</button>
				 
				 <ul>
           {this.state.list.map((item, i) => (
                   <TodoItem key={i}name={item.name}
                     onRemove={() => this.removeItem(i)}/>
                    ))}
           </ul>
   		<button onClick={() => this.minus()}>Minus</button>
   		<span> {''}{this.state.counter}{''}</span>
   		<button onClick={() => this.setState({counter:this.state.counter + 1})}>Plus</button>
		   
		   <form className ="Add" onSubmit={this.onSubmit}>
		   <input value ={this.state.term} onChange={this.onChange}></input>
		   <button>Submit</button>
		   </form>
		   <List items={this.state.items}/>
	   		
			  <button onClick={()=>this.newColor()}> New color</button>
				<button onClick ={()=>this.playGame()}>Play</button><br></br>
				<button onClick={()=>this.newMove()}> New Move</button>
				 <br></br>
   		</div>
		  
   		)

 }
 storeData(userName) {
	window.localStorage.setItem('config', JSON.stringify({userName, aaa: 1111}));
	window.sessionStorage.setItem('config', JSON.stringify({userName, aaa: 1111}));
}
 addItem(){
	this.setState({list: [...this.state.list, {name: 'cccc',color:'pink'}]})
 };
 removeItem(i) {
	this.state.list.splice(i, 1);
	this.setState({list: [...this.state.list]})
}

 minus(){this.setState({
   			counter:this.state.counter - 1})};
}
ReactDOM.render(<App/>, document.getElementById('root'));
