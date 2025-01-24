import ActiveSection from "../activeSection";
import Image from "next/image";
import BlogPostLayout from "./BlogPostLayout";

const BlogPostNew = () => {
  const content = [
    {
      type: "paragraph",
      text: `Some people hold themselves accountable by logging work on productivity apps, while others turn to blogs and books inspirational productivity quotes. Regardless of how you motivate yourself to get things done in the workplace, now and then we all find ourselves searching for productivity tips to keep us moving forward. And if you don't think this applies to you, consider this: research suggests that in an eight-hour workday, the average worker is only productive for two hours and 53 minutes. That leaves a lot of room for improvement.`,
      className: "mb-4",
    },
    {
      type: "paragraph",
      text: `Before you do anything else, take a few moments at the start of each day to organize and declutter your workspace. A clutter-free environment helps you think more clearly and produce better results, said Kristoph Matthews, head of engineering at NewtonX and founder of on-demand storage company Boxbee. By cleaning up and organizing your space, you can greatly increase your productivity and limit the time you spend searching for items.`,
      className: "mb-4",
    },
    {
      type: "blockquote",
      text: `Understand how your brain works & when you are most productive. For me, I've gotten rid of lunch meetings to keep my productive time going as long as I can.`,
    },
    {
      type: "paragraph",
      text: `Color can have a major effect on your mood and productivity throughout the day, said Jenny Gauld, interior designer for office furniture and accessory retailer Turnstone. Blue can impart a calming feeling and help you focus, while red may be great for work requiring accuracy and attention to detail. Plants can also help people focus: A study by the American Society for Horticultural Science found that workers who were exposed to plants in their workspace reported feeling less stressed and more productive.`,
      className: "mb-4",
    },
    {
      type: "paragraph",
      text: `In addition to adding some color and plants to your workspace, decorating your desk or cubicle with a few personal knickknacks can help you feel more relaxed, which can boost your productivity. Gauld suggested adding meaningful career memorabilia, such as diplomas, awards, and other decorative items that help you feel appreciated and will motivate you.`,
      className: "mb-4",
    },
    {
      type: "list",
      items: [
        "Create a workspace that is clean, comfortable, decorative and free from distractions.",
        "It can be helpful to take short breaks, move around, switch locations, put on some music, meditate and eat lunch with your co-workers.",
        "Create daily goals and to-do lists to prioritize and delegate your tasks efficiently.",
      ],
    },
    {
      type: "paragraph",
      text: `Whether it's taking a walk, going to your favorite coffee shop, reading a magazine or visiting with a colleague, taking short breaks that are unrelated to your work can make a huge difference in your performance. Your productivity diminishes the longer you go without a break. Kobel explained that this is why it's recommended that people don't work more than eight to 10 hours per day. At a certain point, your body and mind simply cannot produce anymore.`,
      className: "mb-4",
    },
    {
      type: "paragraph",
      text: `Exercise isn't just good for your body; it can also positively impact your work performance. Physical exercise has been shown to affect mental health and focus, said Sam McIntire, founder of Deskbright, an online learning platform dedicated to helping entrepreneurs and employees. A great way to feel sharper and more productive? Try going for a run in the morning or starting your day with a workout, McIntire suggested. It doesn't hurt to sneak in some exercise on your breaks either.`,
      className: "mb-4",
    },
    {
      type: "paragraph",
      text: `It's not always easy to keep track of everything you need to do, so start each morning by writing down your goals for the day. When your focus is broken or you find yourself procrastinating, McIntire said, you can use the list to keep you on track. He suggested writing your list down on a Post-it or something that's visible from your desk, then returning to it when you need a reminder of what you should be working on.`,
      className: "mb-4",
    },
    {
      type: "paragraph",
      text: `Doing more than one thing at a time may seem like the best way to get all of your tasks done, but it can hurt your productivity more than it helps. Multitasking simply doesn't work, and when you do it, you end up wasting time, Kobel said.`,
      className: "mb-4",
    },
  ];

  const tags = ["advice", "productivity", "tips", "balance"];

  const shareLinks = [
    {
      className: "share-btn-facebook",
      title: "Share on Facebook",
      iconClass: "ion ion-social-facebook",
    },
    {
      className: "share-btn-twitter",
      title: "Share on Twitter",
      iconClass: "ion ion-social-twitter",
    },
    {
      className: "share-btn-linkedin",
      title: "Share on LinkedIn",
      iconClass: "ion ion-social-linkedin",
    },
    {
      className: "share-btn-reddit",
      title: "Share on Reddit",
      iconClass: "ion ion-social-reddit",
    },
    {
      className: "share-btn-pinterest",
      title: "Share on Pinterest",
      iconClass: "ion ion-social-pinterest",
    },
  ];

  return (
    <div
      className={`blog blog-post ${ActiveSection("blog-post")}`}
      id="blog-card"
    >
      <div className="card-wrap">
        <BlogPostLayout
          title="Staying Productive"
          date="Dec 02, 2022"
          categories={["Advice", "Tips"]}
          author="Lindsey"
          imageSrc="/images/blog/blog1.png"
          content={content}
          tags={tags}
          shareLinks={shareLinks}
        />
      </div>
    </div>
  );
};

export default BlogPostNew;
