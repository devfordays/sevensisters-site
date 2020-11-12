import MainLayout from '../components/Layout/Main';
import {Row, Col, Container, Button} from 'react-bootstrap';
import MCContactForm from '../components/Forms/Contact';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

export default function ContactPage() {
  const mcListUrl = 'https://munnypay.us20.list-manage.com/subscribe/post?u=5d15bb3bcc56e1576485ea90e&id=16a205d15e';
  return (
    <MainLayout>
      <div className="content-section text-center">
        <a className="orange" href="mailto:support@getkroo.com">
          <img style={{width:32,height:'auto'}} src="images/web/icons/email.svg"/> support@getkroo.com
        </a>
        <div className="content-section-heading-sm">
          <h1>Contact Our Team</h1>
          <h3 className="grey">Hear back from us in one business day or less.</h3>
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
