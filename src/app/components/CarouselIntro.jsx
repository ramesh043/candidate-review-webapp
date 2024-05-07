"use client";
import React from "react";
import { Carousel } from "flowbite-react";
function CarouselIntro() {
  return (
    <div className="h-full bg-slate-200 pt-8 m-2 rounded-t-lg">
      <div className=" mt-2"></div>
      <Carousel slideInterval={5000}>
        <img
          src="https://images.unsplash.com/photo-1560543685-824b3c5e82ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3R1ZHklMjBnaXJsfGVufDB8fDB8fHww"
          alt="..."
        />
        <img
          src="https://images.unsplash.com/photo-1560543685-824b3c5e82ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3R1ZHklMjBnaXJsfGVufDB8fDB8fHww"
          alt="..."
        />
        <img
          src="https://images.unsplash.com/photo-1587614295506-f03c0e6f5b44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN0dWR5JTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"
          alt="..."
        />
        <img
          src="https://plus.unsplash.com/premium_photo-1666961359225-9cb8e6c984e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3R1ZHklMjBnaXJsfGVufDB8fDB8fHww"
          alt="..."
        />
      </Carousel>
      <div className="relative">
        <div className="absolute bottom-2 left text-white font-light w-full bg-slate-500 shadow-neutral-900 ">
          <p className="text-center">Tell me about your self</p>
          <p className="text-center">Question {`${1}/${11}`}</p>
        </div>
      </div>
    </div>
  );
}

export default CarouselIntro;
