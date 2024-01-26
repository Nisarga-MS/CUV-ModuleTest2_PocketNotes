import React from "react";
import GroupPanel from "../components/GroupPanel/GroupPanel";
import NotesZone from "../components/NotesZone/NotesZone";

export default function NotesPage() {
  return (
    <>
      <GroupPanel>
        <NotesZone />
      </GroupPanel>
    </>
  );
}
