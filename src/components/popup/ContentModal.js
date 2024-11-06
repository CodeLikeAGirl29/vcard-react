import { Fragment, useEffect, useState, useRef } from "react";

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
						<div
							id="popup-2"
							className="popup-box mfp-fade"
							dangerouslySetInnerHTML={{ __html: content }} // Render content as HTML
						/>
						<button
							onClick={() => close()}
							title="Close (Esc)"
							type="button"
							className="mfp-close"
						>
							×
						</button>
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
		const content_ = hiddenElement.querySelector(".content").innerHTML; // Extract inner HTML as a string
		setContent(content_);
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			const popupLinks = document.querySelectorAll(".has-popup-media");
			const handleClick = (element) => handlePopupClick(element);

			popupLinks.forEach((element) => {
				element.addEventListener("click", () => handleClick(element));
			});

			return () => {
				popupLinks.forEach((element) => {
					element.removeEventListener("click", handleClick);
				});
			};
		}
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
