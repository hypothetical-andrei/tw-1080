function Child (props) {
  const { onUpdateParent } = props

  return (
    <div>
      i am the child
      <input type='button' value='update parent' onClick={() => onUpdateParent()} />
    </div>
  )
}

export default Child