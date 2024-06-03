import React from "react";

const Home = () => {
  return (
    <>
      <div className="relative mx-auto text-gray-600 px-8 max-w-[1500px] pb-20">
        <div className="h-20 flex items-center">
          <img src="/logo.svg" className="w-8" alt="" />
          <span className="ml-2 text-2xl font-radioCanada font-semibold">ClipperMaster</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex-grow pr-20">
            <p
              className="font-radioCanada text-7xl"
              style={{
                lineHeight: 1.2,
              }}
            >
              The ultimate tool for managing{" "}
              <span className="font-bold text-primary relative text-opacity-100 opacity-100 bg-opacity-100">
                structured
                <img src="/pointer.svg" className="absolute right-2 -bottom-10 z-10" alt="" />
                <span className="absolute -left-1 top-0 -right-1 bottom-0 bg-yellow-400 bg-opacity-10 border-solid border-yellow-400 border"></span>
              </span>{" "}
              web content
            </p>
            <p className="mt-12 text-3xl text-gray-400 font-radioCanada leading-10">
              Prevent valuable web content from getting lost in your bookmarks folder. ClipperMaster helps you to
              collect and manage web page content in a structured manner
            </p>
            <button className="mt-40 px-4 h-14 rounded-full bg-primary bg-opacity-100">Add to Chrome</button>
          </div>

          <img src="/shot.png" className="w-[38%] flex-shrink-0 -mr-10" alt="" />
        </div>
        <div className="mt-40 flex items-center gap-20">
          <div>
            <p className="font-radioCanada text-5xl font-medium">Extract structure content from web page</p>
            <p className="mt-4 text-gray-400 font-radioCanada text-3xl">
              You can effortlessly save useful information from web pages in a structured format, including links, text,
              images, and more.
            </p>
            <button className="mt-20 px-4 h-14 rounded-full bg-primary bg-opacity-100">Add to Chrome</button>
          </div>

          <img src="/imdb.png" className="w-[40%] flex-shrink-0" alt="" />
        </div>
        <div className="mt-40">
          <div>
            <p className="font-radioCanada text-5xl font-medium text-center">Flexible Automations</p>
            <p className="mt-6 text-gray-400 font-radioCanada text-3xl text-center">
              You shouldn't put all your eggs in one basket, and the same applies to data. With flexible automations,
              you can send the structured data you extract from web pages to your custom HTTP address or save it to a
              Notion database. Your data, your way of handling it.
            </p>
          </div>

          <img src="/automation.png" className="mt-8 w-[80%] mx-auto shadow-2xl rounded-2xl" alt="" />
        </div>
        <div className="mt-40">
          <div>
            <p className="font-radioCanada text-5xl font-medium text-center"> Different Sites,Different Collections</p>
            <p className="mt-6 text-gray-400 font-radioCanada text-3xl text-center">
              Create distinct collections for different sites/pages. Each page showcases unique content, and you can
              tailor specific collections accordingly.
            </p>
          </div>

          <img src="/sites.png" className="mt-12 w-[80%] mx-auto" alt="" />
        </div>
      </div>
      <div className="flex items-center justify-center gap-12 sticky bottom-0 bg-white w-full  py-6">
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
    </>
  );
};

export default Home;
