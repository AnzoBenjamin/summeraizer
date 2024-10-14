import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <h2 className="text-xl font-bold">
          <span className="orange_gradient">Summeraizer</span>
        </h2>
        {/*
<button
type='button'
onClick={() =>
  window.open("https://github.com/AnzoBenjamin/Summeraizer", "_blank")
  }
  className='black_btn'
  >
  GitHub
  </button>
  */}
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient ">Automatically</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summaraizer, an article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
