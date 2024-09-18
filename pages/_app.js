import 'font-awesome/css/font-awesome.min.css';
import Head from 'next/head';
import State from '../src/context/state';
import PreLoader from '../src/layout/PreLoader';
import '../styles/globals.css';
import '../public/css/basic.css';
import '../public/css/layout.css';
import '../public/css/blogs.css';
import '../public/css/ionicons.css';
import '../public/css/magnific-popup.css';
import '../public/css/animate.css';
import '../public/css/gradient.css';

import '../public/css/new-skin/new-skin.css';
import '../public/css/demos/demo-3-colors.css';
import '../public/css/new-skin/minimal-skin.css';

export default function MyApp({ Component, pageProps }) {
	return (
		<State>
			<Head>
				<title>vCard / Resume / CV Template</title>
				<link rel='shortcut icon' href='images/favicons/favicon.ico' />
			</Head>
			<PreLoader />
			<Component {...pageProps} />
		</State>
	);
}
