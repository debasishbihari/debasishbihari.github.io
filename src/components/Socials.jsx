import { Facebook, GitHub, Instagram, Linkedin, Mail } from "react-feather";

export default function Socials() {
  return (
    <>
      <div className="social__links">
        <div className="social__links__entries">
          <a
            href="https://github.com/debasishbihari"
            target="_blank"
            rel="noreferrer"
            title="github"
            className="social__links__entries__link"
          >
            <GitHub size={20} color="currentColor" />
          </a>
          <a
            href="https://www.linkedin.com/in/debasish-bihari-b49028145/"
            title="linkedin"
            target="_blank"
            rel="noreferrer"
            className="social__links__entries__link"
          >
            <Linkedin size={20} color="currentColor" />
          </a>
          <a
            href="mailto:debasisbihari287@gmail.com"
            title="mail"
            target="_blank"
            rel="noreferrer"
            className="social__links__entries__link"
          >
            <Mail size={20} color="currentColor" />
          </a>
          <a
            href="https://www.facebook.com/debasis.bihari.7/"
            title="facebook"
            target="_blank"
            rel="noreferrer"
            className="social__links__entries__link"
          >
            <Facebook size={20} color="currentColor" />
          </a>
          <a
            href="https://www.instagram.com/devprofile/?hl=en"
            title="instagram"
            target="_blank"
            rel="noreferrer"
            className="social__links__entries__link"
          >
            <Instagram size={20} color="currentColor" />
          </a>
        </div>
        <div className="social__links__line"></div>
      </div>
      <div className="social__email">
        <a
          href="mailto:debasisbihari287@gmail.com"
          className="social__email__text"
        >
          debasisbihari287@gmail.com
        </a>
        <div className="social__links__line"></div>
      </div>
    </>
  );
}
