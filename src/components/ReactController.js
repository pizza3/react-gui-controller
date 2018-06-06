import React,{Component} from 'react';

class ReactController extends Component{
	constructor(props){
		super(props);
		this.state={
		};
	}

	render(){
		const style={
			'position': 'fixed',
    		'width': '300px',
    		'height': 'auto',
    		'background': '#FAFAFA',
    		'border': '1px solid #D6D6D6',
    		'left': '50px',
    		'borderRadius': '4px',
    		'overflow': 'hidden'
		};

		const style2={
			'position':'relative',
			'width':'100%',
			'height':'30px',
			'textAlign':'center',
			'background':'#FAFAFA',
			'color':'#779BFF',
			'fontFamily': 'sans-serif',
			'fontSize': '12px',
			'paddingTop': '8px',
			'fontWeight': '100', 
			'cursor':'pointer'
		};

		const drag={
			'position':'relative',
			'width':'100%',
			'height': '24px',
			'borderBottom': '1px solid #D6D6D6'
		};

		const container={
			'position':'relative',
			'width':'100%',
			'height':'auto',
			'overflow':'hidden'
		};
		

		return(
			<div id='controller-body' style={style}>
				<div style={drag}/>
				<div style={container}>
					{this.props.children}
				</div>
				<div style={style2}>Close Controls</div>
			</div>
		);
	}
}

export default ReactController;