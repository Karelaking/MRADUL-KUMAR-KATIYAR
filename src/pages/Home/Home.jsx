import React from "react";
import { ShadowButton } from "../../components/ShadowButton/ShadowButton";

const Home = () => {
  return (
    <section
      className={`bg-[url("src/assets/img/bg.png")] bg-cover sm:bg-cover w-screen h-screen flex justify-center items-center flex-col`}
    >
      <h2
        className={`text-black uppercase font-roboto text-xl sm:text-3xl`}
        data-aos="fade-down"
      >
        My Portfolio
      </h2>
      <h1
        class="overflow-hidden border-r-2 border-orange-500 whitespace-nowrap animate-typing uppercase font-roboto font-[900] px-2 mx-28 text-7xl text-wrap sm:text-nowrap sm:text-8xl text-center mt-3 sm:mt-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        mradul kumar katiyar
      </h1>

      <p
        className={`w-4/5 leading-6 text-gray-600 font-roboto text-center text-base sm:text-2xl mt-3 sm:mt-5`}
        data-aos="fade-in"
        data-aos-delay="400"
      >
        ✨ Explore a world of creativity, innovation, and expertise! 🚀 Each
        project reflects passion and cutting-edge ideas 🌐🎨. From bold
        solutions 💡 to unique designs 🎥, we aim to inspire and ignite
        imaginations 🔥.Let’s shape a brighter, innovative tomorrow together.🌟
        Dive in and discover the magic! ✨
      </p>
      <div
        className={`flex gap-8 mt-9`}
        data-aos="fade-in"
        data-aos-delay="600"
      >
        <ShadowButton
          buttonText="Explore me"
          callBack={() => (window.location.href = "#about")}
        />
        <ShadowButton
          buttonText="Contact me"
          callBack={() => (window.location.href = "#contacts")}
        />
      </div>
    </section>
  );
};

export { Home };
