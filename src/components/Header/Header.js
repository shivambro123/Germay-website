import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./../../styles/Headercss.css";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { LiaYoutube } from "react-icons/lia";
import { IoIosCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import india from "../../assests/testimonal/india.svg";
import germany from "../../assests/testimonal/germany.svg";

const Header = () => {
  return (
    <Container>
      <div className="headerwrapper py-3 px-4">
        <div className="contact flex flex-wrap">
          <IoIosCall className="text-sm hover:text-orange-400" />
          <img src={india} alt="india logo" height={28} width={28} />
          <h3>+91 -72198 49834</h3>
          <IoIosCall className="text-sm hover:text-orange-400  ml-2" />
          <img src={germany} alt="germany logo" height={28} width={28} />
          <h3>+49-17655471593</h3>
          <HiOutlineMail className="text-sm hover:text-orange-400  ml-2" />
          <h3>contact@germanywale.com</h3>
          <FaWhatsapp className="text-sm hover:text-orange-400 ml-2" />
          <h3>+91-8484977234</h3>
        </div>
        <div className="social">
          <div className="social_content flex justify-end ">
            <FaInstagram className="mx-2 text-lg hover:text-orange-400" />
            <FaFacebookF className="mx-2 text-lg  hover:text-orange-400" />
            <FaLinkedin className="mx-2 text-lg  hover:text-orange-400" />
            <LiaYoutube className="mx-2 text-lg  hover:text-orange-400" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
