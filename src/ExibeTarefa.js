import { Link } from "react-router-dom"

function ExibeTarefa({ tarefa, handleRemove }) {
  const remove = () => {
    handleRemove(tarefa.id)
  }

  return (
    <li key={tarefa.id}>
      {tarefa.nome_tarefa}
      <Link to={`http://localhost:3000/${tarefa.id}`}>
      <i className='bi bi-pencil m-2 text-success'></i>
      </Link>
      <i
        className='bi bi-trash m-2 text-danger'
        onClick={remove}
        style={{ cursor: 'pointer' }}
      ></i>
    </li>
  )
}

export default ExibeTarefa
