import React , {Component} from 'react';

class ProgessSlider extends Component{
	constructor(props){
		super(props);
		this.state={

		};
	}

	render(){
		const style={
			'position':'relative',
			'width':'100%',
			'height': '32px',
			'borderBottom': '1px solid #D6D6D6',
			'fontFamily': 'sans-serif',
			'paddingTop': '4px',
			'paddingLeft': '2px',
			'paddingRight': '2px'
		};
        
		const label={
			'position':'relative',
			'float':'left',
			'paddingTop': '5px',
			'paddingLeft':'4px',
			'fontWeight': '100'	,
			'fontSize':'12px',
			'color':'#779BFF'
		};
		return(
			<div style={style}>
				<div style={label}>Noise</div>                
			</div>
		);
	}
}

export default ProgessSlider;