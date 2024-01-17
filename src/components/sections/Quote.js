import { Fragment } from "react";
const Quote = () => {
	return (
		<Fragment>
			<div className="content quote">
				{/* title */}
				<div className="title">
					<span>Quote</span>
				</div>
				{/* content */}
				<div className="row">
					<div className="col col-d-12 col-t-12 col-m-12 border-line-v">
						<div className="revs-item">
							<div className="text">
								<div>
								Adapt what is useful, reject what is useless, and add what is specifically your own.
								</div>
							</div>
						</div>
					</div>
					<div className="clear" />
				</div>
			</div>
		</Fragment>
	);
};
export default Quote;
