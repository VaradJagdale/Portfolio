import React, { useRef, useState} from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [error, setError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const name = formData.get('your_name');
    const email = formData.get('your_email');
    const message = formData.get('message');

    if (!name || !email || !message) {
      setError('All fields are required!');
      return;
    }

    emailjs
      .sendForm('service_dtsarqu', 'template_zz25o39', form.current, 'pY1nXIUb8DacEs-dN')
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Email Sent!');
          e.target.reset();
          setError('');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    };

  return (
    <section id="contactPage">
       <h1 className="contactPageTitle">Contact Me</h1>
       <span className="contactDesc">"Feel free to reach out for opportunities, collaborations, or any questions—I’d love to connect!"</span>
       <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input type="text" className="name" placeholder="Your Name" name='your_name' autoComplete='off'/>
        <input type="email" className="email" placeholder="Your Email" name='your_email' autoComplete='off' />
        <textarea className="msg" name="message" rows="5" placeholder="Your Message" autoComplete='off'></textarea>
        <button type="submit" value="Send" className="submitBtn">Submit</button>
        {error && <div className="error">{error}</div>}
       </form>
    </section>
  )
}

export default Contact