import React from "react";

const Pricing = () => {
  return (
    <div className="h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-7xl mx-auto py-10">
        <a href="/">
          <div className="flex items-center justify-center gap-4">
            <img className="w-6" src="/logo.svg" alt="" />
            <p className="font-bold">ClipperMaster</p>
          </div>
        </a>
        <p className="mt-6 text-7xl font-radioCanada font-semibold text-center">Pricing</p>
        <div className="mt-10 flex items-stretch gap-10 justify-center">
          <div className="px-10 py-6 bg-white rounded-lg shadow-lg w-96">
            <p className="text-center text-4xl font-radioCanada font-semibold">free</p>
            <p className="text-center line-through text-gray-400">$0</p>
            <div className="mt-6">
              <ul className="leading-10">
                <li>5 Custom Collections</li>
                <li>WebHook support</li>
              </ul>
            </div>
          </div>
          <div className="px-10 py-6 bg-white rounded-lg shadow-lg w-96">
            <p className="text-center text-4xl font-radioCanada font-semibold">pro</p>
            <p className="text-center">$3.99</p>

            <div className="mt-6">
              <ul className="leading-10">
                <li>
                  <span className="font-semibold">Unlimited</span> Custom Collections
                </li>
                <li>
                  <li>WebHook support</li>
                </li>
                <li>Save to Notion</li>
                <li>Save to Lark</li>
              </ul>
              <button className="mt-20 bg-primary bg-opacity-100 px-6 py-4 rounded-full flex mx-auto">
                Upgrade to Pro
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
