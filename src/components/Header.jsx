import { useLayoutEffect, useState } from "react";
import { Menu, X } from "react-feather";
import OutsideClickHandler from "react-outside-click-handler";
import LogoS from "../assets/logo-D.png";
import { useNavigate } from "react-router-dom";
import NavLink from "./NavLink";
import resume from "../assets/resume.pdf";
import { openNew } from "../utils/resumefn";

export default function Header() {
  const navigate = useNavigate();
  const navLinks = [
    {
      label: "Home",
      scrollTo: "home",
      defaultChecked: true,
    },
    {
      label: "About Me",
      scrollTo: "about",
    },
    {
      label: "Skills",
      scrollTo: "services",
    },
    {
      label: "Projects",
      scrollTo: "work",
    },
  ];
  const [isNavOpen, setIsNavOpen] = useState(true);
  useLayoutEffect(() => {
    if (window.innerWidth < 950) {
      setIsNavOpen(false);
    } else {
      setIsNavOpen(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 950) {
        setIsNavOpen(false);
      } else {
        setIsNavOpen(true);
      }
    });
  }, []);

  // const openNew=()=>{
  //  (window.open("https://drive.google.com/file/d/1QbEC67iIFgZP-XMQUuPWmWbaOd7-xia_/view?usp=share_link"))
  // }

  return (
    <div className="header">
      <div className="header__content">
        <button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            navigate("/");
            setTimeout(() => {
              document.getElementById("home").checked = true;
            }, 300);
          }}
          className="header__content__logo logo-div"
          title="logo"
        >
          <img src={LogoS} height={30} alt="Logo" />
          <p>
            ebasish
          </p>
        </button>
        <button
          className="header__content__menu"
          onClick={() => {
            setIsNavOpen(!isNavOpen);
          }}
          title="menu open/close"
        >
          {isNavOpen ? (
            <X size={20} color="currentColor" />
          ) : (
            <Menu size={20} color="currentColor" />
          )}
        </button>
        {isNavOpen ? (
          <div className="header__content__nav">
            <OutsideClickHandler
              onOutsideClick={() => {
                if (window.innerWidth < 950) {
                  setIsNavOpen(false);
                }
              }}
            >
              <div className="header__content__nav__wrapper">
                <div className="header__content__nav__links">
                  {navLinks.map((link, index) => (
                    <NavLink
                      key={link.label}
                      index={index}
                      label={link.label}
                      scrollTo={link.scrollTo}
                      defaultChecked={link.defaultChecked}
                    />
                  ))}
                </div>
                <div>
        <a
          href={resume}
           className="header__content__nav__button__content"
          title="Resume"
          target="_blank"
          rel="noreferrer"
          download={true}
          onClick={openNew}
        >
          Resume
        </a>
    </div>
                <div className="header__content__nav__button">
                  <input
                    id="contact"
                    type="radio"
                    name="header__content__nav__links__entry"
                    className="header__content__nav__button__input"
                    onClick={() => {
                      navigate("/");
                      setTimeout(() => {
                        document
                          .getElementById("contact__section")
                          .scrollIntoView();
                      }, 300);
                    }}
                    title="contact"
                  />
                  <div className="header__content__nav__button__content">
                    Contact
                  </div>
                </div>
              </div>
            </OutsideClickHandler>
          </div>
        ) : null}
      </div>
    </div>
  );
}
