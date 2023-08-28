import { useEffect, useState } from 'react'

import axios from 'axios'
import ExibeTarefa from './ExibeTarefa'

function Contents({ nome }) {
  const [tarefas, setTarefas] = useState([])
  const [tarefa, setTarefa] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/tarefas').then((response) => {
      setTarefas(response.data)
    })
  }, [])

  const addTarefa = (event) => {
    event.preventDefault()
    const tarefaObject = {
      nome_tarefa: tarefa,
    }
    //console.log(tarefaObject);
    axios
      .post('http://localhost:3001/tarefas', tarefaObject)
      .then((response) => {
        setTarefas([...tarefas, response.data])
        setTarefa('')
      })
  }

  const handleTarefaChange = (event) => {
    setTarefa(event.target.value)
  }

  function removeTarefa(id) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id))

    axios.delete(`http://localhost:3001/tarefas/${id}`)
  }

  return (
    <div className='container'>
      <h2>Aprendendo React</h2>
      <p>Seja bem vindo, {nome}!</p>
      <h3>Lista de tarefas:</h3>

      <ul>
        {tarefas.map((tarefa, index) => (
          <ExibeTarefa
            key={index}
            tarefa={tarefa}
            handleRemove={removeTarefa}
          />
        ))}
      </ul>

      <hr />
      <form onSubmit={addTarefa}>
        <div className='mb-3'>
          <label htmlFor='tarefa' className='form-label'>
            Tarefa:
          </label>
          <input
            type='text'
            placeholder='Digite a tarefa...'
            className='form-control'
            value={tarefa}
            onChange={handleTarefaChange}
          />
          <button className='btn btn-primary mt-4'>Adicionar</button>
        </div>
      </form>
    </div>
  )
}

export default Contents
