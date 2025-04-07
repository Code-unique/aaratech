"use client";

import React from "react";
import Wrapper from "./Wrappper"; // ✅ Fixed Import
import { getClientsLogos } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import LogoShimmer from "./shimmers/LogoShimmer";

// ✅ Define the ClientType to avoid implicit any error
type ClientType = {
  sys: {
    id: string;
  };
  clientLogo: {
    url: string;
    title?: string;
  };
};

const ClientSection = () => {
  const { data, error, isPending } = useQuery({
    queryKey: ["clientsLogos"],
    queryFn: getClientsLogos,
  });

  const clients = data || [];

  return (
    <div
      className="py-8 md:py-16"
      style={{
        backgroundImage: "url('/images/clientbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Wrapper>
        <h1 className="text-black text-[28px] md:text-[36px] lg:text-[42px] font-semibold text-center py-5 md:py-10">
          Some of Our Clients
        </h1>

        {error && (
          <div className="text-red-500 text-center py-6">
            ❌ Failed to load client logos. Please try again later.
          </div>
        )}

        <div className="grid gap-5 md:gap-10 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center w-full py-10">
          {isPending
            ? Array.from({ length: 8 }).map((_, index) => <LogoShimmer key={index} />)
            : clients.length > 0
            ? clients.map((client: ClientType) => (
                <div key={client.sys.id} className="md:px-4 md:py-2">
                  <div className="relative w-[80px] h-[60px] sm:w-[100px] sm:h-[80px] md:w-[140px] md:h-[100px] p-3">
                    <img
                      src={client.clientLogo.url}
                      className="w-full h-full object-contain mix-blend-normal filter brightness-100"
                      alt={client.clientLogo.title || "Client Logo"}
                    />
                  </div>
                </div>
              ))
            : !error && (
                <div className="text-gray-500 text-center col-span-full">
                  No clients available at the moment.
                </div>
              )}
        </div>
      </Wrapper>
    </div>
  );
};

export default ClientSection;
