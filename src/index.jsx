
import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(props, state){
		super(props,state);
		this.state={
			counter:0
		}
	}
 render() {
   return (
   		<div>
   		<button onClick={() => this.minus()}>Minus</button>
   		<span> {''}{this.state.counter}{''}</span>
   		<button onClick={() => this.setState({counter:this.state.counter + 1})}>Plus</button>
   		</div>
   		)

 }
 minus(){this.setState({
   			counter:this.state.counter - 1})};
}
ReactDOM.render(<App/>, document.getElementById('root'));