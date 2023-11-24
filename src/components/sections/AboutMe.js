import { Fragment } from "react";
const bio_ = ` <p>
<strong>Hello! I’m Donald Wellborn.</strong>
Back-end &amp; Frond-end developer from UK, London. I have rich
experience in wordpress, also I am good at Magento. I love to
talk with you about our unique.
</p>`;
const AboutMe = ({ bio }) => {
	return (
		<Fragment>
			<div className="content about">
				{/* title */}
				<div className="title">
					<span className="first-word">About</span> Me
				</div>
				{/* content */}
				<div className="row">
					<div className="col col-d-6 col-t-6 col-m-12 border-line-v">
						<div
							className="text-box"
							dangerouslySetInnerHTML={{ __html: bio ? bio : bio_ }}
						></div>
					</div>
					<div className="col col-d-6 col-t-6 col-m-12 border-line-v">
						<div className="info-list">
							<ul>
								<li>
									<strong>Age . . . . .</strong> 32
								</li>
								<li>
									<strong>Residence . . . . .</strong> USA
								</li>
								<li>
									<strong>Freelance . . . . .</strong> Available
								</li>
								<li>
									<strong>Address . . . . .</strong> Fort Walton Beach, FL
								</li>
							</ul>
						</div>
					</div>
					<div className="clear" />
				</div>
			</div>
		</Fragment>
	);
};
export default AboutMe;

export const AboutMeClassic = () => {
	return (
		<div className="content about">
			{/* title */}
			<div className="title">About Me</div>
			{/* content */}
			<div className="row">
				<div className="col col-d-12 col-t-12 col-m-12 border-line-v">
					<div className="text-box">
						<p>
							I am
							<span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
								{" "}
								Lindsey Howard
							</span>
							, web designer based in Florida. I have rich experience in web
							site design and building and customization.
						</p>
					</div>
					<div className="info-list">
						<ul>
							<li>
								<strong>Age . . . . .</strong> 32
							</li>
							<li>
								<strong>Residence . . . . .</strong> USA
							</li>
							<li>
								<strong>Freelance . . . . .</strong> Available
							</li>
							<li>
								<strong>Address . . . . .</strong> Fort Walton Beach, FL
							</li>
						</ul>
					</div>
				</div>
				<div className="clear" />
			</div>
		</div>
	);
};
