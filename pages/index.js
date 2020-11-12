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
    <MainLayout>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center"><h1 style={{width:'100%', margin:0}} className="text-center">Join Kroo</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container>
          <Row>
            <Col md={{span:10, offset:1}}>
              <MailchimpSubscribe
                url={mcListUrl}
                render={({ subscribe, status, message }) => (
                  <div>
                    <MCContactForm
                      status={status}
                      message={message}
                      onValidated={formData => subscribe(formData)}
                    />
                  </div>
                )}
              />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        </Modal>
      <div className="home-intro">
        <Container>
          <Row>
            <Col md={12} lg={7}>
              <h1 style={{marginBottom:0}}><br className="mobile-break"/><span className="orange">Contactless</span> menu, ordering, and payments for restaurants.</h1>
              <h3 className="grey">Kroo is seamlessly integrated with Square POS and only takes 10 seconds to setup.</h3>
              <br/>
              <br/>
              <Button variant="primary" size="lg" id="waitlist-modal-open" onClick={handleShow}>
                Get Started
              </Button>
              <br/>
            </Col>
            <Col md={12} lg={5}>
              <img src="images/web/diners-v2.svg" alt="Kroo Diners" style={{width:'100%', height:'auto'}}/>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="content-section primary-bg text-center">
        <Container>
          <img style={{width:60, height:'auto'}} alt="Kroo Lightning" src="images/web/icons/lightning.svg" />
          <h2 className="white">Lightning Fast Ordering</h2>
          <h3 className="white"> No extra app download needed</h3>
        </Container>
      </div>
      <div className="content-section text-center">
        <Container>
          <div className="content-section-heading">
            <h1><span className="orange">Supercharge</span> Your Restaurant With Kroo</h1>
          </div>
          <Row>
            <Col sm={4} xs={12}>
              <div className="feature-item content-center">
                <div className="feature-circle  primary-bg">
                  <img className="feature-icon" src="images/web/icons/pos-outline.svg" />
                </div>
                <h3 className="feature-title orange">POS Integrated</h3>
                <p>Orders and payments sent directly to your POS with no complex setup.</p>
              </div>
            </Col>
            <Col sm={4} xs={12}>
              <div className="feature-item content-center">
                <div className="feature-circle  primary-bg">
                  <img className="feature-icon" src="images/web/icons/tray-hand.svg" />
                </div>
                <h3 className="feature-title orange">Waiter Friendly</h3>
                <p>Does not eliminate waiters but allows them to focus on serving food.</p>
              </div>
            </Col>
            <Col sm={4} xs={12}>
              <div className="feature-item content-center">
                <div className="feature-circle  primary-bg">
                  <img className="feature-icon" src="images/web/icons/shield.svg" />
                </div>
                <h3 className="feature-title orange">Secure</h3>
                <p>All orders and payments are processed securely using Square's infrastructure.</p>
              </div>
            </Col>
            <Col sm={4} xs={12}>
              <div className="feature-item content-center">
                <div className="feature-circle  primary-bg">
                  <img className="feature-icon" src="images/web/icons/utensils.svg" />
                </div>
                <h3 className="feature-title orange">Enhanced Menu</h3>
                <p>Digitize your menu and enhance with beautiful photos and display. </p>
              </div>
            </Col>
            <Col sm={4} xs={12}>
              <div className="feature-item content-center">
                <div className="feature-circle  primary-bg">
                  <img className="feature-icon" src="images/web/icons/qr.svg" />
                </div>
                <h3 className="feature-title orange">Cashless</h3>
                <p>All customers order and pay inside Kroo. No cash. No cards. </p>
              </div>
            </Col>
            <Col sm={4} xs={12}>
              <div className="feature-item content-center">
                <div className="feature-circle  primary-bg">
                  <img className="feature-icon" src="images/web/icons/table-chairs.svg" />
                </div>
                <h3 className="feature-title orange">Branded</h3>
                <p>Our QR codes can be customized to fit your restaurant brand & aesthetic. </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <hr/>
      <div className="content-section text-center ">
				<Container>
          <div className="content-section-heading">
            <h1>How It Works</h1>
            <h3 className="grey">A smooth, integrated experience between customer and restaurant.</h3>
          </div>
					<Row>
            <Col md={{span:10, offset:1}} sm={{span:8, offset:2}}>
            <img className="content-center img-fullwidth hidden-mobile" src="images/web/how-it-works-circle-v2.svg"/>
            <img className="content-center img-fullwidth visible-mobile" src="images/web/how-it-works-mobile-v2.svg"/>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <hr />
        <h2 className="orange">Integrated With</h2>
        <img src="images/web/square.svg" />
      </div>
      <div className="content-section light-bg">
        <div className="content-section-heading text-center">
          <h1>A Beautiful Ordering Experience</h1>
          <h3 className="grey">The feel of a native mobile app without the hassle.</h3>
        </div>
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <div className="text-center content-center">
                <img src="images/web/phone-screenshot-v3.svg" style={{height:700, width:358}} />
              </div>
            </Col>
            <Col sm={12} md={6}>
              <img className="img-fullwidth" src="images/web/scan-with-pay-icons.svg" />
            </Col>

          </Row>
        </Container>
      </div>
      <div className="content-section">
        <div className="content-section-heading text-center">
          <h1>Flexible & Convenient in Difficult Times</h1>
          <h3 className="grey">Kroo can be used across many different ordering and payment experiences.</h3>
        </div>
        <Container>
          <Row className="visible-mobile text-center">
            <Col sm={{span:10, offset:1}}  className="image-text-col">
              <h2>Outdoor Seating</h2>
              <h4 className="grey">Customers can order directly from their outdoor tables. Orders can be served to tables OR picked up.</h4>
              <img className="img-fullwidth rnd" src="images/web/outdoor-seating.svg" alt=" Restaurant Contactless Ordering" />
            </Col>
          </Row>
          <Row className="visible-mobile text-center">
            <Col sm={{span:10, offset:1}}  className="image-text-col">
              <h2>Indoor Seating</h2>
              <h4 className="grey">Kroo can be used to order directly from indoor tables working smoothly with max indoor capacity laws.</h4>
              <img className="img-fullwidth rnd" src="images/web/indoor-seating.svg" alt=" Restaurant Contactless Ordering" />
            </Col>
          </Row>
          <Row className="visible-mobile text-center">
            <Col sm={{span:10, offset:1}}  className="image-text-col">
              <h2>Line Overflow</h2>
              <h4 className="grey">Whether it's an indoor or outdoor line, Kroo can be used to help speed order processing with posters.</h4>
              <img className="img-fullwidth rnd" src="images/web/waiting-line.svg" alt=" Restaurant Contactless Ordering" />
            </Col>
          </Row>
          <Row className="hidden-mobile">
            <Col sm={8} className="image-text-col">
              <img className="content-left img-fullwidth rnd" src="images/web/outdoor-seating.svg" alt=" Restaurant Self Ordering" />
            </Col>
            <Col sm={4} className="image-text-center">
              <h2>Outdoor Seating</h2>
              <h4 className="grey normal-weight">Customers can order directly from their outdoor tables. Orders can be served to tables OR picked up.</h4>
            </Col>
          </Row>
          <Row className="hidden-mobile">
            <Col sm={4} className="image-text-center">
              <h2>Indoor Seating</h2>
              <h4 className="grey normal-weight">Kroo can be used to order directly from indoor tables working smoothly with max indoor capacity laws.</h4>
            </Col>
            <Col sm={8} className="image-text-col">
              <img className="content-left img-fullwidth rnd" src="images/web/indoor-seating.svg" alt=" Restaurant Self Ordering" />
            </Col>
          </Row>
          <Row className="hidden-mobile">
            <Col sm={8} className="image-text-col">
              <img className="content-left img-fullwidth rnd" src="images/web/waiting-line.svg" alt=" Restaurant Self Ordering" />
            </Col>
            <Col sm={4} className="image-text-center">
              <h2>Line Overflow</h2>
              <h4 className="grey normal-weight">Whether it's an indoor or outdoor line, Kroo can be used to help speed order processing with posters.</h4>
            </Col>
          </Row>
        </Container>
      </div>
      <hr />
      <div className="content-section text-center">
        <div className="content-section-heading-sm text-center">
          <h1>Get your restaurant <span className="orange">up to speed.</span> </h1>
          <h3 className="grey">Be up and running in days.</h3>
        </div>
        <Container>
        <Row>
          <Col md={{span:8, offset:2}}>
            <MailchimpSubscribe
              url={mcListUrl}
              render={({ subscribe, status, message }) => (
                <div>
                  <MCContactForm
                    status={status}
                    message={message}
                    onValidated={formData => subscribe(formData)}
                  />
                </div>
              )}
            />
            </Col>
          </Row>
        </Container>
      </div>
    </MainLayout>
  )
}
