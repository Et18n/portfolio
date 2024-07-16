import "./page.css";
import ProjectCard from "../components/ProjectCard";
const project_data = [
  {
    id: 1,
    title: "Business Stats Preview",
    imgUrl: "/images/projects/businessinsights.png",
    description: "Something to do with Business",
    tag: ["All", "Design"],
    gitUrl: "https://github.com/Et18n/stats-preview",
    prewUrl: "https://elegant-fenglisu-1a3ce5.netlify.app",
  },
  {
    id: 2,
    title: "NFT card Component",
    description: "NFT card component design",
    imgUrl: "/images/projects/NFT.png",
    gitUrl: "https://github.com/Et18n/nft-card",
    prewUrl: "https://nft-card-lemon-six.vercel.app/",
    tag: ["All", "Design"],
  },
  {
    id: 3,
    title: "Newsletter Sign-Up Form",
    description: "Send an email for us to send newsletters!!",
    imgUrl: "/images/projects/emailthingy.png",
    gitUrl:
      "https://github.com/Et18n/newsletter-sign-up-with-success-message-main",
    prewUrl:
      "https://newsletter-sign-up-with-success-message-main-taupe.vercel.app/",
    tag: ["All", "Contact"],
  },
  {
    id: 4,
    title: "Article Preview",
    description: "Descriptions of reviewed items",
    imgUrl: "/images/projects/furnituresocials.png",
    gitUrl: "https://github.com/Et18n/article-preview-component-master",
    prewUrl: "https://article-preview-component-master-topaz-ten.vercel.app/",
    tag: ["All", "Shop"],
  },
  {
    id: 5,
    title: "Order Summary",
    description: "Summary of your order",
    imgUrl: "images/projects/ordersummary.png",
    gitUrl: "https://github.com/Et18n/order-summary-component-main",
    prewUrl: "https://sensational-mandazi-c6142a.netlify.app/",
    tag: ["All", "Shop"],
  },
  {
    id: 6,
    title: "Product Preview",
    description: "Perfume Shoppe",
    imgUrl: "images/projects/perfumeshop.png",
    gitUrl: "https://github.com/Et18n/product-component",
    prewUrl: "https://superlative-zuccutto-7b2f65.netlify.app/",
    tag: ["All", "Shop"],
  },
  {
    id: 7,
    title: "Social Proof Section",
    description: "Customer Reviews and Ratings",
    imgUrl: "images/projects/6.png",
    gitUrl: "https://github.com/Et18n/social-proof-section-master",
    prewUrl: "https://social-proof-section-master-ruby-theta.vercel.app/",
    tag: ["All", "Shop"],
  },
  {
    id: 8,
    title: "Description ",
    description: "Description and Learn more section",
    imgUrl: "images/projects/7.png",
    gitUrl: "https://github.com/Et18n/3-column-preview-card-component-main",
    prewUrl: "https://clever-caramel-3bd8b5.netlify.app/",
    tag: ["All", "Shop"],
  },
  
];

export default function Projects() {
  return (
    <>
      <h1 className=" text-white  text-3xl text-center uppercase mt-20 ">
        Projects
      </h1>
      <div className=" grid md:grid-cols-2  text-white mx-10 place-items-center">
        {project_data.map((p) => (
          <ProjectCard
            key={p.id}
            title={p.title}
            description={p.description}
            imgUrl={p.imgUrl}
            gitUrl={p.gitUrl}
            prewUrl={p.prewUrl}
          />
        ))}
      </div>
    </>
  );
}
