import React,{Component} from'react';

class Color extends Component{
	constructor(props){
		super(props);
		this.state={
			hide:true,
			drag:false,
			color:'rgba(255,0,0,1)'
		};
		this.handleHide=this.handleHide.bind(this);
		this.handleDown=this.handleDown.bind(this);
		this.handleMove=this.handleMove.bind(this);
		this.handleUp=this.handleUp.bind(this); 
		this.changeColorBlock=this.changeColorBlock.bind(this);       
	}
    
	componentDidMount(){
		var colorBlock = document.getElementById('color-block');
		this.ctx1 = colorBlock.getContext('2d');
		this.width1 = colorBlock.width;
		this.height1 = colorBlock.height;
		this.rgbaColor = 'rgba(255,0,0,1)';
		//
		var colorStrip = document.getElementById('color-strip');
		this.ctx2 = colorStrip.getContext('2d');
		this.width2 = colorStrip.width;
		this.height2 = colorStrip.height;
		this.ctx1.rect(0, 0, this.width1, this.height1);
		this.fillGradient();
		this.fillStrip();
	}
    

	handleHide(){
		this.setState({
			hide:!this.state.hide
		});
	}
    
	fillGradient(){
		this.ctx1.fillStyle = this.rgbaColor;
		this.ctx1.fillRect(0, 0, this.width1, this.height1);

		let grdWhite = this.ctx2.createLinearGradient(0, 0, this.width1, 0);
		grdWhite.addColorStop(0, 'rgba(255,255,255,1)');
		grdWhite.addColorStop(1, 'rgba(255,255,255,0)');
		this.ctx1.fillStyle = grdWhite;
		this.ctx1.fillRect(0, 0, this.width1, this.height1);

		let grdBlack = this.ctx2.createLinearGradient(0, 0, 0, this.height1);
		grdBlack.addColorStop(0, 'rgba(0,0,0,0)');
		grdBlack.addColorStop(1, 'rgba(0,0,0,1)');
		this.ctx1.fillStyle = grdBlack;
		this.ctx1.fillRect(0, 0, this.width1, this.height1);
	}

	fillStrip(){
		this.ctx2.rect(0, 0, this.width2, this.height2);
		let grd1 = this.ctx2.createLinearGradient(0, 0, 0, this.height1);
		grd1.addColorStop(0, 'rgba(255, 0, 0, 1)');
		grd1.addColorStop(0.17, 'rgba(255, 255, 0, 1)');
		grd1.addColorStop(0.34, 'rgba(0, 255, 0, 1)');
		grd1.addColorStop(0.51, 'rgba(0, 255, 255, 1)');
		grd1.addColorStop(0.68, 'rgba(0, 0, 255, 1)');
		grd1.addColorStop(0.85, 'rgba(255, 0, 255, 1)');
		grd1.addColorStop(1, 'rgba(255, 0, 0, 1)');
		this.ctx2.fillStyle = grd1;
		this.ctx2.fill();
	}
    
	changeColorBlock(e){  
		//don't use offset.X
		//https://github.com/facebook/react/issues/4431   
		let x = e.clientX-document.getElementById('color-block').getBoundingClientRect().left;
		let y = e.clientY-document.getElementById('color-block').getBoundingClientRect().top;
		let  imageData = this.ctx1.getImageData(x, y, 1, 1).data;
		this.rgbaColor = 'rgba(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ',1)';
		this.setState({
			color:this.rgbaColor
		});
	}
    
	// changeColorStrip(e){  
	// 	//don't use offset.X
	// 	//https://github.com/facebook/react/issues/4431   
	// 	let x = e.clientX-document.getElementById('color-strip').getBoundingClientRect().left;
	// 	let y = e.clientY-document.getElementById('color-strip').getBoundingClientRect().top;
	// 	let  imageData = this.ctx1.getImageData(x, y, 1, 1).data;
	// 	this.rgbaColor = 'rgba(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ',1)';
	// 	this.setState({
	// 		color:this.rgbaColor
	// 	});
	// }
    
	handleDown(e){
		this.setState({
			drag:true
		});
		this.changeColorBlock(e);
	}
    
	handleMove(e){
		if(this.state.drag){
			this.changeColorBlock(e);
		}
	}
    
	handleUp(){
		this.setState({
			drag:false
		});
	}
    
    

	render(){
		const style={
			'position':'relative',
			'width':'100%',
			'height': this.state.hide?'32px':'213px',
			'borderBottom': '1px solid #D6D6D6',
			'fontFamily': 'sans-serif',
			'paddingTop': '4px',
			'paddingLeft': '2px',
			'paddingRight': '2px',
			'overflow':'hidden'
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
        
		const pallete={
			'position':'relative',
			'float':'right',
			'height':'23px',
			'width':'128px',
			'borderRadius':'3px',
			'background':`${this.state.color}`,
			'border':'1px solid #E5E5E5',            
			'marginRight':'4px',	
			'cursor':'pointer'		            
		};
        
		const colorBlock={
			'position':'relative',
			'float':'right',
			'marginTop':'4px',
			'marginRight':'4px',
			'width':'82%',
			'height':'177px',
			'border': '1px solid #d4d3d3',
			'cursor':'crosshair'
            
		};
        
		const colorStrip={
			'position':'relative',
			'float':'left',
			'marginTop':'4px',
			'marginLeft':'5px',
			'width':'11%',
			'height':'177px',
			'border': '1px solid #d4d3d3'
		};
		
		return(
			<div id='input-color' style={style}>
				<div style={label}>{this.props.label}</div>
				<div style={pallete} onClick={this.handleHide}></div>
				<canvas id='color-block' style={colorBlock} onMouseDown={this.handleDown} onMouseMove={this.handleMove} onMouseUp={this.handleUp}></canvas>            
				<canvas id='color-strip' style={colorStrip}></canvas>                            
			</div>
		);
	}
}

export default Color;