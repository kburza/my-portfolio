import React, { useState, useEffect } from "react";
import { Link } from "react-scroll/modules";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { FaPaintBrush } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import NextLink from "next/link"; // Import NextLink for navigation to root homepage

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Education",
    page: "education",
  },
  {
    label: "Projects",
    page: "projects",
  },
];

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = "dark";
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    setTheme("dark");
  }, []);

  const handleLinkClick = () => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      setNavbar(!navbar);
    }
  };

  // Check if the current page is the blog page
  const isBlogPage = pathname === "/artblog" || pathname === "/mediablog";
  const title = isBlogPage ? "KBlog 🌩️" : "Kacper Burza";

  return (
    <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="home">
              <div className="container flex items-center space-x-2">
                <h2 className="text-2xl font-bold">{title}</h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-white-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            {isBlogPage ? (
              <div className="flex flex-col items-center space-y-6 md:flex-row md:space-x-4 md:space-y-0">
                <div onClick={handleLinkClick}>
                  <NextLink href="/">
                    <AiFillHome
                      size={30}
                      className="text-neutral-900 dark:text-neutral-100 hover:text-neutral-500 cursor-pointer"
                    />
                  </NextLink>
                </div>
                <div onClick={handleLinkClick}>
                  <NextLink href="/artblog/#">
                    <FaPaintBrush
                      size={30}
                      className="text-neutral-900 dark:text-neutral-100 hover:text-neutral-500 cursor-pointer"
                    />
                  </NextLink>
                </div>
                <div onClick={handleLinkClick}>
                  <NextLink href="/mediablog/#">
                    <RiMovie2Fill
                      size={30}
                      className="text-neutral-900 dark:text-neutral-100 hover:text-neutral-500 cursor-pointer"
                    />
                  </NextLink>
                </div>
              </div>
            ) : (
              <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                {NAV_ITEMS.map((item, idx) => {
                  return (
                    <Link
                      key={idx}
                      style={{ marginBottom: navbar ? "2em" : "0" }}
                      to={item.page}
                      className={
                        "block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100" +
                        (navbar && idx === NAV_ITEMS.length - 1 ? " pb-0" : "")
                      }
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={handleLinkClick}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
