import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Card = ({ item }) => {
  // let tag = item.tags
  // tag = tag.split(',')
  const [tag, setTag] = useState([]);
  useEffect(() => {
    setTag(item.tags ? item.tags.split(",") : "");
  }, []);
  return (
    <div className="min-h-16 rounded-md overflow-hidden shadow-xl m-1 sm:basis-4/4 md:basis-5/12 lg:basis-3/12">
      <div className="">
        <img src={`${item.largeImageURL}`} alt="" className="object-cover"/>
      </div>
      <div className="p-2 bg-white">
        <h3 className="text-lg font-bold text-purple-600 my-1">
          {tag[0]}
        </h3>
        <ul>
          <li>
            <strong> Views :</strong> {item.views}
          </li>
          <li>
            <strong> Downloads :</strong> {item.downloads}
          </li>
          <li>
            <strong> like :</strong> {item.likes}
          </li>
        </ul>
        <div className="flex flex-row flex-wrap justify-start items-center m-1">
          {tag
            ? tag.map((val) => {
                return (
                  <p className="bg-slate-200 w-fit rounded-md px-1 font-medium m-1">
                    {`#${val}`}
                  </p>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Card;
