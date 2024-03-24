import { useContext } from "react";
import Context from "./context/context";
import useWindowSize from "./useWindowSize";

const ActiveSection = (active, animationIn, animationOut) => {
	const { nav } = useContext(Context);
	const { width } = useWindowSize();

	let animation =
		width > 1200
			? nav === active
				? animationIn || "fadeInLeft"
				: animationOut || "fadeOutLeft"
			: "";

	return `card-inner ${
		nav === active
			? "animated active " + animation
			: width > 1200
			? "animated hidden " + animation
			: ""
	}`;
};
export default ActiveSection;
