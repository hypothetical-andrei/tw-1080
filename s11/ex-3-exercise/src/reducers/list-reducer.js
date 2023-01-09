const INITIAL_STATE = {
  notes: []
}

export default function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_NOTE':
      return { ...state, notes: [...state.notes, action.payload] }
    case 'DELETE_NOTE':
      return { ...state, notes: [...state.notes.filter((e, i) => i !== action.payload)] }
    default:
      return state
  }
}
