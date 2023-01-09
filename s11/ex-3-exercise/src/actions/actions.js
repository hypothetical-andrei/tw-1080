export function addNote (content) {
  return {
    type: 'ADD_NOTE',
    payload: content
  }
}

export function deleteNote (content) {
  return {
    type: 'DELETE_NOTE',
    payload: content
  }
}
