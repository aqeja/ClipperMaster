import React from "react";

const Home = () => {
  return (
    <div className="relative">
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-5xl">Clipper Master</h1>
      </div>
      <div className="mt-10 flex items-center gap-12 absolute left-1/2 bottom-40 -translate-x-1/2">
        <a href="terms" target="_blank">
          terms of service
        </a>
        <a href="/privacy" target="_blank">
          privacy notice
        </a>
        <a href="/refund_policy" target="_blank">
          refund policy
        </a>
      </div>
      {/* <div></div>
      <p className="text-[70px]">
        The ultimate tool for storing and managing <span>structured</span> web content
      </p>
      <p className="text-4xl">
        The ultimate tool for storing and managing structured web content The ultimate tool for storing and managing
        structured web content The ultimate tool for storing and managing structured web content
      </p> */}
    </div>
  );
};

export default Home;
