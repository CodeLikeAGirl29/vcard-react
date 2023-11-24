import "font-awesome/css/font-awesome.min.css";
import Head from "next/head";
import State from "../src/context/state";
import PreLoader from "../src/layout/PreLoader";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
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
				<link rel="stylesheet" href="css/basic.css" />
				<link rel="stylesheet" href="css/layout.css" />
				<link rel="stylesheet" href="css/blogs.css" />
				<link rel="stylesheet" href="css/ionicons.css" />
				<link rel="stylesheet" href="css/magnific-popup.css" />
				<link rel="stylesheet" href="css/animate.css" />
				<link rel="stylesheet" href="css/gradient.css" />

				<title>vCard / Resume / CV Template</title>
				<link rel="shortcut icon" href="images/favicons/favicon.ico" />
			</Head>
			<PreLoader />
			<Component {...pageProps} />
		</State>
	);
}

export default MyApp;
