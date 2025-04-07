import React from "react";

import { featureWork } from "@/app/types";
import WorkCard from "../WorkCard";
import Wrappper from "../Wrappper";

const OtherProjects = ({ works }: { works: { items: featureWork[] } }) => {
  return (
    <Wrappper>
      <div className="bg-background  text-white py-10 " 
      style={{
        backgroundImage: "url('/images/finalbg.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",

      }}
      >
        <h1 className="text-black text-[28px] md:text-[40px] lg:text-[48px] font-semibold pb-10">
          Some Other Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {works.items.map((each: featureWork) => (
            <WorkCard key={each.sys.id} workDetail={each} />
          ))}
        </div>
      </div>
    </Wrappper>
  );
};

export default OtherProjects;
