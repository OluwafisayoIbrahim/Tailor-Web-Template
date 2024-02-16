import React from "react";


const ClothingCard = ({ imgUrl, title, description, category }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-8 px-4">
        <h5 className="font-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] mb-2">{category}</p>
        <p className="text-[#ADB7BE] ">{description}</p>
      </div>
    </div>
  );
};

export default ClothingCard;
