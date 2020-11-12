import {useState} from 'react';
import { Button, Form, Spinner, Alert } from 'react-bootstrap';

const MCContactForm = ({ status, onValidated }) => {
  const [alertStatus, setAlertStatus] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  let restname, posbrand, fname, email, phone ;

  const processAlert = (alertStatus, message) =>{
    setAlertVisible(true);
    setAlertStatus(alertStatus);
    setAlertMessage(message);
  }

  const submit = (e) => {
    console.log('inside submit');
    setFormSubmitted(false);
    e.preventDefault();
    if (restname && posbrand && fname && phone && email.value.indexOf("@") > -1) {
      //call subscribe method
      onValidated({
        EMAIL: email.value,
        RESTNAME: restname.value,
        FNAME: fname.value,
        POSBRAND: posbrand.value,
        PHONE: phone.value
      });
    }
    else {
      processAlert('danger', 'Please check to make sure all fields are correct before submitting.')
    }
  }

  const processMCResponse = (status) => {
    if (!formSubmitted){
      switch (status) {
        case 'success':
          processAlert('info', 'We have received your message and our team will be in touch shortly!');
          setFormSubmitted(true);
          break;
        case 'error':
          processAlert('danger',`There was an error submitting. Please reach us directly at support@getkroo.com` );
          setFormSubmitted(true);
          break;
        default:
      }
    }
  }
  const renderAlert = () => {
    return(
      <div className="alert-wrapper">
      {alertStatus.length >= 1 && alertMessage.length >=1 && alertVisible ? (
        <Alert
          variant={alertStatus}
        >
          {alertMessage}
        </Alert>
      ) : (
        <div className="empty-alert">Please fill in all required fields.</div>
      ) }
      </div>
    )
  }

  return (
    <Form className="form-with-spinner">
      {status === "sending" ?
        (<div className="spinner-wrapper">
          <Spinner
            animation="border"
            variant="primary"
            role="status"
            size="lg"
          />
        </div>) : (
          <div></div>
        )}
        {processMCResponse(status)}
        <Form.Group controlId="formRestoName">
          <Form.Control size="lg" type="text" required placeholder="Restaurant Name*" name="RESTNAME" ref={node => (restname = node)} />
        </Form.Group>
        <Form.Group controlId="posBrand">
            <Form.Control size="lg" as="select"  required placeholder="POS Brand*" name="POSBRAND"  ref={node => (posbrand = node)}>
              <option value="Square">Square</option>
              <option value="Toast">Toast</option>
              <option value="Clover">Clover</option>
              <option value="Oracle">Oracle</option>
              <option value="TouchBistro">TouchBistro</option>
              <option value="UpServe(Breadcrumb)">UpServe(Breadcrumb)</option>
              <option value="Revel">Revel</option>
              <option value="Other Brand">Other Brand</option>
            </Form.Control>
        </Form.Group>
        <Form.Group controlId="formFullName">
          <Form.Control size="lg" type="text" placeholder="Your Full Name*" required name="FNAME" ref={node => (fname = node)} />
        </Form.Group>
        <Form.Group controlId="formEmail">
            <Form.Control size="lg" type="email" required placeholder="Email*" name="EMAIL"  ref={node => (email = node)} />
        </Form.Group>
        <Form.Group controlId="formCell">
            <Form.Control size="lg" type="text" required placeholder="Cell Number*" name="PHONE"  ref={node => (phone = node)} />
        </Form.Group>
        <Form.Group>
          <Button variant="primary" className="full-width" type="submit" onClick={submit}>
            Submit
          </Button>
        </Form.Group>
        {renderAlert()}
      </Form>
  );
};
export default MCContactForm;
