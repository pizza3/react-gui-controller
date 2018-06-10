import React,{Component} from'react';
import {colorStyle} from './JSXStyles/colorStyles';
import {label} from './JSXStyles/commonStyles';

class Color extends Component{
	constructor(props){
		super(props);
		this.state={
			hide:true,
			drag:false,
			color:'rgba(0,0,0,1)',
			pos:{
				x:0,
				y:0
			}
		};
		this.handleHide=this.handleHide.bind(this);
		this.handleDown=this.handleDown.bind(this);
		this.handleMove=this.handleMove.bind(this);
		this.handleUp=this.handleUp.bind(this); 
		this.changeColorBlock=this.changeColorBlock.bind(this);       
		this.fillGradient=this.fillGradient.bind(this);       
	}
    
	componentDidMount(){
		var colorBlock = document.getElementById('color-block'+this.props.num);
		this.ctx1 = colorBlock.getContext('2d');
		this.width1 = colorBlock.width;
		this.height1 = colorBlock.height;
		this.rgbaColor = '#f76262';

		
		var colorStrip = document.getElementById('color-strip'+this.props.num);
		this.ctx2 = colorStrip.getContext('2d');
		this.width2 = colorStrip.width;
		this.height2 = colorStrip.height;
		this.ctx1.rect(0, 0, this.width1, this.height1);
		this.fillGradient();
		this.fillStrip();
		// console.log(this.hexToRgbA(this.rgbaColor));
		//postion pointer indicator
	
		
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
		let color = this.hexToRgbA(this.rgbaColor);		
		for(let i=0;i<this.width1;i++){
			for(let j=0;j<this.height1;j++){
				let imageData = this.ctx1.getImageData(i, j, 1, 1).data;
				// console.log(imageData);				
				if(color==='rgba(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ',1)'){
					this.setState({
						pos:{
							x:i,
							y:j
						}
					});
					console.log(i+','+j);
				}
			}
		}
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
		let x = e.clientX-document.getElementById('color-block'+this.props.num).getBoundingClientRect().left;
		let y = e.clientY-document.getElementById('color-block'+this.props.num).getBoundingClientRect().top;
		let  imageData = this.ctx1.getImageData(x, y, 1, 1).data;
		this.rgbaColor = 'rgba(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ',1)';
		this.setState({
			color:this.rgbaColor,
			pos:{
				x:x,
				y:y
			}
		});
	}
    
	changeColorStrip(e){  
		//don't use offset.X
		//https://github.com/facebook/react/issues/4431   
		let x = e.clientX-document.getElementById('color-strip'+this.props.num).getBoundingClientRect().left;
		let y = e.clientY-document.getElementById('color-strip'+this.props.num).getBoundingClientRect().top;
		let imageData = this.ctx2.getImageData(x, y, 1, 1).data;
		this.rgbaColor = 'rgba(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ',1)';
		this.fillGradient();
		this.setState({
			color:this.rgbaColor
		});
	}
    
	handleDown(e){
		this.setState({
			drag:true
		});
		e.target.getAttribute('name') === 'strip'?
			this.changeColorStrip(e)           
			:
			this.changeColorBlock(e);
		
	}
    
	handleMove(e){
		if(this.state.drag){
			e.target.getAttribute('name') === 'strip'?
				this.changeColorStrip(e)           
				:
				this.changeColorBlock(e);
		}
	}

	hexToRgbA(hex){
		var c;
		if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
			c= hex.substring(1).split('');
			if(c.length== 3){
				c= [c[0], c[0], c[1], c[1], c[2], c[2]];
			}
			c= '0x'+c.join('');
			return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
		}
		throw new Error('Bad Hex');
	}
	
    
	handleUp(){
		this.setState({
			drag:false
		});
	}
    
	render(){
		const theme = this.props.theme?'container dark':'container';
		return(
			<div id='input-color' className={this.state.hide?theme:`${theme} hide`}>
				<div className='label'>{this.props.label}</div>
				<div className='pallete' onClick={this.handleHide}></div>
				<div className={this.props.theme?'block-parent block-parent-dark':'block-parent'} onMouseLeave={this.handleUp}>
					<canvas id={'color-block'+this.props.num} className='color-block' onMouseDown={this.handleDown} onMouseMove={this.handleMove} onMouseUp={this.handleUp}>
					</canvas> 
					<div className='block' onMouseDown={this.handleDown} onMouseMove={this.handleMove} onMouseUp={this.handleUp} />					           
				</div>
				<canvas id={'color-strip'+this.props.num} className='color-strip'  name='strip' onMouseDown={this.handleDown} onMouseMove={this.handleMove} onMouseUp={this.handleUp} onMouseLeave={this.handleUp}></canvas> 
				<style jsx>{colorStyle}</style>   
				<style jsx>{label}</style>   
				<style jsx>
					{`

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

					.dark{
						border-top: 1px solid #313131;
					}

					.hide{
						height:200px;
					}
				

					.block{
						position:absolute;
						width:10px;
						height:10px;
						border:1px solid #fff;
						border-radius:50%;
						transform-origin:center;
						transform:translate(${this.state.pos.x}px,${this.state.pos.y}px);
					}

					.pallete{
						position: relative;
						float: right;
						height: 23px;
						width: 132px;
						border-radius: 3px;
						background: ${this.state.color};
						border: 1px solid ${this.props.theme?'#424242':'rgb(229, 229, 229)'};
						margin-right: 4px;
						cursor: pointer;
				
					}
					`}
				</style>                        
			</div>
		);
	}
}

export default Color;