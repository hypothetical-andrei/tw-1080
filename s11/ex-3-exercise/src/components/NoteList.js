import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

import { addNote, deleteNote, saveNote } from '../actions/actions'

const noteListSelector = state => state.list.notes

const NoteList = (props) => {
  const notes = useSelector(noteListSelector, shallowEqual)
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <h3>list of notes</h3>
        {
          notes.map((e, i) => 
            <div key={i}>
              {e}
              <input type='text' placeholder='note content' onChange={(evt) => setContent(evt.target.value)} />
              <input type='button' value='delete' onClick={() => dispatch(deleteNote(i))} />
              <input type='button' value='save' onClick={() => dispatch(saveNote(i, content))} />
            </div>
          )
        }
      </div>
      <div>
        <h3>add a note</h3>
        <input type='text' placeholder='note content' onChange={(evt) => setContent(evt.target.value)} />
        <input type='button' value='add' onClick={() => dispatch(addNote(content))} />
      </div>
    </div>
  )
}

export default NoteList
