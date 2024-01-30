import React from 'react';

import { Link } from 'react-router-dom';
function Footer (){

    return(
     <>

	<footer className="footer">
		<div className="container row">
			<div className="footer-col">
				<Link to={"/"}><h4>Superkicks</h4></Link>
				<ul>
					<li><a href="#">about us</a></li>
					<li><a href="#">our services</a></li>
					<li><a href="#">privacy policy</a></li>
					<li><Link to="https://www.superkicks.in/">visit website</Link></li>
				</ul>
			</div>
			<div className="footer-col">
				<h4>get help</h4>
				<ul>
					<li><a href="#">FAQ</a></li>
					<li><a href="#">shipping</a></li>
					<li><a href="#">returns</a></li>
					<li><a href="#">order status</a></li>
					<li><a href="#">payment options</a></li>
				</ul>
			</div>
			<div className="footer-col">
				<h4>online shop</h4>
				<ul>
					<li><a href="#">download</a></li>
					<li><a href="#">changelog</a></li>
					<li><Link to="https://github.com/bhaskar-nayak">github</Link></li>
					<li><a href="#">all version</a></li>
				</ul>
			</div>
			<div className="footer-col">
				<h4>follow us</h4>
				<div className="social-links">
					<a href="#"><i className="fa-brands fa-x-twitter"></i></a>
					<Link to="https://www.instagram.com/?next=%2F&hl=en"><i className="fa-brands fa-instagram"></i></Link>
					<Link to="https://www.linkedin.com/in/bhaskar-64051b242/"><i className="fa-brands fa-linkedin-in"></i></Link>
				</div>
			</div>
		</div>
	</footer>
     </>
    )
}
export default Footer;