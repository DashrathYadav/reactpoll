import React from 'react';
import { Container } from '../common/Container/index';
import { Wrapper, Details} from './styles';
import ContactForm from './ContactForm/index';
import './Contact.css';

function Contact(){
  return(
    <div className='Contact-main'>
      <h1 className='Contact-head'>Contact Us</h1>
    <Wrapper as={Container} id="contact">
      
      <Details>
        <ContactForm/>
      </Details>
    </Wrapper>
    </div>
  );
};

export default Contact;
