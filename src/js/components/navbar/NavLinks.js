import { LitElement, html, css } from 'lit';

class NavLinks extends LitElement {
  static styles = css`
    button,
    ul button {
      display: none;
    }
    
    ul {
      list-style: none;
      display: flex;
      align-self: center;
      gap: 2em;
      flex-direction: row;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
    <button @click=${() => this._showNavLink()} aria-label="navigation-menu-open">☰</button>
    <ul>
      <button @click=${() => this._hideNavLink()} aria-label="navigation-menu-close">X</button>
      <nav-link content="Home" to="/"></nav-link>
      <nav-link content="Foods" to="/"></nav-link>
      <nav-link content="Ingredients" to="/"></nav-link>
      <nav-link content="Local Culinary" to="/"></nav-link>
      <nav-link-auth></nav-link-auth>
    </ul>
  `;
  }

  _showNavLink() {
    const ul = this.shadowRoot.querySelector('ul');
    const button = this.shadowRoot.querySelector('button');
    ul.classList.add('open');
    button.classList.add('hide');
  }

  _hideNavLink() {
    const ul = this.shadowRoot.querySelector('ul');
    const button = this.shadowRoot.querySelector('button');
    ul.classList.remove('open');
    button.classList.remove('hide');
  }
}

customElements.define('nav-links', NavLinks);
