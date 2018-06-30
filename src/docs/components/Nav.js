import React from 'react';
import Logo from '../Assets/logo.svg';
const Nav = () => {
	return (
		<div className="nav">
			<img src={Logo} className="logo" />
			<style jsx>
				{`
					.nav {
						position: fixed;
						width: 100%;
						height: 50px;
						background: transparent;
						padding-top: 21px;
						z-index: 10;
					}

					.link {
						font-family: 'Poppins', sans-serif;
						float: right;
						font-weight: 800;
						margin-right: 56px;
						font-size: 12px;
						color: #212121;
						cursor: pointer;
					}

					.logo {
						position: relative;
						width: 50px;
						float: left;
						margin-left: 5%;
					}
				`}
			</style>
		</div>
	);
};

export default Nav;
