import { Button, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../components/button.components";
import { LoginOutlined } from "@ant-design/icons";
import RotatingGear from "../../components/hero-image";

const HeroSection = () => {
  const router = useNavigate();

  const handleLoginRedirect = () => {
    router("/login");
  };

  return (
    <div className="relative pt-10 md:pt-40 flex flex-col md:flex-row px-6 lg:px-28 justify-evenly md:justify-between items-center w-full h-screen text-dark">
      <div className="w-full  flex mt-10 md:w-[50%] 2xl:w-[500px] md:hidden flex-col order-0 justify-center h-fit md:h-full">
        <img src={"/bulb.svg"} alt="hero image" />
      </div>
      <div className="relative  z-10 flex flex-col space-y-5 md:space-y-8 w-full md:max-w-[50%]  justify-center items-start h-fit md:h-full text-dark">
        <h1 className="text-4xl text-start md:text-6xl leading-normal md:leading-tight font-bold">
          Manage Your Job Applications More Efficiently
        </h1>

        <p className=" text-start text-lg md:text-xl max-w-2xl">
          Stay updated on interviews, and connect seamlessly — all in one place.
          Organize your job search journey with ease, from initial applications
          to final offers.
        </p>

        <Space size={32} className="">
          <PrimaryButton
            onClick={handleLoginRedirect}
            icon={<LoginOutlined size={8} />}
          >
            Get Started
          </PrimaryButton>

          <Button className="w-[171.5px] h-[57px] mt-1 text-[18px] font-[500] text-dark border-dark hover:text-white transition-all duration-300 ease-linear hover:bg-primary">
            Buy Now
          </Button>
        </Space>
      </div>

      <div className="w-full hidden md:w-[50%] 2xl:w-[500px] md:flex flex-col order-0 justify-center h-fit md:h-full">
        <RotatingGear />
      </div>
    </div>
  );
};

export default HeroSection;
