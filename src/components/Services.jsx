import ServicesCard from "./ServicesCard";
import{TiHtml5,TiCss3} from "react-icons/ti"
import{SiJavascript,SiVercel,SiNetlify,SiPostman,SiTypescript,SiReact,SiRedux,SiTailwindcss,SiChakraui,SiExpress} from "react-icons/si"
import {DiNodejs,DiMongodb,DiNpm,DiGithubBadge} from "react-icons/di"
export default function Services() {
  return (
    <section id="services__section" className="services__section">
      <div className="services__section__header">
        <div className="home__section__sub__heading">What i can do for you</div>
        <div className="home__section__heading">Skills</div>
      </div>
      <div className="services__section__content">
        <ServicesCard
          title="Tech Skills"
          skills={[
            <TiHtml5/>,
            <TiCss3/>
            // <SiJavascript/>,
            // <SiTypescript/>,
            // <SiReact/>,
            // <SiRedux/>,
            // <SiTailwindcss/>,
            // <SiChakraui/>,
            // <DiNodejs/>,
            // <SiExpress/>,
            // <DiMongodb/>,
            // "NPM",
            // "Git",
            // "Postman",
          ]}
        />
        <ServicesCard
          title="Tools"
          skills={[
            <DiNpm/>,
            <DiGithubBadge/>,
            <SiPostman/>,
            <SiNetlify/>,
            <SiVercel/>
          ]}
        />
      </div>
    </section>
  );
}
