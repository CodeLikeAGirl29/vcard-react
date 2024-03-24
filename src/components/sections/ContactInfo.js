const ContactInfo = () => {
	return (
		<div className="content contacts">
			{/* title */}
			<div className="title">Get in Touch</div>
			{/* content */}
			<div className="row">
				<div className="col col-d-12 col-t-12 col-m-12 border-line-v">
					<div className="map">
						<iframe
							src="https://www.google.com/maps/embed/v1/place?q=Fort+Walton+Beach,+FL,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
							style={{ border: 0, width: "100%", height: "100%" }}
							allowFullScreen=""
							loading="lazy"
						/>
					</div>
					<div className="info-list">
						<ul>
							<li>
								<strong>Address . . . .</strong> Fort Walton Beach, FL
							</li>
							<li>
								<strong>Email . . . .</strong> lindseykdev@gmail.com
							</li>
							<li>
								<strong>Phone . . . .</strong> 850.737.5474
							</li>
							<li>
								<strong>Freelance . . . .</strong> Available
							</li>
						</ul>
					</div>
				</div>
				<div className="clear" />
			</div>
		</div>
	);
};
export default ContactInfo;
