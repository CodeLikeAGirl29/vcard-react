import Isotope from "isotope-layout";
import { Fragment, useEffect, useRef, useState } from "react";

const RecentWorksDefault = () => {
	// Isotope
	const isotope = useRef();
	const [filterKey, setFilterKey] = useState("*");
	useEffect(() => {
		setTimeout(() => {
			isotope.current = new Isotope(".grid-items", {
				itemSelector: ".grid-item",
				//    layoutMode: "fitRows",
				percentPosition: true,
				masonry: {
					columnWidth: ".grid-item",
				},
				animationOptions: {
					duration: 750,
					easing: "linear",
					queue: false,
				},
			});
		}, 1000);
		//     return () => isotope.current.destroy();
	}, []);
	useEffect(() => {
		if (isotope.current) {
			filterKey === "*"
				? isotope.current.arrange({ filter: `*` })
				: isotope.current.arrange({ filter: `.${filterKey}` });
		}
	}, [filterKey]);
	const handleFilterKeyChange = (key) => () => {
		setFilterKey(key);
	};
	const activeBtn = (value) => (value === filterKey ? "active" : "");

	return (
		<Fragment>
			<div className="content works">
				{/* title */}
				<div className="title">Recent Projects</div>
				{/* filters */}
				<div className="filter-menu filter-button-group">
					<div
						className={`f_btn ${activeBtn("*")}`}
						onClick={handleFilterKeyChange("*")}
					>
						<label>
							<input type="radio" name="fl_radio" defaultValue="grid-item" />
							All
						</label>
					</div>
					<div
						className={`f_btn ${activeBtn("photo")}`}
						onClick={handleFilterKeyChange("photo")}
					>
						<label>
							<input type="radio" name="fl_radio" defaultValue="photo" />
							Image
						</label>
					</div>
					<div
						className={`f_btn ${activeBtn("frontend")}`}
						onClick={handleFilterKeyChange("frontend")}
					>
						<label>
							<input type="radio" name="fl_radio" defaultValue="frontend" />
							Frontend
						</label>
					</div>
					<div
						className={`f_btn ${activeBtn("design")}`}
						onClick={handleFilterKeyChange("design")}
					>
						<label>
							<input type="radio" name="fl_radio" defaultValue="design" />
							Design
						</label>
					</div>
					<div
						className={`f_btn ${activeBtn("branding")}`}
						onClick={handleFilterKeyChange("branding")}
					>
						<label>
							<input type="radio" name="fl_radio" defaultValue="branding" />
							Branding
						</label>
					</div>
					<div
						className={`f_btn ${activeBtn("content")}`}
						onClick={handleFilterKeyChange("content")}
					>
						<label>
							<input type="radio" name="fl_radio" defaultValue="content" />
							Content
						</label>
					</div>
				</div>
				{/* content */}
				<div className="row grid-items border-line-v">
					{/* work item photo */}
					<div className="col col-d-6 col-t-6 col-m-12 grid-item frontend border-line-h">
						<div className="box-item">
							<div className="image">
								<a href="images/works/work1.png" className="has-popup-image">
									<img src="images/works/work1.png" alt="" />
									<span className="info">
										<span className="ion ion-code" />
									</span>
								</a>
							</div>
							<div className="desc">
								<a
									href="images/works/work1.png"
									className="name has-popup-image"
								>
									Visit FL
								</a>
								<div className="category">frontend</div>
							</div>
						</div>
					</div>
					{/* work item video */}
					<div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
						<div className="box-item">
							<div className="image">
								<a
									href="https://unsplash-api-azure.vercel.app/"
									className="has-popup-image"
								>
									<img src="images/works/work2.png" alt="" />
									<span className="info">
										<span className="ion ion-paintbrush" />
									</span>
								</a>
							</div>
							<div className="desc">
								<a
									href="https://www.github.com/codelikeagirl29/unsplash-api"
									className="name has-popup-image"
								>
									Unsplash Image Search
								</a>
								<div className="category">design</div>
							</div>
						</div>
					</div>
					{/* work item music */}
					<div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
						<div className="box-item">
							<div className="image">
								<a
									href="https://my-gitprofile.vercel.app/"
									className="has-popup-image"
								>
									<img src="images/works/work8.png" alt="" />
									<span className="info">
										<span className="ion ion-paintbrush" />
									</span>
								</a>
							</div>
							<div className="desc">
								<a
									href="https://github.com/codelikeagirl29/gitprofile"
									className="name has-popup"
								>
									GitProfile
								</a>
								<div className="category">design</div>
							</div>
						</div>
					</div>
					{/* work item design */}
					<div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
						<div className="box-item">
							<div className="image">
								<a href="#popup-1" className="has-popup-media">
									<img src="images/works/work4.jpg" alt="" />
									<span className="info">
										<span className="ion ion-images" />
									</span>
								</a>
								<div id="popup-1" className="popup-box mfp-fade mfp-hide">
									<div className="content">
										<div className="image">
											<img src="images/works/work4.jpg" alt="" />
										</div>
										<div className="desc">
											<div className="post-box">
												<h1>Kitties in Space</h1>
												<div className="blog-detail">frontend</div>
												<div className="blog-content">
													<p>
														In the vast universe of web development, creating a
														site that combines the charm of kittens with the
														power of cutting-edge technologies is an exciting
														endeavor. Join us on a cosmic journey as we explore
														the creation of "Kitties in Space," a delightful
														website built with GraphQL, React, and Apollo.
													</p>
													<p>
														"Kitties in Space" is not your ordinary cat-themed
														website; it&apos;s an interactive space where feline
														friends embark on intergalactic adventures. To bring
														this celestial playground to life, we harnessed the
														power of GraphQL for efficient data querying, React
														for a seamless user interface, and Apollo Client to
														manage our application&apos;s state.
													</p>
													<blockquote>
														Where furballs meet stardust, and whiskers navigate
														the cosmos – welcome to &apos;Kitties in
														Space,&apos; where even the Milky Way can&apos;t
														resist a sprinkle of purrfection!
													</blockquote>
													<p>
														GraphQL serves as the backbone of our project,
														allowing us to retrieve and manipulate data with
														precision. By defining a schema that represents our
														kitty-centric universe, we effortlessly fetch only
														the data needed for each component, minimizing
														latency and optimizing performance. With GraphQL,
														our space kitties have a seamless communication
														channel, ensuring a smooth browsing experience for
														users.
													</p>
													<p>
														Enter React, the framework that brings our space
														kitties to life on the client side. Each component
														is carefully crafted to encapsulate the logic and
														appearance of a specific feature, fostering
														modularity and maintainability. The virtual DOM
														ensures efficient updates, providing a responsive
														and interactive experience for users exploring the
														cosmic adventures of our feline friends.
													</p>
													<p>
														Apollo Client, the state management library, acts as
														our spacecraft&apos;s control center, orchestrating
														data flow between our React components and the
														GraphQL server. With features like caching and local
														state management, Apollo ensures that our space
														kitties&apos; adventures are both smooth and
														engaging. It seamlessly integrates with React,
														enabling real-time updates and minimizing the
														complexities of data handling.
													</p>
													<ul className="list-style">
														<li>React</li>
														<li>GraphQL</li>
														<li>Fullstack</li>
													</ul>
													<p>
														"Kitties in Space" is more than just a website;
														it&apos;s a testament to the powerful synergy of
														GraphQL, React, and Apollo. The ease of data
														management, the responsiveness of the user
														interface, and the real-time updates make this
														project a stellar example of modern web development.
													</p>
												</div>
												<a
													href="https://catstronaut-bylindseyk.netlify.app/"
													className="button"
												>
													<span className="text">View Project</span>
													<span className="arrow" />
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="desc">
								<a href="#popup-1" className="name has-popup-media">
									Kitties in Space
								</a>
								<div className="category">content</div>
							</div>
						</div>
					</div>
					{/* work item photo */}
					<div className="col col-d-6 col-t-6 col-m-12 grid-item frontend border-line-h">
						<div className="box-item">
							<div className="image">
								<a href="#gallery-1" className="has-popup-gallery img-gallery">
									<img src="images/works/work6.png" alt="" />
									<span className="info">
										<span className="ion ion-images" />
									</span>
								</a>
								<div id="gallery-1" className="mfp-hide">
									<a href="images/works/work5.png" />
									<a href="images/works/work1.png" />
									<a href="images/works/work6.png" />
								</div>
							</div>
							<div className="desc">
								<a href="#" className="name has-popup-image">
									Profile Concept
								</a>
								<div className="category">frontend</div>
							</div>
						</div>
					</div>
					{/* work item music */}
					<div className="col col-d-6 col-t-6 col-m-12 grid-item frontend border-line-h">
						<div className="box-item">
							<div className="image">
								<a
									href="https://github.com/CodeLikeAGirl29/dictionarium"
									className="has-popup-image"
								>
									<img src="images/works/work7.png" alt="" />
									<span className="info">
										<span className="ion ion-images" />
									</span>
								</a>
							</div>
							<div className="desc">
								<a
									href="http://dictionarium.vercel.app/"
									className="name has-popup"
								>
									Dictionarium
									<div className="category">frontend</div>
								</a>
							</div>
						</div>
					</div>
					{/* work item video */}
					<div className="col col-d-6 col-t-6 col-m-12 grid-item video border-line-h">
						<div className="box-item">
							<div className="image">
								<a
									href="https://codelikeagirl29.github.io/my-blog/"
									className="has-popup-video"
								>
									<img src="images/works/work7.png" alt="" />
									<span className="info">
										<span className="ion ion-videocamera" />
									</span>
								</a>
							</div>
							<div className="desc">
								<a
									href="https://www.youtube.com/embed/mkjwxmcdb0E"
									className="name has-popup-video"
								>
									Infinity Logo
								</a>
								<div className="category">Video</div>
							</div>
						</div>
					</div>
					{/* work item design */}
					<div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
						<div className="box-item">
							<div className="image">
								<a href="#popup-2" className="has-popup-media">
									<img src="images/works/work8.jpg" alt="" />
									<span className="info">
										<span className="ion ion-images" />
									</span>
								</a>
								<div id="popup-2" className="popup-box mfp-fade mfp-hide">
									<div className="content">
										<div className="image">
											<img src="images/works/work8.jpg" alt="" />
										</div>
										<div className="desc">
											<div className="post-box">
												<h1>Business Card Design</h1>
												<div className="blog-detail">Design</div>
												<div className="blog-content">
													<p>
														So striking at of to welcomed resolved. Northward by
														described up household therefore attention.
														Excellence decisively nay man yet impression for
														contrasted remarkably.
													</p>
													<p>
														Forfeited you engrossed but gay sometimes explained.
														Another as studied it to evident. Merry sense given
														he be arise. Conduct at an replied removal an
														amongst. Remaining determine few her two cordially
														admitting old.
													</p>
													<blockquote>
														Vestibulum ante ipsum primis in faucibus orci luctus
														et ultrices posuere cubilia Curae; Pellentesque
														suscipit.
													</blockquote>
													<p>
														Tiled say decay spoil now walls meant house. My mr
														interest thoughts screened of outweigh removing.
														Evening society musical besides inhabit ye my. Lose
														hill well up will he over on. Increasing sufficient
														everything men him admiration unpleasing sex.
													</p>
													<ul className="list-style">
														<li>Greatest properly off ham exercise all.</li>
														<li>
															Unsatiable invitation its possession nor off.
														</li>
														<li>
															All difficulty estimating unreserved increasing
															the solicitude.
														</li>
													</ul>
													<p>
														Unpleasant astonished an diminution up partiality.
														Noisy an their of meant. Death means up civil do an
														offer wound of.
													</p>
												</div>
												<a href="#" className="button">
													<span className="text">View Project</span>
													<span className="arrow" />
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="desc">
								<a href="#popup-2" className="name has-popup-media">
									Business Card Design
								</a>
								<div className="category">Content</div>
							</div>
						</div>
					</div>
					<div className="clear" />
				</div>
			</div>
		</Fragment>
	);
};
export default RecentWorksDefault;
