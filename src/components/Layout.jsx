import { useState } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LogoImg from "../assets/logo.png";
import banner1 from "../assets/banner_1.jpg";
import banner2 from "../assets/banner_2.jpg";
import banner3 from "../assets/banner_3.jpg";
import banner4 from "../assets/banner_4.jpg";
import banner5 from "../assets/banner_5.jpg";
import banner6 from "../assets/banner_6.jpg";
import sub1 from "../assets/sub-1.jpg";
import sub2 from "../assets/sub-2.jpg";
import sub3 from "../assets/sub-3.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Layout = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState("Home");

  const menuItems = [
    "Home",
    "Retail",
    "Wholesale",
    "Request For Quote All Trades",
    "Services & Pre Owned",
    "Contact Us",
  ];

  const carouselImages = [banner1, banner2, banner3, banner4, banner5, banner6];

  return (
    <div>
      <header className="border-b border-[#f4f4f4]">
        <div className="header-top py-2 text-[11px] font-semibold tracking-wide leading-6">
          <div className="container w-[60%] m-auto flex items-center justify-between">
            <div className="header-left flex items-center gap-4">
              <p className="uppercase">
                FREE Delivery. Standard Shipping Orders 10000+
              </p>
              <a href="tel:+918073667950">
                <p className="top-message text-uppercase">
                  <i className="fas fa-phone-volume mr-2"></i> 8073667950
                </p>
              </a>
              <a href="https://wa.me/918073667950" target="_blank">
                <p className="top-message text-uppercase">
                  <i className="fab fa-whatsapp mr-2"></i> Telegram Support
                </p>
              </a>
            </div>
            <div className="header-right flex items-center gap-4">
              <div className="header-menu flex items-center gap-4">
                <a
                  href="javascript:void(0)"
                  data-toggle="modal"
                  data-target=".locaion_modal"
                >
                  Locate Me
                </a>
                <a href="https://apseshopping.com/login">
                  <i className="fas fa-sign-in-alt mr-2"></i> Log In
                </a>
                <a href="https://apseshopping.com/register">
                  <i className="far fa-registered mr-2"></i> Sign up
                </a>
              </div>
              <div className="social-icons">
                <a
                  href="https://www.facebook.com/Apseshopping"
                  className="social-icon social-facebook icon-facebook"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f text-[11px]"></i>
                </a>
                <a
                  href="https://twitter.com/ApseShopping"
                  className="social-icon social-twitter icon-twitter"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter text-[11px]"></i>
                </a>
                <a
                  href="https://www.instagram.com/apseshopping"
                  className="social-icon social-instagram icon-instagram"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram text-[11px]"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="header-middle py-7 border-t border-[#e7e7e7]">
          <div className="container w-[60%] m-auto flex items-center justify-between gap-6">
            <a
              href="/"
              className="flex items-center gap-2 no-underline text-white min-w-[160px]"
            >
              <img
                src={LogoImg}
                className="h-[56px] w-auto"
                alt="Apse Shopping Logo"
              />
            </a>

            <div className="relative flex-1 max-w-[880px]">
              <input
                type="search"
                placeholder="Search..."
                name="search"
                className="h-10 w-full rounded-full border-0 bg-[#e8e8ec] pl-6 pr-12 text-[14px] text-slate-700 outline-none placeholder:text-[#8e96a3]"
              />
              <button
                type="button"
                aria-label="Search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1f2b3a]"
              >
                <i className="fas fa-search text-[16px]"></i>
              </button>
            </div>

            <div className="flex min-w-[84px] items-center justify-end gap-2 text-white">
              <button
                type="button"
                aria-label="Cart"
                className="relative inline-flex h-10 w-10 items-center justify-center"
              >
                <i className="minicart-icon"></i>
                <span className="absolute -right-0.5 -top-0.5 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-[#ff5f5f] px-1 text-[10px] font-bold leading-none text-white">
                  0
                </span>
              </button>
              <button
                type="button"
                aria-label="Back"
                className="inline-flex h-8 w-8 items-center justify-center"
              >
                <i className="fas fa-angle-left text-[18px] text-black"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="sticky-wrapper ">
          <div className="container w-[60%] m-auto">
            <div className="flex items-center justify-between gap-3 border-t border-[#f4f4f4] py-2">
              <div className="flex items-center bg-[#151a28] px-[14px] py-4 text-[22px] font-semibold uppercase tracking-wide text-white">
                <i className="fas fa-bars mr-3 text-[13px]"></i>
                <span className="text-[12px]">All Categories</span>
                <i className="fas fa-angle-right ml-3 text-[13px]"></i>
              </div>

              <nav className="flex flex-1 items-center gap-8 text-[12px] font-bold uppercase text-white">
                {menuItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    onClick={(event) => {
                      event.preventDefault();
                      setActiveMenu(item);
                    }}
                    className={`relative no-underline text-white after:absolute after:left-0 after:right-0 after:-top-[20px] after:mx-auto after:h-[3px] after:w-10 after:bg-[#ff4d6d] ${
                      activeMenu === item
                        ? "after:opacity-100"
                        : "after:opacity-0"
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </nav>

              <a
                href="/"
                className="hidden min-w-[88px] justify-end lg:flex"
                aria-label="Apse Shopping"
              >
                <img
                  src={LogoImg}
                  alt="Apse Shopping"
                  className="h-[34px] w-auto opacity-90"
                />
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="homecarousel w-full">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          spaceBetween={0}
          slidesPerView={1}
          className="w-full"
        >
          {carouselImages.map((image, index) => (
            <SwiperSlide key={image}>
              <img
                src={image}
                alt={`Banner ${index + 1}`}
                className="h-[350px] w-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {children}
    </div>
  );
};

export default Layout;
