import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import NavItem from "./NavItem";
import "./footer.css";

const Footer = () => {
  const NavContents = [
    { content: "About Us", location: "/" },
    { content: "Events", location: "/" },
    { content: "Council Members", location: "/" }
  ];

  const contactIcons = (
    <ul className="d-flex contact-icons">
      <li className="footer_items">
        <a href="mailto:contact@tesc.ucsd.edu" className="contact-icon">
          <MdEmail />
        </a>
      </li>
      <li className="footer_items">
        <a href="https://instagram.com/ucsdtesc/" className="contact-icon">
          <FaInstagram />
        </a>
      </li>
      <li className="footer_items">
        <a
          href="https://www.linkedin.com/company/ucsdtesc"
          className="contact-icon"
        >
          <FaLinkedin />
        </a>
      </li>
      <li className="footer_items">
        <a href="https://x.com/UCSDTESC/" className="contact-icon">
          <FaXTwitter />
        </a>
      </li>
    </ul>
  );
  return (
    <>
      <footer className="footer d-flex justify-content-between w-100">
        <div className="footer-left">
          <p className="footer-text footer_items">Contact Us</p>
          {contactIcons}
        </div>
        <div>
          <ul className="d-flex footer_items footer-text">
            {NavContents.map((content, index) => {
              return (
                <NavItem
                  key={index}
                  content={content.content}
                  location={content.location}
                />
              );
            })}
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
