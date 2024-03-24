import { Fragment, useEffect } from "react";
import ContentModal from "../components/popup/ContentModal";
import ImageGallery from "../components/popup/ImageGallery";
import ImageView from "../components/popup/ImageView";
import VideoPopup from "../components/popup/VideoPopup.js";
import { createSkillsDot, dotResize } from "../utils/utils";
import Background from "./Background.js";
import ContentSidebar from "./ContentSidebar.js";
import GithubCorner from "../components/GithubCorner";
import siteMetadata from "../utils/siteMetaData";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
	metadataBase: new URL(siteMetadata.siteUrl),
	title: {
		template: `%s | ${siteMetadata.title}`,
		default: siteMetadata.title, // a default is required when creating a template
	},
	description: siteMetadata.description,
	openGraph: {
		title: siteMetadata.title,
		description: siteMetadata.description,
		url: siteMetadata.siteUrl,
		siteName: siteMetadata.title,
		images: [siteMetadata.socialBanner],
		locale: "en_US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		card: "summary_large_image",
		title: siteMetadata.title,
		images: [siteMetadata.socialBanner],
	},
};

const Layout = ({
	children,
	noSkin,
	bg,
	containerCls,
	bgImgUrl,
	animationIn,
	animationOut,
}) => {
	useEffect(() => {
		return () => {
			dotResize();
			setTimeout(createSkillsDot, 1000);
		};
	}, []);

	return (
		<Fragment>
			<VideoPopup />
			<ImageView />
			<ImageGallery />
			<ContentModal />
			<div className={`page ${!noSkin ? "new-skin" : ""}`}>
				<Background bg={bg} img={bgImgUrl} />
				<div
					className={`${
						containerCls
							? containerCls
							: "container opened layout-rounded-style minimal-icons-style"
					}`}
					data-animation-in={animationIn ? animationIn : "fadeInLeft"}
					data-animation-out={animationOut ? animationOut : "fadeOutLeft"}
				>
					{children}
				</div>
				<ContentSidebar />
				<GithubCorner url="https://github.com/codelikeagirl29/vcard-react" />
			</div>
			<SpeedInsights />
		</Fragment>
	);
};
export default Layout;
