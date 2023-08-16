import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import FrontAntiInjection from './FrontAntiInjection'
import FrontToInject from './FrontToInject'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
function App() {

  const [bonis, setBonis] = useState(false)
  const [comments, setComments] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8888/api/comments')
    .then((response) => {
      setComments(response.data)
      console.log(response.data)
    })
  }, [])

  const randomUser = () => {
    let user = ''
    for (let i = 0; i < 10; i++) {
      user += Math.floor(Math.random() * 10).toString()
    }
    return user
  }

  const refill = () => {
    axios.post('http://localhost:8888/api/insert_comments')
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log("error")
    })
  }


  return (
    <Container >
      <Row>
        <Col lg={12}>
          <br/>
          <div className='text-center'>
            <Button onClick={() => setBonis(true)}>
              Ver el Bonito
            </Button> &nbsp;
            <Button 
              disabled={comments.length > 9}
              onClick={() => refill()}
            >
              Rellenar Tabla
            </Button> &nbsp;
            <Button onClick={() => setBonis(false)}>
              Ver el Feito
            </Button>
          </div>
          <br/>
          {
            bonis ? 
            <FrontAntiInjection/>
            :
            <FrontToInject/>
          }
          <h2 className='text-center'>
            Comentarios
          </h2>
          {
            comments.map((e, i) => (
              <Card key={i} className='m-3 p-2'>
                <Card.Title >{e.usuario} &nbsp; <small>{e.fecha}</small></Card.Title>
                <Card.Text>
                  {e.comentario}
                </Card.Text>
                <br/>
              </Card>
            ))
          }
        </Col>
      </Row>

    </Container>
  )
}

export default App
