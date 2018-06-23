import React from 'react';

const Nav = () => {
	return (
		<div className="nav">
			<div className="link">Example2</div>
			<div className="link">Example1</div>
			<div className="link">Home</div>
			<style jsx>
				{`
					.nav {
						position: fixed;
						width: 100%;
						height: 50px;
						background: #f1f1f1;
						padding-top: 10px;
						z-index: 10;
					}

					.link {
						font-family: 'Poppins', sans-serif;
						float: right;
						font-weight: 800;
						margin-right: 28px;
						font-size: 12px;
					}
				`}
			</style>
		</div>
	);
};

export default Nav;
