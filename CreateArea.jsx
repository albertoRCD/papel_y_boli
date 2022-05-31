import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  function handleNote(event){
      const {name, value} = event.target

      setNote(prevNote => {
        return {
          ...prevNote,
          [name] : value
        }
      })
  }

  function submitNote(event){
    props.onAdd(note)
    setNote({
      title:"",
      content: ""
    })
    event.preventDefault();
  }

  const [isExpanded, setExpanded] = useState(false)

  function handleExpand(){
    setExpanded(true)
  }

  return (
    <div>
      <form>
        <input onChange={handleNote} 
        onClick={handleExpand}
        value={note.title} 
        name="title"
         placeholder="Title" />

        {isExpanded ? <textarea onChange={handleNote} 
        value={note.content}
         name="content" 
         placeholder="Take a note..."
          rows="3" /> : null}
        

        <button onClick={submitNote}><FontAwesomeIcon icon={faPlus}/></button>
      </form>
    </div>
  );
}

export default CreateArea;
