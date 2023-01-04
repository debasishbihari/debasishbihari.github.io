import lately from "../assets/lately.png";
import unbounce from "../assets/unbounce.png";
import WorkCard from "./WorkCard";

export default function Work() {
  return (
    <section id="work__section" className="work__section">
      <div className="work__section__header">
        <div className="home__section__sub__heading">
          Some Things I’ve Built
        </div>
        <div className="home__section__heading">Projects</div>
      </div>
      <WorkCard
        tech={["HTML", "CSS", "JavaScript"]}
        heading={["Lately"]}
        banner={lately}
        info="Inspired from Lately.ai, It's an AI website which create your social
        media content and manage your social media marketing and
        social selling programs."
        siteLink="https://dulcet-marigold-6dca17.netlify.app/"
        githubLink="https://github.com/capitalN/lately.ai"
      />
      <WorkCard
        right
        tech={["HTML", "CSS", "JavaScript"]}
        heading={["Unbounce"]}
        banner={unbounce}
        info="Inspired from unbounce.com, It's a website building site, which
        you can use for making a website or website template for you."
        siteLink="https://unbouncecloneproject.netlify.app/"
        githubLink="https://github.com/debasishbihari/gray-mice-8530"
      />
      
    </section>
  );
}
