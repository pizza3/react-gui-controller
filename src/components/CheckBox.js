import React,{Component} from 'react';

class CheckBox extends Component{
	constructor(props){
		super(props);
		this.state={
			value:false
		};
		
		this.handleInputChange=this.handleInputChange.bind(this);

	}
	
	handleInputChange(e){
		this.setState({
			value:e.target.checked
		});
	}

	render() {
		return (
			<div className='container'>
				<div className='label'>{this.props.label}</div>
				<input id={'switch'+this.props.num} name='view' type="checkbox" hidden checked={this.state.value} onChange={this.handleInputChange} />
				<label htmlFor={'switch'+this.props.num} className={'switch'+this.props.num}></label>
				<style jsx>
					{`
					.label{
						position: relative;
						float: left;
						padding-top: 5px;
						padding-left: 4px;
						font-weight: 100;
						font-size: 12px;
						color: rgb(119, 155, 255);
					}
					.container{
						position: relative;
						width: 100%;
						height: 32px;
						border-top: 1px solid rgb(214, 214, 214);
						font-family: sans-serif;
						padding-top: 4px;
						padding-left: 2px;
						padding-right: 2px;
						overflow:hidden;
						transition:.4s;						
					}

					.switch${this.props.num}{
						display: inline-block;
						float:right;
						width: 42px;
						height: 22px;
						padding: 4px;
						border-radius: 20px;
						background: #fafafa;
						vertical-align: middle;
						position: relative;
						cursor: pointer;
						user-select: none;
						transition: background 350ms ease;
						margin-right: 4px;
						margin-top: 1px;					
						border: 1px solid #e5e5e5;
					}

					.switch${this.props.num}:before,
					.switch${this.props.num}:after {
						content: "";
						display: block;
						width: 13px;
   						height: 13px;
						border-radius: 50%;
						position: absolute;
						top: 50%;
						transition: all 350ms cubic-bezier(0, 0.95, 0.38, 0.98), background 150ms ease;
					}

					.switch${this.props.num}:before {
						background: rgba(128, 128, 128, 0.075);
						transform: translate3d(0, -50%, 0) scale(0);
					}

					.switch${this.props.num}:after{
						background: #d8d8d8;
						border: 1px solid #d6d6d6;					
						transform: translate3d(-2px, -50%, 0);
					}

					.switch${this.props.num}:active:before {
						transform: translate3d(0, -50%, 0) scale(3);
					}

					input:checked+.switch${this.props.num} {
						background: #769aff;
					}

					input:checked+.switch${this.props.num}:before{
						background: rgba(131, 177, 84, 0.075);
						transform: translate3d(100%, -50%, 0) scale(1);
					}

					input:checked+.switch${this.props.num}:after{
						background: #fff;
						border: 1px solid #fff;											
						transform: translate3d(124%, -50%, 0);
					}

					input:checked+.switch${this.props.num}:active:before{
						background: rgba(131, 177, 84, 0.075);
						transform: translate3d(100%, -50%, 0) scale(3);
					}



			`}
				</style>
			</div>
		);
	}
}

export default CheckBox;