import { LiaShippingFastSolid } from "react-icons/lia";
import { CiDollar } from "react-icons/ci";

const Home = () => {
  return (
    <div className="home">
      <div className="sub w-[60%] m-auto pt-10 px-[2.4rem] pb-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center">
            <LiaShippingFastSolid
              className="text-[37px] text-[#222529] mr-[15px]"
              aria-hidden="true"
            />
            <div>
              <h4 className="uppercase text-[#222529] font-bold text-[14px]">
                Free shipping & return
              </h4>
            </div>
          </div>
          <div className="flex items-center">
            <CiDollar
              className="text-[37px] text-[#222529] mr-[15px]"
              aria-hidden="true"
            />
            <div>
              <h4 className="uppercase text-[#222529] font-bold text-[14px]">
                MONEY BACK GUARANTEE
              </h4>
              <p className="text-[13px] text-[#777777]">
                100% money back guarantee
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <LiaShippingFastSolid
              className="text-[37px] text-[#222529] mr-[15px]"
              aria-hidden="true"
            />
            <div>
              <h4 className="uppercase text-[#222529] font-bold text-[14px]">
                ONLINE SUPPORT 24/7
              </h4>
              <p className="text-[13px] text-[#777777]">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
