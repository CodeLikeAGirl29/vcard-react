import { Fragment, useEffect, useState, useRef } from "react";
//import useClickOutside from "../../useClickOutside";

const Content = ({ content, close }) => {
	let domNode = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (domNode.current && !domNode.current.contains(event.target)) {
				close(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [close]);

	return (
		<Fragment>
			<div className="mfp-bg mfp-fade popup-box-inline mfp-ready" />

			<div
				className="mfp-wrap content_popup_warp mfp-close-btn-in mfp-auto-cursor mfp-fade popup-box-inline mfp-ready"
				tabIndex={-1}
				style={{ overflow: "hidden auto" }}
			>
				<div className="mfp-container mfp-s-ready mfp-inline-holder">
					<div className="mfp-content" ref={domNode}>
						<div id="popup-2" className="popup-box mfp-fade">
							{content}
							<button
								onClick={() => close()}
								title="Close (Esc)"
								type="button"
								className="mfp-close"
							>
								×
							</button>
						</div>
					</div>
					<div className="mfp-preloader">Loading...</div>
				</div>
			</div>
		</Fragment>
	);
};

const ContentModal = () => {
	const [open, setOpen] = useState(false);
	const [content, setContent] = useState(null);

	const handlePopupClick = (element) => {
		setOpen(true);
		const hiddenElement = element.parentElement.querySelector(".mfp-hide");
		const content_ = hiddenElement.querySelector(".content");
		setContent(content_);
	};

	useEffect(() => {
		const popupLinks = document.querySelectorAll(".has-popup-media");
		popupLinks.forEach((element) => {
			element.addEventListener("click", () => handlePopupClick(element));
		});
	}, []);

	return (
		<Fragment>
			{open && (
				<Content
					content={content}
					close={() => {
						setContent(null);
						setOpen(false);
					}}
				/>
			)}
		</Fragment>
	);
};
export default ContentModal;
