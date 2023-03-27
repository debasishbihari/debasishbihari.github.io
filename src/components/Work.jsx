import lately from "../assets/lately.png";
import unbounce from "../assets/unbounce.png";
import nearbuy from "../assets/nearbuy.png";
import silktouch from "../assets/silktouch.png"
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
        tech={["React","React-Hooks","Redux-Toolkit","Chakra-UI","NodeJs","ExpressJs","MongoDB"]}
        heading={["SilkTouch"]}
        banner={silktouch}
        info="Silk Touch is web store which sells cosmetics and skin care products.Shop trusted skin care, makeup and beauty products, including SkinCeuticals, Obagi, Sunday Riley and Oribe."
        siteLink="https://silktouch.netlify.app/"
        githubLink="https://github.com/abha2510/SILKTOUCH"
      />
      <WorkCard
        tech={["HTML", "CSS", "JavaScript","React","React-Hooks","Redux-Toolkit","Chakra-UI"]}
        heading={["Nearbuy"]}
        banner={nearbuy}
        info="nearbuy helps you discover the best things to do, eat and buy – wherever you are! Make every day awesome with nearbuy. Dine at the finest restaurants, relax at the best spas, pamper yourself with exciting wellness and shopping offers or just explore your city intimately… you will always find a lot more to do with nearbuy."
        siteLink="https://beautiful-kitten-367e3e.netlify.app/"
        githubLink="https://github.com/debasishbihari/lame-crayon-5872"
      />
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
