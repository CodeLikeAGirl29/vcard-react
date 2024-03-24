import "font-awesome/css/font-awesome.min.css";
import Head from "next/head";
import State from "../src/context/state";
import PreLoader from "../src/layout/PreLoader";
import "../styles/globals.css";
import "../public/css/basic.css";
import "../public/css/layout.css";
import "../public/css/blogs.css";
import "../public/css/ionicons.css";
import "../public/css/magnific-popup.css";
import "../public/css/animate.css";
import "../public/css/gradient.css";

import "../public/css/new-skin/new-skin.css";
import "../public/css/demos/demo-3-colors.css";
import "../public/css/new-skin/minimal-skin.css";

export default function MyApp({ Component, pageProps }) {
	return (
		<State>
			<Head>
				<link
					href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=optional"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Eczar&display=swap"
					rel="stylesheet"
				/>

				<title>vCard / Resume / CV Template</title>
				<link rel="shortcut icon" href="images/favicons/favicon.ico" />
			</Head>
			<PreLoader />
			<Component {...pageProps} />
		</State>
	);
}
