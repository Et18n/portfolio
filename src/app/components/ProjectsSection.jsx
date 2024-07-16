"use client";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
const CardData = [
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
];

export default function ProjectSection() {
  const [tag, setTag] = useState("all");
  const handlefilter = (id) => {
    setTag(id);
  };
  return (
    <>
      <h2 className="text-white text-center  font-bold text-3xl mt-[5rem]">
        Projects Section
      </h2>
      <div className="text-white flex flex-row space-x-5 justify-center mt-10 ">
        
      </div>

      <div className="md:grid md:grid-cols-2 place-items-center">
        {CardData.map((projects) => (
          <ProjectCard
            key={projects.id}
            title={projects.title}
            description={projects.description}
            imgUrl={projects.imgUrl}
            gitUrl={projects.gitUrl}
            prewUrl={projects.prewUrl}
            tag={projects.tag}
          />
        ))}
      </div>
    </>
  );
}
