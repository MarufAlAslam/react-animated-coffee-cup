import React, { useState } from "react";
import americano from "../assets/img/americano.png";
import cappucino from "../assets/img/cappucino.png";
import coldBrew from "../assets/img/cold-breq.png";
import cortado from "../assets/img/cortado.png";
import expresso from "../assets/img/expresso.png";
import frappe from "../assets/img/frappe.png";
import tableTop from "../assets/img/table-top.png";

import { GrChapterNext, GrChapterPrevious } from "react-icons/gr";

const Home = () => {
  const addToTable = (e) => {
    const coffee = document.querySelector(".coffee");
    const info = document.querySelector(".info");
    coffee.classList.add("coffee-animate");

    e.target.classList.add("hidden");

    info.classList.add("info-animate");

    // add onclick to coffee-animate
    coffee.addEventListener("click", () => {
      coffee.classList.remove("coffee-animate");
      info.classList.remove("info-animate");
      e.target.classList.remove("hidden");
    });
  };

  const coffeeData = [
    {
      id: 1,
      name: "Americano",
      price: 150,
      img: americano,
    },
    {
      id: 2,
      name: "Cappuccino",
      price: 200,
      img: cappucino,
    },
    {
      id: 3,
      name: "Cold Brew",
      price: 250,
      img: coldBrew,
    },
    {
      id: 4,
      name: "Cortado",
      price: 180,
      img: cortado,
    },
    {
      id: 5,
      name: "Expresso",
      price: 100,
      img: expresso,
    },
    {
      id: 6,
      name: "Frappe",
      price: 200,
      img: frappe,
    },
  ];

  const [displayData, setDisplayData] = useState(coffeeData[0]);

  const prevData = (currentID) => {
    if (currentID === 1) {
      currentID = 7;
    }
    currentID = currentID - 1;
    const prevCoffee = coffeeData[currentID - 1];
    setDisplayData(prevCoffee);
  };

  const nextData = (currentID) => {
    if (currentID === 6) {
      currentID = 0;
    }
    currentID = currentID + 1;
    const nextCoffee = coffeeData[currentID - 1];
    setDisplayData(nextCoffee);
  };
  return (
    <div>
      <div className="wrapper">
        <div className="container flex flex-col justify-between items-center lg:w-[30%] md:w-[75%] w-[95%] h-full bg-[#ECE0D1] rounded-[20px] overflow-hidden">
          <div className="text-center p-[30px] w-full">
            <div className="flex justify-between items-center gap-2">
              <button onClick={() => prevData(parseInt(displayData.id))}>
                <GrChapterPrevious className="text-3xl" />
              </button>
              <div className="coffee-holder">
                <img
                  src={displayData.img}
                  className="coffee relative block mx-auto mb-4"
                  alt=""
                />
                <div className="info">
                  <h2 className="font-bold text-5xl mb-2 text-[#38220F]">
                    {displayData.name}
                  </h2>
                  <h4 className="text-2xl font-semibold text-[#38220F]">
                    BDT {displayData.price}
                  </h4>
                </div>
              </div>
              <button onClick={() => nextData(parseInt(displayData.id))}>
                <GrChapterNext className="text-3xl" />
              </button>
            </div>

            <button
              onClick={addToTable}
              className="mt-[30px] bg-[#967259] px-[30px] py-[10px] text-white text-xl rounded"
            >
              Add to Table
            </button>

            <div className="bg-[#38220F] h-[2px] my-[30px]" />
          </div>

          <div className="bottom w-full">
            <img src={tableTop} className="w-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
