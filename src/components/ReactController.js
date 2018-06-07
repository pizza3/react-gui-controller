import React,{Component} from 'react';

class ReactController extends Component{
	constructor(props){
		super(props);
		this.state={
			hide:false
		};
		this.handleHide=this.handleHide.bind(this);
	}

	handleHide(){
		this.setState({
			hide:!this.state.hide
		});
	}

	render(){
		return(
			<div id='controller-body' className='controller-body' >
				<div className='drag'/>
				<div className={this.state.hide?'container hide':'container'}>
					{this.props.children}
				</div>
				<div onClick={this.handleHide} className='control-button'>{this.state.hide?'Open Controls':'Close Controls'}</div>
				<style jsx>
					{`
					.controller-body{
						position: fixed;
						width: 300px;
						height: auto;
						background: rgb(250, 250, 250);
						border: 1px solid rgb(214, 214, 214);
						left: 50px;
						border-radius: 4px;
						overflow: hidden;
					}

					.container{
						position: relative;
						width: 100%;
						transition: 0.4s;
						max-height:100vh;
						overflow: hidden;
					}

					.hide{
						max-height:0px;
					}

					.drag{
						position: relative;
						width: 100%;
						height: 24px;
					}

					.control-button{
						position: relative;
						width: 100%;
						height: 30px;
						text-align: center;
						background: rgb(250, 250, 250);
						color: rgb(119, 155, 255);
						font-family: sans-serif;
						font-size: 12px;
						padding-top: 8px;
						font-weight: 100;
						cursor: pointer;
                        border-top: 1px solid rgb(214, 214, 214);						
					}

				`}
				</style>				
			</div>
		);
	}
}

export default ReactController;