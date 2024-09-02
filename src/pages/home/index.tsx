import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const router = useNavigate();

  const handleLoginRedirect = () => {
    router("/login");
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/img_size.webp')`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>{" "}
      {/* Overlay to make text stand out */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to ReeLug
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Manage your job applications, stay updated on interviews, and connect
          seamlessly — all in one place.
        </p>
        <Button
          type="primary"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg"
          onClick={handleLoginRedirect}
          size="large"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
