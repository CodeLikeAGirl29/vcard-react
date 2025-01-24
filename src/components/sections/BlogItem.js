import Image from "next/image";

const BlogItem = ({
  imageSrc,
  title,
  date,
  description,
  category,
  changeNav,
}) => (
  <div className="col col-d-6 col-t-6 col-m-12">
    <div className="box-item">
      <div className="image">
        <a href="#" onClick={() => changeNav("blog-post")}>
          <Image src={imageSrc} alt={title} width={500} height={300} />
          <span className="info">
            <span className="ion ion-document-text" />
          </span>
        </a>
      </div>
      <div className="desc">
        <a href="#" onClick={() => changeNav("blog-post")} className="name">
          <span className="date">{date}</span>
          <h4 className="text-fuchsia-400 hover:text-rose-600 text-base">
            {title}
          </h4>
        </a>
        {description && (
          <div className="text">
            <p className="text-zinc-800 text-sm">{description}</p>
          </div>
        )}
        {category && <div className="category">{category}</div>}
      </div>
    </div>
  </div>
);

export default BlogItem;
