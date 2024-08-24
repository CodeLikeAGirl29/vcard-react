import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingAnimation = () => {
	// Create Ref element.
	const el = useRef(null);

	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: ["Web Designer", "Developer", "Freelancer"], // Strings to display
			typeSpeed: 200,
			backSpeed: 100,
			backDelay: 600,
			smartBackspace: true,
			loop: true,
			showCursor: true,
		});

		// Destroying
		return () => {
			typed.destroy();
		};
	}, []);
	return <div className="subtitle subtitle-typed" ref={el}></div>;
};
export default TypingAnimation;
