import styles from '../styles/Home.module.css';
import {useState} from 'react';
import MainLayout from '../components/Layout/Main';
import {Row, Col, Container, Button, Modal} from 'react-bootstrap';
import MCContactForm from '../components/Forms/Contact';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

export default function HomePage() {
  const [ show, setShow ] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const mcListUrl = 'https://munnypay.us20.list-manage.com/subscribe/post?u=5d15bb3bcc56e1576485ea90e&id=16a205d15e';
  return (
    <div className="home-intro">
      <Container>
        <Row>
          <Col xs={12}>
            <img src="images/logo-white.svg" alt="Seven Sisters Senior Care" style={{maxWidth:'40%', height:'auto'}}/>
            <h3 className="white"></h3>
          </Col>
          <Col md={12} lg={5}>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
