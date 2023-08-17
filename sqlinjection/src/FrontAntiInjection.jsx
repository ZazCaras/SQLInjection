import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Form , Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FrontAntiInjection() {
    
  const isPossibleInjection = (string) => {
    if (
      string.toLowerCase().includes('delete') ||
      string.toLowerCase().includes('insert') ||
      string.toLowerCase().includes('select') ||
      string.toLowerCase().includes('drop') ||
      string.toLowerCase().includes('table') ||
      string.toLowerCase().includes('alter') || 
      string.toLowerCase().includes('create') ||
      string.toLowerCase().includes('schema') ||
      string.toLowerCase().includes('replace') ||
      string.toLowerCase().includes('values') ||
      string.toLowerCase().includes('update') ||
      string.toLowerCase().includes('=') ||
      string.toLowerCase().includes('==')
    ) {
      return true
    }
    else {
      return false
    }
  }

  //Deshabilitar html y js en inputs

  const submit = (e) => {
    e.preventDefault()
    if (isPossibleInjection(e.target.usuario.value) ||
      isPossibleInjection(e.target.comentario.value) 
    ) {
      return alert("Comentario bloqueado por administración. \nhttps://i.kym-cdn.com/entries/icons/facebook/000/010/566/060.jpg")
    }
    axios.post('http://localhost:8888/api/comment_potente', {
        usuario: e.target.usuario.value,
        comentario: e.target.comentario.value
    })
    .then((response) => {
        console.log(response.data)
    })
  }

  return (
    <div className='text-center'>
      <h5>Form Con Protección</h5>
      <Form
        onSubmit={submit}
        className='d-flex'
      >
        <Form.Control
          name='usuario'
          type='text'
          placeholder='Nombre de Usuario'
          required
        />
        <Form.Control
          name='comentario'
          type='text'
          placeholder='Comentario'
          required
        />
        <Button type='submit'>
          Enviar
        </Button>
      </Form>
    </div>
  )
}
