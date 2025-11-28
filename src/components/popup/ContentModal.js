import { Fragment, useEffect, useState, useRef } from "react";

const Content = ({ content, close }) => {
	const domNode = useRef(null);

	// Close when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (domNode.current && !domNode.current.contains(event.target)) {
				close();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [close]);

	// Optional: close on ESC
	useEffect(() => {
		const handleEsc = (event) => {
			if (event.key === "Escape") {
				close();
			}
		};

		document.addEventListener("keydown", handleEsc);
		return () => {
			document.removeEventListener("keydown", handleEsc);
		};
	}, [close]);

	if (!content) return null;

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
							className="popup-box mfp-fade"
							// Render HTML copied from hidden .content
							dangerouslySetInnerHTML={{ __html: content }}
						/>
						<button
							onClick={close}
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
	const [content, setContent] = useState("");

	useEffect(() => {
		if (typeof window === "undefined") return;

		const popupLinks = Array.from(
			document.querySelectorAll(".has-popup-media")
		);

		const handlers = popupLinks.map((link) => {
			const handler = (event) => {
				event.preventDefault();

				// Assuming structure:
				// <a class="has-popup-media" ...></a>
				// <div class="popup-box mfp-fade mfp-hide"> ... </div>
				const hiddenElement = link.nextElementSibling;

				if (!hiddenElement || !hiddenElement.classList.contains("mfp-hide")) {
					return;
				}

				const contentNode = hiddenElement.querySelector(".content");
				if (!contentNode) return;

				const html = contentNode.innerHTML;
				setContent(html);
				setOpen(true);
			};

			link.addEventListener("click", handler);
			return { link, handler };
		});

		// Clean up listeners on unmount
		return () => {
			handlers.forEach(({ link, handler }) => {
				link.removeEventListener("click", handler);
			});
		};
	}, []);

	const handleClose = () => {
		setContent("");
		setOpen(false);
	};

	return (
		<Fragment>
			{open && <Content content={content} close={handleClose} />}
		</Fragment>
	);
};

export default ContentModal;
