"use client";

import { useState } from "react";

export const Header = () => {
  const [active, setActive] = useState("Home");

  const links = ["Home", "Projects", "About", "Contact"];

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            onClick={() => setActive(link)}
            className={`nav-item ${
              active === link
                ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                : ""
            }`}
          >
            {link}
          </a>
        ))}
      </nav>
    </div>
  );
};
