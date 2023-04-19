import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/App.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<div className="brand-Logo mob-brand-logo">
				<img src="./images/inqua.png" className="logo" />
			</div>
			<nav ref={navRef}>
				<a href="/#about" className="space-add">About</a>
				<a href="/#events">Events</a>
				<div className="brand-Logo">
					<a href="/#home"><img src="./images/inqua.png" className="logo" /></a>
				</div>
				<a href="/#contactUs">Contact us</a>
				<a href="/#buyTickets">
					<button className="buy-button">
						Buy Tickets
					</button>
				</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
