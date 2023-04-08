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
			<nav ref={navRef}>
				<a href="/#">About</a>
				<a href="/#">Events</a>
                <div className="brand-logo">
                    <img src="../images/inqua.png" alt="" className="inqua-logo"/>
                </div>
				<a href="/#">Contact us</a>
                <button type="button" className="buy-button">
                    Buy Tickets
                </button>
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
