
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';


function App() {

  return (
    <>
     <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Quoter</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    <h1 className='heading'>Cards of Quotes</h1>
    <div className='cardsContainer'>
      <Card>
      <Card.Header>Quote 1</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.{' '}
          </p>
          <footer className="blockquote-footer">
             <cite title="Source Title">William Shakespeare</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
      <Card>
      <Card.Header>Quote 2</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.{' '}
          </p>
          <footer className="blockquote-footer">
          <cite title="Source Title">Maya Angelou</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
      <Card>
      <Card.Header>Quote 3</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.{' '}
          </p>
          <footer className="blockquote-footer">
          <cite title="Source Title">Robin Williams</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    </div>
    </>
   
  )
}

export default App
