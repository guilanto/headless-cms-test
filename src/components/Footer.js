import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>
          Section reserved to the footer
          <br/>
          <a href="./" target="_blank" rel="noopener noreferrer">
            <img className="footer-logo" src="/images/pixum_logo.png" alt="Gray Prismic logo"/>
          </a>
        </p>
      </footer>
    );
  }
}