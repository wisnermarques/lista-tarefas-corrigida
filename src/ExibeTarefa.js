function ExibeTarefa({ tarefa,  handleRemove}) {
 
  const remove = () => {
    
    handleRemove(tarefa.id);
  };

  return (
    <li key={tarefa.id}>
      {tarefa.nome_tarefa}
      <i className='bi bi-pencil m-2'></i>
      <i className='bi bi-trash m-2' onClick={remove}></i>
    </li>
  )
}

export default ExibeTarefa
