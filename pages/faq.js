import MainLayout from '../components/Layout/Main';
import {Row, Col, Container, Accordion, Card, Button} from 'react-bootstrap';
import MCContactForm from '../components/Forms/Contact';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

export default function FaqPage(){
  const mcListUrl = 'https://munnypay.us20.list-manage.com/subscribe/post?u=5d15bb3bcc56e1576485ea90e&id=16a205d15e';
  return(
    <MainLayout>
      <div className="image-bg-banner faq-banner">
        <div className="overlay"></div>
        <h1 className="white text-center banner-header" style={{zIndex:50, position:'relative'}}>Frequently Asked Questions</h1>
      </div>
      <div className="content-section" style={{paddingTop:60}}>
        <Container>
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                  How long does it take to get Kroo setup ?
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Kroo takes approximately 5 minutes to setup and works seamlessly with the Square POS. The steps are 1. Choose A Plan 2. Enter Basic Restaurant Info 3. Sync your Square Account</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                  What is the price to use Kroo?
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Kroo is priced based on the number of locations your restaurant has. It is a low, fixed rate monthly fee for each location depending on the number of locations. To find out more please visit the <a href="/pricing" className="orange bold">pricing page.</a></Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
                  What payment methods does Kroo support ?
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>Apple Pay and Google Pay as well as all major credit cards (Visa, Mastercard, AMEX, and Discover) are supported on the Kroo platform.</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="3">
                  Do you ever sell my information to 3rd parties ?
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>Absolutely not. At Kroo, we pride ourselves on 100% data privacy...which means we will never sell your information to 3rd parties. </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="4">
                  Where is Kroo supported ?
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body>Kroo is supported at any restaurant using the Square POS brand. We will be integrating many other POS providers so join our waitlist by <a className='orange bold' href="/contact">contacting us.</a></Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="5">
                  I have a technical problem. Who should I email ?
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="5">
                <Card.Body><p>Contact us directly at <a className='orange bold' href="mailto:support@getkroo.com">support@getkroo.com</a></p></Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Container>
      </div>
      <hr />
      <div className="content-section text-center">
        <div className="content-section-heading-sm text-center">
          <h1>Get your restaurant <span className="orange">up to speed.</span> </h1>
          <h3 className="grey">Up and running in days.</h3>
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
