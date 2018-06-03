import React,{Component} from 'react';


class ReactController extends Component{
	constructor(props){
		super(props);
		this.state={
		};
	}

	render(){
		const style={
			'position':'fixed',
			'width':'300px',
			'height':'auto',
			'background':'#fff',
			'borderBottom':'2px solid #000',
			'borderLeft':'2px solid #000',
			'borderRight':'2px solid #000',            
			'left':'50px'
		};

		const style2={
			'position':'absolute',
			'width':'100%',
			'height':'20px',
			'textAlign':'center'
		};

		return(
			<div id='controller-body' style={style}>
				{this.props.children}
				<div style={style2}>close controls</div>
			</div>
		);
	}
}

export default ReactController;