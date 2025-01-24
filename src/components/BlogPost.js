import ActiveSection from "../activeSection";
import Image from "next/image";

const BlogPostNew = () => {
  return (
    <div
      className={`blog blog-post ${ActiveSection("blog-post")}`}
      id="blog-card"
    >
      <div className="card-wrap">
        {/*
        Blog Single
      */}
        <div className="content blog-single">
          {/* title */}
          <div className="title">Blog Post</div>
          {/* content */}
          <div className="row border-line-v">
            <div className="col col-m-12 col-t-12 col-d-12">
              <div className="post-box">
                {/* blog detail */}
                <h1 className="h-title text-xl">Staying Productive</h1>
                <div className="blog-detail">
                  <span className="date">Dec 02, 2022</span>
                  <span className="cat-links">
                    <a href="#">Advice</a>, <a href="#">Tips</a>
                  </span>
                  <span className="byline">
                    {" "}
                    by{" "}
                    <span className="author">
                      <a href="#">lindsey</a>
                    </span>
                  </span>
                </div>
                {/* blog image */}
                <div className="blog-image">
                  <Image
                    src="/images/blog/blog1.png"
                    alt="blog image 1"
                    width={800}
                    height={375}
                    layout="responsive"
                  />
                </div>
                {/* blog content */}
                <div className="blog-content">
                  <p className="mb-4">
                    Some people hold themselves accountable by logging work on
                    productivity apps, while others turn to blogs and books
                    inspirational productivity quotes. Regardless of how you{" "}
                    <span className="text-gray-800">motivate yourself</span> to
                    get things done in the workplace, now and then we all find
                    ourselves searching for productivity tips to keep us moving
                    forward. And if you don&apos;t think this applies to you,
                    consider this:{" "}
                    <span className="text-red-500">
                      research suggests that in an eight-hour workday, the
                      average worker is only productive for two hours and 53
                      minutes.
                    </span>{" "}
                    That leaves a lot of room for improvement.
                  </p>
                  <p className="mb-4">
                    Before you do anything else, take a few moments at the start
                    of each day to organize and declutter your workspace. A
                    clutter-free environment helps you think more clearly and
                    produce better results, said Kristoph Matthews, head of
                    engineering at NewtonX and founder of on-demand storage
                    company Boxbee. By{" "}
                    <a href="https://www.businessnewsdaily.com/7456-workspace-design-productivity.html">
                      cleaning up and organizing your space
                    </a>
                    , you can greatly{" "}
                    <span className="text-gray-800">increase</span> your
                    productivity and limit the time you spend searching for
                    items.
                  </p>
                  <blockquote>
                    Understand how your brain works & when you are most
                    productive. For me, I&apos;ve gotten rid of lunch meetings
                    to keep my productive time going as long as I can.
                  </blockquote>
                  <p className="mb-4">
                    Color can have a major effect on your mood and productivity
                    throughout the day, said Jenny Gauld, interior designer for
                    office furniture and accessory retailer Turnstone. Blue can
                    impart a calming feeling and help you focus, while red may
                    be great for work requiring accuracy and attention to
                    detail. Plants can also help people focus: A study by the{" "}
                    <a href="https://journals.ashs.org/horttech/view/journals/horttech/30/1/article-p55.xml">
                      American Society for Horticultural Science
                    </a>{" "}
                    found that workers who were exposed to plants in their
                    workspace reported feeling less stressed and more
                    productive.
                  </p>
                  <p className="mb-4">
                    In addition to adding{" "}
                    <span className="font-bold text-gray-800">some color</span>{" "}
                    and plants to your workspace, decorating your desk or
                    cubicle with a few personal knickknacks can help you feel
                    more relaxed, which can boost your productivity. Gauld
                    suggested adding meaningful career memorabilia, such as
                    diplomas, awards, and other decorative items that help you
                    feel appreciated and will motivate you.
                  </p>

                  <p className="mb-4">
                    Everyone has at least one task on the to-do list that keeps
                    getting pushed back because the thought of doing it seems
                    awful. That task is actually the one you should complete
                    first, according to Matthews. Instead of waiting until the
                    last minute to finish it, get it off your plate as soon as
                    possible. Your other tasks will seem less daunting by
                    comparison, and you&apos;ll stop stressing about that one
                    task all day, making you more productive overall.
                  </p>

                  <p className="mb-4">
                    People vary in terms of when they are most productive. For
                    example, are you a morning person or a night owl? It&apos;s
                    important to identify which hours of the day you feel most
                    alert and attentive, and then dedicate those hours to your
                    most important tasks. This is especially useful if you work
                    remotely and can determine your schedule.
                  </p>

                  <p className="mb-4">
                    If you can&apos;t create a schedule around your most
                    productive work time, consider organizing your priorities in
                    your current schedule based on which hours of your workday
                    you feel most alert. Your productivity peaks are often in 90
                    - to 120-minute intervals.
                  </p>
                  <p className="mb-4">
                    It can be hard to improve your productivity. These easy tips
                    can help you be more productive without a herculean effort.
                  </p>
                  <ul className="list-style">
                    <li>
                      Create a workspace that is clean, comfortable, decorative
                      and free from distractions.
                    </li>
                    <li>
                      It can be helpful to take short breaks, move around,
                      switch locations, put on some music, meditate and eat
                      lunch with your co-workers.
                    </li>
                    <li>
                      Create daily goals and to-do lists to prioritize and
                      delegate your tasks efficiently.
                    </li>
                  </ul>
                  <p className="mb-4">
                    Whether it&apos;s taking a walk, going to your favorite
                    coffee shop, reading a magazine or visiting with a
                    colleague, taking short breaks that are unrelated to your
                    work can make a huge difference in your performance. Your
                    productivity diminishes the longer you go without a break.
                    Kobel explained that this is why it&apos;s recommended that
                    people don&apos;t work more than eight to 10 hours per day.
                    At a certain point, she said, your body and mind simply
                    cannot produce anymore.
                  </p>

                  <p className="mb-4">
                    Exercise isn&apos;t just good for your body; it can also
                    positively impact your work performance. Physical exercise
                    has been shown to affect mental health and focus, said Sam
                    McIntire, founder of{" "}
                    <a href="https://www.deskbright.com/">Deskbright</a>, an
                    online learning platform dedicated to helping entrepreneurs
                    and employees. A great way to feel sharper and more
                    productive? Try going for a run in the morning or starting
                    your day with a workout, McIntire suggested. It doesn&apos;t
                    hurt to sneak in some exercise on your breaks either.
                  </p>

                  <p className="mb-4">
                    It&apos;s not always easy to keep track of everything you
                    need to do, so start each morning by writing down your goals
                    for the day. When your focus is broken or you find yourself
                    procrastinating, McIntire said, you can use the list to keep
                    you on track, said McIntire. He suggested writing your list
                    down on a Post-it or something that&apos;s visible from your
                    desk, then returning to it when you need a reminder of what
                    you should be working on.
                  </p>

                  <p className="mb-4">
                    Doing more than one thing at a time may seem like the best
                    way to get all of your tasks done, but it can hurt your
                    productivity more than it helps. Multitasking simply
                    doesn&apos;t work, and when you do it, you end up wasting
                    time, Kobel said.
                  </p>
                </div>
                <div className="post-text-bottom">
                  <div className="social-share">
                    <span>Share</span>
                    <a
                      className="share-btn share-btn-facebook"
                      title="Share on Facebook"
                    >
                      <i className="ion ion-social-facebook" />
                    </a>
                    <a
                      className="share-btn share-btn-twitter"
                      title="Share on Twitter"
                    >
                      <i className="ion ion-social-twitter" />
                    </a>
                    <a
                      className="share-btn share-btn-linkedin"
                      title="Share on Linkedin"
                    >
                      <i className="ion ion-social-linkedin" />
                    </a>
                    <a
                      className="share-btn share-btn-reddit"
                      title="Share on Reddit"
                    >
                      <i className="ion ion-social-reddit" />
                    </a>
                    <a
                      className="share-btn share-btn-pinterest"
                      title="Share on Pinterest"
                    >
                      <i className="ion ion-social-pinterest" />
                    </a>
                  </div>
                  <span className="tags-links">
                    Tags: <a href="#">advice</a>
                    <a href="#">productivity</a>
                    <a href="#">tips</a>
                    <a href="#">balance</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <nav className="navigation post-navigation">
            <div className="nav-links">
              <div className="nav-previous">
                <a href="#">
                  <span className="post-nav-next post-nav-text">Prev</span>
                </a>
              </div>
              <div className="nav-next">
                <a href="#">
                  <span className="post-nav-prev post-nav-text">Next</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default BlogPostNew;

export const BlogPostClassic = () => {
  return (
    <div className="card-inner blog blog-post animated" id="blog-card">
      <div className="card-wrap">
        {/*
						Blog Single
					*/}
        <div className="content blog-single">
          {/* title */}
          <div className="title">Blog Post</div>
          {/* content */}
          <div className="row border-line-v">
            <div className="col col-m-12 col-t-12 col-d-12">
              <div className="post-box">
                {/* blog detail */}
                <h1>Procuring Education on Consulted Assurance in Do</h1>
                <div className="blog-detail">Posted 12 June 2016</div>
                {/* blog image */}
                <div className="blog-image">
                  <Image
                    src="/images/blog/blog1.jpg"
                    alt="blog img"
                    width={800}
                    height={375}
                    layout="responsive"
                  />
                </div>
                {/* blog content */}
                <div className="blog-content">
                  <p className="text-slate-400">
                    So striking at of to welcomed resolved. Northward by
                    described up household therefore attention. Excellence
                    decisively nay man yet impression for contrasted remarkably.
                  </p>
                  <p>
                    Forfeited you engrossed but gay sometimes explained. Another
                    as studied it to evident. Merry sense given he be arise.
                    Conduct at an replied removal an amongst. Remaining
                    determine few her two cordially admitting old.
                  </p>
                  <blockquote>
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Pellentesque suscipit.
                  </blockquote>
                  <p>
                    Tiled say decay spoil now walls meant house. My mr interest
                    thoughts screened of outweigh removing. Evening society
                    musical besides inhabit ye my. Lose hill well up will he
                    over on. Increasing sufficient everything men him admiration
                    unpleasing sex.
                  </p>
                  <ul className="list-style">
                    <li>Greatest properly off ham exercise all.</li>
                    <li>Unsatiable invitation its possession nor off.</li>
                    <li>
                      All difficulty estimating unreserved increasing the
                      solicitude.
                    </li>
                  </ul>
                  <p>
                    Unpleasant astonished an diminution up partiality. Noisy an
                    their of meant. Death means up civil do an offer wound of.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
