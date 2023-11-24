import ActiveSection from "../activeSection";

const Resume = ({ children, animationIn, animationOut }) => {
	return (
		<div
			className={ActiveSection("resume", animationIn, animationOut)}
			id="resume"
		>
			<div className="card-wrap">{children}</div>
		</div>
	);
};
export default Resume;
