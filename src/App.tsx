import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TopAppBar from "./TopAppBar";
import { ClassRoomActions, ClassRoomActionTypes } from "./ClassRoomActions";
import ClassRoomScene from "./ClassRoomScene";
import QuestionScene from "./QuestionScene";
import { ClassRoom } from "./ClassRoom";

function findGetParameter(parameterName: string) {
  let result = null,
    tmp = [];
  window.location.search
    .substr(1)
    .split("&")
    .forEach(function (item) {
      tmp = item.split("=");
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
  return result;
}

function App() {
  const [selectedAction, setSelectedAction] = useState(
    ClassRoomActionTypes.CLASSROOM
  );

  const classRoomId = findGetParameter("classRoomId");

  return classRoomId ? (
    <ClassRoom id={classRoomId} />
  ) : (
    <>
      <CssBaseline />
      <Container
        maxWidth="md"
        style={{ backgroundColor: "#cfe8fc", height: "100vh", padding: 0, position: "relative" }}
      >
        <TopAppBar />
        <ClassRoomActions
          selected={selectedAction}
          onSelected={(s) => setSelectedAction(s)}
        />

        {selectedAction === ClassRoomActionTypes.CLASSROOM && (
          <ClassRoomScene />
        )}
        {selectedAction === ClassRoomActionTypes.QUESTION && <QuestionScene />}
      </Container>
    </>
  );
}

export default App;
