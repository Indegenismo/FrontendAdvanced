
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import List from './List.jsx';

class Add extends React.Component {
	constructor(props, state){
		super(props,state);
		this.state={
			counter:0,
			term: '',
			items:[]
		};
		// this.comp={
		// 	term: '',
		// 	items:[]
		// }
	this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }	
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
   		<button onClick={() => this.minus()}>Minus</button>
   		<span> {''}{this.state.counter}{''}</span>
   		<button onClick={() => this.setState({counter:this.state.counter + 1})}>Plus</button>
		   
		   <form className ="Add" onSubmit={this.onSubmit}>
		   <input value ={this.state.term} onChange={this.onChange}></input>
		   <button>Submit</button>
		   </form>
		   <List items={this.state.items}/>
	   		
   		</div>
		  
   		)

 }
 
 minus(){this.setState({
   			counter:this.state.counter - 1})};
}
ReactDOM.render(<Add/>, document.getElementById('root'));


// import React, { Component } from 'react';
// import * as ReactDOM from 'react-dom';
// import List from './List.jsx';

// export default class App extends Component {
//   constructor(props,state) {
//     super(props,state);
//     this.state = {
//       term: '',
//       items: []
// 	};
// 	this.onChange = this.onChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   onChange(event) {
//     this.setState({ term: event.target.value});
//   }

//   onSubmit  (event)  {
//     event.preventDefault();
//     this.setState({
//       term: '',
//       items: [...this.state.items, this.state.term]
//     });
//   }

//   render() {
//     return (
//       <div>
//         <form className="App" onSubmit={this.onSubmit}>
//           <input value={this.state.term} onChange={this.onChange} />
//           <button>Submit</button>
//         </form>
//         <List items={this.state.items} />
//       </div>
//     );
//   }
// }
// ReactDOM.render(<App/>, document.getElementById('root'));