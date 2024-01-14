import BlurImage from "@/components/blur-image";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getCharacter, getLocation } from "@/lib/data";
import { sleep } from "@/lib/utils";
import React, { Suspense } from "react";

const ChDetails = ({ params }: { params: { id: string } }) => {
  return (
    <div className="space-y-10">
      <h1 className="font-nunito text-2xl font-bold">Character details</h1>

      <Suspense
        fallback={
          <div className="tex-xl font-bold text-orange-500">Loading ....</div>
        }
      >
        <FetchDetails id={params.id} />
      </Suspense>
    </div>
  );
};

export default ChDetails;

const FetchDetails = async ({ id }: { id: string }) => {
  // await sleep();
  const details = await getCharacter(id);

  return (
    <div className="max-w-md space-y-5">
      <BlurImage url={details.image} />
      <h1>{details.name}</h1>
      <Suspense
        fallback={
          <div className="space-y-2">
            <Skeleton className="h-8" />
            <Skeleton className="h-8" />
          </div>
        }
      >
        <FetchLocation url={details.location.url} />
      </Suspense>
    </div>
  );
};

const FetchLocation = async ({ url }: { url: string }) => {
  // await sleep();
  if (!url) return <div>No location</div>;
  const details = await getLocation(url);

  return (
    <div className="max-w-md space-y-5">
      <p>{details.dimension}</p>
      <h1>{details.name}</h1>
    </div>
  );
};
