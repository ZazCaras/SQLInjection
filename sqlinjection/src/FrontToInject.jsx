import React from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FrontToInject() {

    const submit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8888/api/comment', {
            usuario: e.target.usuario.value,
            comentario: e.target.comentario.value
        })
        .then((response) => {
            console.log(response.data)
        })
    }

  return (
    <div className='text-center'>
        <h5>Form Sin Protección</h5>
        <form onSubmit={submit}>
            <input
                name='usuario'
                type='text'
                placeholder='Nombre de Usuario'
                required
            />
            <input
                name='comentario'
                type='text'
                placeholder='Comentario'
                required
            />
            <button type='submit'>
                Inyectar
            </button>   
        </form>
    </div>
  )
}
