import React from 'react';

const EMAIL = 'aamujou1@gmail.com';

function ContactPage() {
  return (
    <article className="static-page">
      <header className="static-page-header">
        <h2>Contact</h2>
      </header>

      <p className="contact-email">
        <a href={`mailto:${EMAIL}?subject=%5BHBTI%5D%20`}>{EMAIL}</a>
      </p>
    </article>
  );
}

export default ContactPage;
