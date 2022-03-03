import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import { useState } from 'react'
import { FaReact } from 'react-icons/fa'
import { WiAlien } from 'react-icons/wi'

function App() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const modal = (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )

  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h1>React Bootstrap</h1>
            {modal}
            <Button variant="primary" onClick={handleShow}>
              <WiAlien /> Primary
            </Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="primary">
              <FaReact /> React v16
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
