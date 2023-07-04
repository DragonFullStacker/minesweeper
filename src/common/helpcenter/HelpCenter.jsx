import React from "react";

function HelpCenter() {
  return (
    <>
      <div className="">
        <div className="hp-main">
          <header className="help_header">
            <h1 className="my-4 font-extrabold text-4xl text-white">
              Hello! <br /> How can we help you?
            </h1>
            <p className="mb-4 text-white">
              Search our knowledge base for answers to common questions
            </p>
          </header>
          <div className="grid grid-cols-4 gap-1 w-full max-w-2xl">
            {/* <div className="mr-2 col-span-3 w-full">
              <input
                type="text"
                placeholder="Search for anything"
                className=" p-2 w-full rounded-lg border-2 border-[#D9D9D9] bg-[#D9D9D9] placeholder:text-black focus:outline-[#D9D9D9]"
              />
            </div> */}
            {/* <div className="">
              <button className="w-full btn text-white text-sm bg-black hover:bg-black border-none">
                Search
              </button>
            </div> */}
          </div>
          <div className="h_flex">
            <div className="bg-[#D9D9D9] h_card">
              <h3 className="font-bold text-left">Getting Started</h3>
              <p className="text-sm">New to GetBlack? We’ll help you</p>
            </div>
            <div className="bg-[#D9D9D9] h_card">
              <h3 className="font-bold text-left">Your Account</h3>
              <p className="text-sm">
                Learn about your GetBlack account and how to manage your access.
              </p>
            </div>
            <div className="bg-[#D9D9D9] h_card">
              <h3 className="font-bold text-left">Card Management</h3>
              <p className="text-sm">Card Information</p>
            </div>
            <div className="bg-[#D9D9D9] h_card">
              <h3 className="font-bold text-left">
                Frequently Asked Questions
              </h3>
            </div>
            <div className="bg-[#D9D9D9] h_card">
              <h3 className="font-bold text-left">GetBlack Community</h3>
              <p className="text-sm">
                The place to ask questions and share best practices
              </p>
            </div>
            <div className="bg-[#D9D9D9] h_card">
              <h3 className="">GetBlack Videos</h3>
              <p className="">Watch feature overviews and how-tos</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HelpCenter;
