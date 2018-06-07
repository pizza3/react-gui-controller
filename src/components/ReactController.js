import React,{Component} from 'react';

class ReactController extends Component{
	constructor(props){
		super(props);
		this.state={
			hide:false,
			drag:false,
			pos:{
				x:100,
				y:50
			}
		};
		this.handleHide=this.handleHide.bind(this);
	
	}

	handleHide(){
		this.setState({
			hide:!this.state.hide
		});
	}

	renderChildren(){
		const { children } = this.props;
		return React.Children.toArray(children).map((child, i) => {
			// const liveUpdate = isUndefined(child.props.liveUpdate) ? this.props.liveUpdate : child.props.liveUpdate;
			// const labelWidth = isUndefined(child.props.labelWidth) ? this.props.labelWidth : child.props.labelWidth;
	  
			return React.cloneElement(child, {
			  key: i,
			  num:i
			//   data,
			//   liveUpdate,
			//   labelWidth,
			//   _onUpdateValue: this.handleUpdateValue,
			});
		  });
	}

	render(){
		return(
			<div id='controller-body' className='controller-body' onMouseMove={this.handleDragMove} >
				<div className='drag'/>
				<div className={this.state.hide?'container hide':'container'}>
					{this.renderChildren()}

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
						// left: 50px;
						border-radius: 4px;
						overflow: hidden;
						transform:translate(${this.state.pos.x}px,${this.state.pos.y}px);
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