import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([])

  function addNotes(newNote){
    setNotes(prevNote => {
      return [...prevNote, newNote]
    })
  }

  function deleteNote(id){
    setNotes(prevNote => {
      return prevNote.filter((note, index) =>  {
        return index !== id
    })
  })
}

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNotes} />
      {notes.map((todoNote, index) =>
        <Note key={index}
        id={index} 
      title={todoNote.title}
      content={todoNote.content}
      deleteFunction={deleteNote} />
      )}
      
      <Footer />
    </div>
  );
}

export default App;
