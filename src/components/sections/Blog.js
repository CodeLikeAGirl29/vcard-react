import { Fragment, useContext } from "react";
import Context from "../../context/context";

const BlogSection = () => {
	const { changeNav } = useContext(Context);
	return (
		<Fragment>
			<div className="content blog">
				{/* title */}
				<div className="title">
					<span>Blog</span>
				</div>
				{/* content */}
				<div className="row border-line-v">
					{/* blog item */}
					<div className="col col-d-6 col-t-6 col-m-12">
						<div className="box-item">
							<div className="image">
								<a href="#" onClick={() => changeNav("blog-post")}>
									<img
										src="images/blog/blog_post1.png"
										alt="By spite about do of allow"
									/>
									<span className="info">
										<span className="ion ion-document-text" />
									</span>
								</a>
							</div>
							<div className="desc">
								<a href="#" onClick={() => changeNav("blog-post")}>
									<span className="date">April 28, 2020</span>
								</a>
								<a
									href="#"
									onClick={() => changeNav("blog-post")}
									className="name"
								>
									<h3 className="text-rose-400"> Using Gatsby.js</h3>
								</a>
								<div className="text">
									<p className="text-zinc-800">
										Ex audire suavitate has, ei quodsi tacimates sapientem sed,
										pri zril ubique ut. Te cule tation munere noluisse. Enim
										torquatos…
									</p>
								</div>
							</div>
						</div>
					</div>
					{/* blog item */}
					<div className="col col-d-6 col-t-6 col-m-12">
						<div className="box-item">
							<div className="image">
								<a href="#" onClick={() => changeNav("blog-post")}>
									<img
										src="images/blog/blog2.png"
										alt="By spite about do of allow"
									/>
									<span className="info">
										<span className="ion ion-document-text" />
									</span>
								</a>
							</div>
							<div className="desc">
								<a href="#" onClick={() => changeNav("blog-post")}>
									<span className="date">April 28, 2022</span>
								</a>
								<a
									href="#"
									onClick={() => changeNav("blog-post")}
									className="name"
								>
									<h3 className="text-rose-400">The Art of Productivity</h3>
								</a>
								<div className="text">
									<p className="text-zinc-800">
										In today&apos;s fast-paced world, the ability to stay
										productive is a key factor in achieving personal and
										professional success..
									</p>
								</div>
							</div>
						</div>
					</div>
					{/* blog item */}
					<div className="col col-d-6 col-t-6 col-m-12">
						<div className="box-item">
							<div className="image">
								<a href="#" onClick={() => changeNav("blog-post")}>
									<img src="images/blog/blog3.png" alt="styling with CSS" />
									<span className="info">
										<span className="ion ion-document-text" />
									</span>
								</a>
							</div>
							<div className="desc">
								<a href="#" onClick={() => changeNav("blog-post")}>
									<span className="date">Dec 04, 2022</span>
								</a>
								<a
									href="#"
									onClick={() => changeNav("blog-post")}
									className="name"
								>
									<h3 className="text-rose-400">Styling with CSS</h3>
								</a>
								<div className="text">
									<p className="text-zinc-800">
										We&apos;ve compiled a massive list of tips, tricks,
										techniques, & the occasional dirty hack to help you build
										the design you want.
									</p>
								</div>
							</div>
						</div>
					</div>
					{/* blog item */}
					<div className="col col-d-6 col-t-6 col-m-12">
						<div className="box-item">
							<div className="image">
								<a href="#" onClick={() => changeNav("blog-post")}>
									<img
										src="images/blog/blog1.jpg"
										alt="By spite about do of allow"
									/>
									<span className="info">
										<span className="ion ion-document-text" />
									</span>
								</a>
							</div>
							<div className="desc">
								<a href="#" onClick={() => changeNav("blog-post")}>
									<span className="date">April 28, 2020</span>
								</a>
								<a
									href="#"
									onClick={() => changeNav("blog-post")}
									className="name"
								>
									<h3 className="text-rose-400"> By spite about do of allow</h3>
								</a>
								<div className="text">
									<p className="text-zinc-800">
										Ex audire suavitate has, ei quodsi tacimates sapientem sed,
										pri zril ubique ut. Te cule tation munere noluisse. Enim
										torquatos…
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="clear" />
				</div>
				<div className="pager">
					<nav className="navigation pagination">
						<div className="nav-links">
							<span className="page-numbers current">1</span>
							<a className="page-numbers" href="#">
								2
							</a>
							<a className="next page-numbers" href="#">
								Next
							</a>
						</div>
					</nav>
				</div>
			</div>
		</Fragment>
	);
};
export default BlogSection;

export const BlogClassic = () => {
	const { changeNav } = useContext(Context);
	return (
		<Fragment>
			<div className="content blog">
				{/* title */}
				<div className="title">Latest Posts</div>
				{/* content */}
				<div className="row border-line-v">
					{/* blog item */}
					<div className="col col-d-12 col-t-12 col-m-12 border-line-h">
						<div className="box-item">
							<div className="image">
								<a href="#" onClick={() => changeNav("blog-post")}>
									<img src="images/blog/blog1.jpg" alt="" />
									<span className="info">
										<span className="ion ion-document-text" />
									</span>
									<span className="date">
										<strong>20</strong>Jun
									</span>
								</a>
							</div>
							<div className="desc">
								<a
									href="#"
									onClick={() => changeNav("blog-post")}
									className="name"
								>
									By spite about do of do allow blush
								</a>
								<div className="category">Design</div>
							</div>
						</div>
					</div>
					{/* blog item */}
					<div className="col col-d-12 col-t-12 col-m-12 border-line-h">
						<div className="box-item">
							<div className="image">
								<a href="#" onClick={() => changeNav("blog-post")}>
									<img src="images/blog/blog2.jpg" alt="" />
									<span className="info">
										<span className="ion ion-document-text" />
									</span>
									<span className="date">
										<strong>19</strong>Jun
									</span>
								</a>
							</div>
							<div className="desc">
								<a
									href="#"
									onClick={() => changeNav("blog-post")}
									className="name"
								>
									Two Before Arrow Not Relied
								</a>
								<div className="category">Coding</div>
							</div>
						</div>
					</div>
					{/* blog item */}
					<div className="col col-d-12 col-t-12 col-m-12 border-line-h">
						<div className="box-item">
							<div className="image">
								<a href="#" onClick={() => changeNav("blog-post")}>
									<img src="images/blog/blog3.jpg" alt="" />
									<span className="info">
										<span className="ion ion-document-text" />
									</span>
									<span className="date">
										<strong>20</strong>Jun
									</span>
								</a>
							</div>
							<div className="desc">
								<a
									href="#"
									onClick={() => changeNav("blog-post")}
									className="name"
								>
									By spite about do of do allow blush
								</a>
								<div className="category">Travel</div>
							</div>
						</div>
					</div>
					<div className="clear" />
				</div>
			</div>
		</Fragment>
	);
};
