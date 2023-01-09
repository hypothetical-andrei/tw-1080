import { useState } from "react"
import { useDispatch } from "react-redux"

import { addNote } from "../actions/actions"

function NoteForm () {
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  return (
    <div>
      <h3>Add a note</h3>
      <input type='text' placeholder='note content' onChange={(evt) => setContent(evt.target.value)} />
      <input type='button' value='add a note' onClick={() => dispatch(addNote(content))} />
    </div>
  )
}

export default NoteForm