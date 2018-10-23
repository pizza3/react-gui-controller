import React, { Component } from 'react';
import Img from '../../Assets/header.png';

export default class Page extends Component {
	state = {};

	render() {
		return (
			<div className="page-body">
				<div className="head">
					<div className="content-left">
						<div className="content-left-head">React Gui Controller</div>
						<div className="content-left-con">
							A graphical user interface for changing states in react.
							Inspired from Google's popular dat.GUI controller library.
							This library provides additional functionalities such as
							Ease curve editor, Enhanced hue selector, Draggable
							placement. For styling this library uses Zeit styled-jsx.
						</div>
						<code>npm install react-gui-controller --save</code>
						<div>
							<a href="https://github.com/pizza3/react-gui-controller#usage">
								<button>Basic Usage</button>
							</a>
							<a href="https://github.com/pizza3/react-gui-controller#docs">
								<button>Documentation</button>
							</a>
						</div>
					</div>
					<div className="content-right">
						<img src={Img} alt="img" />
					</div>
				</div>
				<style jsx>
					{`
						.page-body {
							position: relative;
							width: 100%;
							height: 100vh;
						}

						.head {
							max-width: 1000px;
							display: block;
							width: 95%;
							margin: 0 auto;
						}

						.label,
						.content {
							font-family: sans-serif;
							color: #212121;
							display: inline-block;
						}

						img {
							width: 95%;
						}

						.content-left {
							position: relative;
							float: left;
							width: 50%;
							top: 50px;
							height: calc(100vh - 50px);
							padding-top: 19vh;
						}

						.content-right {
							position: relative;
							float: left;
							width: 50%;
							top: 50px;
							height: calc(100vh - 50px);
							padding-top: 12vh;
						}

						.content-left-head {
							font-family: 'Poppins', sans-serif;
							font-size: 29px;
							color: #212121;
							font-weight: 900;
						}

						.content-left-con {
							font-family: 'Poppins', sans-serif;
							font-size: 14px;
							line-height: 28px;
							margin-bottom: 41px;
							letter-spacing: 0.3px;
							font-weight: 600;
							color: rgb(119, 155, 255);
							margin-top: 20px;
						}
						.block {
							position: relative;
							width: 100%;
						}

						code {
							border-radius: 4px;
							padding: 10px;
							background: #e2e2e2;
							color: #909090;
							font-size: 12px;
							font-family: 'Poppins', sans-serif;
							letter-spacing: 0.6px;
							word-spacing: 4px;
						}

						button {
							background-color: #3a6eff;
							border: none;
							border-radius: 4px;
							padding: 12px 15px;
							-webkit-transition: 0.125s;
							-o-transition: 0.125s;
							transition: 0.125s;
							color: #f1f1f1;
							font-size: 13px;
							font-weight: 600;
							letter-spacing: 0.35px;
							display: inline-block;
							margin-top: 43px;
							cursor: pointer;
							margin-right: 20px;
							margin-bottom: 20px;
						}

						button:hover {
							background-color: #3a6eff;
						}
					`}
				</style>
			</div>
		);
	}
}
