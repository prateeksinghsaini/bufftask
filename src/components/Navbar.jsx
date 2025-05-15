import React, { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

function MovingBall({ delay }) {
  return (
    <motion.div
      className="w-2 h-2 bg-white rounded-full"
      animate={{ x: ["100vw", "-100vw"] }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
    />
  );
}

function Dropdown({ label, subLinks }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex align-middle items-center">
        {label}
        <ChevronDown strokeWidth={0.8} size={16} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-[-0.1rem] border bg-white rounded-xl shadow-lg z-10 w-40">
          <ul className="">
            {subLinks.map((sub, i) => (
              <li key={i}>
                <Link
                  to={sub.link}
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                >
                  {sub.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Navbar() {
  const services = [
    "Fast Delivery",
    "COD Available",
    "Worldwide Shipping",
    "Shop Now",
  ];
  const services2 = ["Fast Delivery", "COD Available"];

  const links = [
    {
      path: "/shop-all",
      name: "SHOP ALL",
      subLinks: [
        {
          link: "/sub-link",
          name: "SUB LINK",
        },
      ],
    },
    {
      path: "/best-sellers",
      name: "BEST SELLERS",
      subLinks: [
        {
          link: "/sub-link",
          name: "SUB LINK",
        },
      ],
    },
    {
      path: "/range",
      name: "RANGE",
      subLinks: [
        {
          link: "/sub-link",
          name: "SUB LINK",
        },
      ],
    },
    {
      path: "/new-arrivals",
      name: "NEW ARRIVALS",
    },
    {
      path: "/blog",
      name: "BLOG",
    },
  ];

  const icons = [
    {
      path: "/",
      src: "/icons/search.png",
    },
    {
      path: "/",
      src: "/icons/user.png",
    },
    {
      path: "/",
      src: "/icons/bag.png",
    },
  ];

  return (
    <div className="w-full">
      <div className="relative w-full h-[5vh] justify-evenly flex items-center bg-black text-white text-[9px] font-semibold overflow-hidden">
        {[...services, ...services, ...services2].map((s, i) => (
          <span
            key={i}
            className="mx-4 whitespace-nowrap flex align-middle items-center gap-7"
          >
            {s}
            <MovingBall key={`ball-${i}`} delay={i * 0.5} />
          </span>
        ))}
      </div>

      <div className="w-full h-[16vh] flex justify-around items-center">
        <img src="/images/logo.png" alt="Logo" />

        <div className="text-xs flex gap-5 ml-[-10rem]">
          {links.map((link, index) =>
            link.subLinks ? (
              <Dropdown
                key={index}
                label={link.name}
                subLinks={link.subLinks}
              />
            ) : (
              <Link key={index} to={link.path}>
                {link.name}
              </Link>
            )
          )}
        </div>

        <div className="text-xs flex gap-3 mr-5">
          {icons.map((icon, index) => (
            <Link key={index} to={icon.path}>
              <img src={icon.src} alt="icon" className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
