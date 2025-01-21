import Logo from "@/assets/Group 29.svg";
import Vedio from "@/assets/grid.mp4";
import Mobile from "@/assets/mobile.svg";
import Bg from "@/assets/8.svg";

function Main() {
  return (
    <div className="h-screen flex ">
      {/* Revealing Animation */}
      <div className="reveal-screen"></div>
      <div className="reveal-screen1"></div>

      {/* Logo */}
      <div className=" absolute left-5 top-5 hidden sm:block sm:w-10 md:w-fit z-10 cursor-pointer hover:scale-110 transition ease-in-out duration-200">
        <img src={Logo} />
      </div>

      {/* Video */}
      <div className="absolute w-screen h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src={Vedio} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="absolute bottom-10 right-0  flex justify-center">
        <img
          id="image"
          src={Bg}
          className="hover:scale-105 transition  ease-in-out duration-200 slideIn animate-slide-in"
        />
      </div>

      {/* Partition */}
      <div className="flex flex-col w-full z-50">
        <div className="heading self-center flex gap-7 mt-10 animate-slide-slideInHeader">
          <div>
            <p className=" underline underline-offset-8 font-bold  ">
              Byte
            </p>
          </div>
          <div className="flowbox -skew-x-12 basecolor rounded-tl-3xl rounded-tr-xl rounded-br-3xl rounded-bl-xl ">
            <p className="text-white underline  font-bold  skew-x-12">
              Flow
            </p>
          </div>
        </div>

        <div className="my-auto pl-20 ">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold animate-slide-in4">
            Building{" "}
            <span className="gradient-text-stroke border-gradient-rainbow animated-gradient ">
              Scalable
            </span>{" "}
            Websites.
          </h1>
          <div className="text-3xl sm:text-4xl lg:text-4xl py-8 animate-slide-in3">
            We create scalable, high-performance <br />
            websites tailored to help <br />
            your <a className="font-bold underline">BUSINESS</a>.
          </div>
          <div className="flex gap-3 bottombar animate-slide-in2">
            <button className="basecolor1 text-white text-2xl font-bold rounded h-fit w-fit px-7 py-3 self-end transition ease-in-out duration-200 hover:scale-110 ">
              About Us
            </button>
            <img
              src={Mobile}
              className="hover:scale-105 bottombarimg transition ease-in-out duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
