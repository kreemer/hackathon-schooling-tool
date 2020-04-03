import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TopAppBar from './TopAppBar';
import {ClassRoomActions, ClassRoomActionTypes} from './ClassRoomActions';
import ClassRoomScene from './ClassRoomScene';
import QuestionScene from './QuestionScene';

function App() {
  const [selectedAction, setSelectedAction] = useState(ClassRoomActionTypes.CLASSROOM);

  console.log("RENDER");

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" style={{ backgroundColor: '#cfe8fc', height: '100vh', padding: 0 }}>
        <TopAppBar />
        <ClassRoomActions selected={selectedAction} onSelected={(s) => setSelectedAction(s)}/>

        {selectedAction === ClassRoomActionTypes.CLASSROOM && <ClassRoomScene/>}
        {selectedAction === ClassRoomActionTypes.QUESTION && <QuestionScene/>}
      </Container>
    </>
  );
}

export default App;
