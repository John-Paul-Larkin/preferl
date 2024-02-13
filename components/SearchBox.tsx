"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function SearchBox() {
  const [isOpen, setIsOpen] = useState(false);

  const navan = "Navan stands out with the shortest average time to hire, at just 25 days.\n";

  const based = "based on the metrics calculated for candidates from navan:\n";

  const av = "Average % of sales targets hit:\n";

  const av2 = "Average interview rating (%)\n";

  const av3 = "Average time to productivity (days)\n\n";

  const summary =
    "In summary, candidates form Navan generally have a lower sales target achievement and take longer to become productive, although they have a reasonable interview rating.";

  const boxVariants = {
    closed: { height: "50px" },
    open: { height: "600px" },
  };

  useEffect(() => {
    function handleKeyPress(event: any) {
      if (event.key === "Enter") {
        // Handle the Enter key press here
        console.log("Enter key pressed!");
        setIsOpen((cur) => !cur);
      }
    }
    // Add event listener when component mounts
    document.addEventListener("keydown", handleKeyPress);

    // Clean up the event listener when component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="fixed bottom-4 w-full">
      <div className="w-[700px] mx-auto">
        <motion.div
          animate={isOpen ? "open" : "closed"}
          variants={boxVariants}
          initial="closed"
          transition={{ duration: 0.5 }}
          className="
          
          flex items-start flex-col
          bg-[#1d2429] w-full h-12 rounded-lg border-0  text-white... shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400... focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          // className="h-10 w-[50%] text-gray-950 text-1xl" placeholder="Enter a query......"
        >
          <input
            type="text"
            className="mt-2 text-2xl  bg-[#1d2429] w-full h-10 border-0 focus:ring-0 ring-0 appearance-none bg-transparent border-non mr-3 py-1 px-2 leading-tight focus:outline-none"
          />

          <p className="p-4 text-[#4ab648]">
            <TypeAnimation
              style={{ whiteSpace: "pre-line", height: "195px", display: "block", fontSize: "1.4em" }}
              sequence={[
                15000, // Waits 1s
                navan, // Types 'One'
                1000,
                navan + based,
                navan + based + av + "81.6%\n",
                2000,
                navan + based + av + "81.6%\n" + av2 + "73.2%\n",
                1000,
                navan + based + av + "81.6%\n" + av2 + "73.2%\n" + av3,
                1500,
                navan + based + av + "81.6%\n" + av2 + "73.2%\n" + av3 + "48.4 days\n",
                900,
                navan + based + av + "81.6%\n" + av2 + "73.2%\n" + av3 + "48.4 days\n" + summary,

                () => {
                  console.log("Sequence completed");
                },
              ]}
              //   wrapper="span"
              cursor={true}
              repeat={0}
              //   style={{ fontSize: "2em", display: "inline-block" }}
            />
          </p>
        </motion.div>
      </div>
    </div>
  );
}
