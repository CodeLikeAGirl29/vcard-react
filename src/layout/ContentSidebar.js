import { Fragment, useContext } from "react";
import Context from "../context/context";

const ContentSidebar = () => {
	const { sidebar, changeSideBar } = useContext(Context);

	return (
		<Fragment>
			<div
				className="s_overlay"
				style={{ display: sidebar ? "block" : "none" }}
			/>
			<div className={`content-sidebar ${sidebar ? "active" : ""}`}>
				<div className="sidebar-wrap search-form">
					<aside id="secondary" className="widget-area">
						<div id="search-2" className="widget widget_search">
							<label>
								<span className="screen-reader-text">Search for:</span>
								<input
									type="search"
									className="search-field"
									placeholder="Search …"
									defaultValue=""
									name="s"
								/>
							</label>
							<span className="focus-border">
								{" "}
								<i></i>
							</span>
							<input
								type="submit"
								className="search-submit"
								defaultValue="Search"
							/>
						</div>
						<section className="widget widget_recent_entries">
							<h2 className="widget-title">
								<span className="widget-title-span">
									<span className="first-word">Recent</span> Posts
								</span>
							</h2>
							<ul>
								<li>
									<a href="#">Gatsby.js is my Favorite Framework!</a>
								</li>
								<li>
									<a href="#">Frontend Web Development</a>
								</li>
								<li>
									<a href="#">Being Productive</a>
								</li>
								<li>
									<a href="#">The Art of CSS</a>
								</li>
								<li>
									<a href="#">Bash Commands</a>
								</li>
							</ul>
						</section>

						<section className="widget widget_archive">
							<h2 className="widget-title">
								<span className="widget-title-span">
									<span className="first-letter">Archives</span>
								</span>
							</h2>
							<ul>
								<li>
									<a href="#">November 2018</a>
								</li>
							</ul>
						</section>
						<section className="widget widget_categories">
							<h2 className="widget-title">
								<span className="widget-title-span">
									<span className="first-letter">Categories</span>
								</span>
							</h2>
							<ul>
								<li className="cat-item cat-item-2">
									<a href="#">Design</a>
								</li>
								<li className="cat-item cat-item-3">
									<a href="#">Frontend</a>
								</li>
							</ul>
						</section>
						<section className="widget widget_meta">
							<h2 className="widget-title">
								<span className="widget-title-span">
									<span className="first-letter">Follow Me:</span>
								</span>
							</h2>
							<ul>
								<li>
									<a href="https://lindseyk.dev">Personal Site</a>
								</li>
								<li>
									<a href="https://lindseyk.hashnode.dev/">Hashnode</a>
								</li>
								<li>
									<a href="https://linkedin.com/in/lindsey-howard">LinkedIn</a>
								</li>
								<li>
									<a href="http://twitter.com/dev_lindseyk">X (twitter)</a>
								</li>
							</ul>
						</section>
					</aside>
				</div>
				<span className="close" onClick={() => changeSideBar(false)} />
			</div>
		</Fragment>
	);
};
export default ContentSidebar;
