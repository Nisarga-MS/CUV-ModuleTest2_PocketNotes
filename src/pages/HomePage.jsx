import React from "react";
import GroupPanel from "../components/GroupPanel/GroupPanel";
import PosterChunk from "../components/PosterChunk/PosterChunk";

export default function HomePage() {
  return (
    <>
      <GroupPanel>
        <PosterChunk />
      </GroupPanel>
    </>
  );
}
