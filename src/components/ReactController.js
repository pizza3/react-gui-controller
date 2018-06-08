import React,{Component} from 'react';
import { controllerStyle } from './Styles/controllerStyles';

class ReactController extends Component{
	constructor(props){
		super(props);
		this.state={
			hide:false,
			drag:false,
			pos:{
				x:100,
				y:50
			},
			dark:true
		};
		this.handleHide=this.handleHide.bind(this);
		this.handleData=this.handleData.bind(this);		
	
	}

	handleHide(){
		this.setState({
			hide:!this.state.hide
		});
	}

	handleData(path, val){
		let data = this.props.data;
		data[path]=val;
		this.props.onUpdate(data);
	}

	renderChildren(){
		const { children ,data} = this.props;
		return React.Children.toArray(children).map((child, i) => {
			// const liveUpdate = isUndefined(child.props.liveUpdate) ? this.props.liveUpdate : child.props.liveUpdate;
			// const labelWidth = isUndefined(child.props.labelWidth) ? this.props.labelWidth : child.props.labelWidth;
	  
			return React.cloneElement(child, {
			  key: i,
			  num:i,
			  theme:this.state.dark,
			  updateData:this.handleData,
			  data:data
			//   liveUpdate,
			//   labelWidth,
			//   _onUpdateValue: this.handleUpdateValue,
			});
		  });
	}

	render(){
		return(
			<div id='controller-body' className={this.state.dark?'controller-body dark':'controller-body'} onMouseMove={this.handleDragMove} >
				<div className='drag'/>
				<div className={this.state.hide?'container hide':'container'}>
					{this.renderChildren()}

				</div>
				<div onClick={this.handleHide} className={this.state.dark?'control-button control-button-dark':'control-button'}>{this.state.hide?'Open Controls':'Close Controls'}</div>
				<style jsx>
					{controllerStyle}
				</style>				
			</div>
		);
	}
}

export default ReactController;