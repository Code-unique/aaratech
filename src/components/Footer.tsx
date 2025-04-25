import React from "react";
import Wrappper from "./Wrappper";
import Link from "next/link";
import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="relative bg-background text-foreground py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/images/finalbg.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Link href={"/"}>
        <img
          src="/icons/footer_bg.svg"
          width={300}
          height={300}
          alt="footer_bg"
          className="absolute top-8 left-[8%]"
        />
      </Link>
      <Wrappper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left items-center">
          {/* Column 1: Logo + Text */}
          <div>
            <img width={100} height={15} src="/icons/logo1.png" alt="logo" />
            <p className="text-black text-lg font-medium opacity-80 mt-4">
              Aara Technology, where your product ideas become reality. As
              industry pioneers, we turn concepts into field-ready products with
              exceptional quality, cost-effectiveness, and timely delivery.
            </p>
          </div>

          {/* Column 2: Social Media Section */}
          <div className="flex flex-col items-center gap-4">
            {/* Title for Social Media */}
            <h5 className="text-black text-lg mb-2 mt-5">SOCIAL</h5>
            
            {/* Social Media Icons */}
            <Link href="https://www.facebook.com/AARATECH3D/" target="_blank">
              <FaFacebookF size={24} className="text-black" />
            </Link>
            <Link href="https://wa.me/9817396487" target="_blank">
              <FaWhatsapp size={24} className="text-black" />
            </Link>
            <Link href="https://www.linkedin.com/company/101527612/admin/dashboard/" target="_blank">
              <FaLinkedinIn size={24} className="text-black" />
            </Link>
            <Link href="https://www.instagram.com/aaratech3d/" target="_blank">
              <FaInstagram size={24} className="text-black" />
            </Link>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h5 className="text-black text-sm font-normal mb-4">CONTACT INFO</h5>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 justify-center md:justify-start">
                📍 <p className="text-black text-lg font-medium">Halgadha, Itahari, Nepal</p>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                📞 <p className="text-black text-lg font-medium">981-7396487</p>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                ✉️ <p className="text-black text-lg font-medium">ara80fficial@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </Wrappper>
    </div>
  );
};

export default Footer;
