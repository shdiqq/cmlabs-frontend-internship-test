import { LitElement, html, css } from 'lit';

class NavLinks extends LitElement {
  static styles = css`
    button {
      display: none;
    }

    ul {
      display: flex;
      flex-direction: row;
      lign-self: center;
      gap: 2em;
    }

    @media screen and (max-width: 675px) {
      button.show {
        display: block;
        font-size: 36px;
        border: none;
        background: none;
      }

      button.hide {
        display: none;
      }

      .nav-link {
        width: 100%;
        height: 300px;
        z-index: 7;
        position: absolute;
        left: 0;
        overflow: hidden;
      }

      ul {
        background: white;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1em;
        padding: 12px;
        position: relative;
        bottom: 100%;
        transition: 0.5s;
      }

      ul.open {
        bottom: 0;
      }

      ul nav-link {
        width: 90%;
      }
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <button @click=${() => this._showNavLink()} class="show" aria-label="navigation-menu-open">≡</button>
      <button @click=${() => this._hideNavLink()} class="notShow" aria-label="navigation-menu-close">x</button>
      <div class="nav-link">
        <ul>
          <nav-link content="Home" to="/"></nav-link>
          <nav-link content="Foods" to="/"></nav-link>
          <nav-link content="Ingredients" to=""></nav-link>
          <nav-link content="Local Culinary" to=""></nav-link>
          <nav-link-auth></nav-link-auth>
        </ul>
      </div>
    `;
  }

  _showNavLink() {
    const ul = this.shadowRoot.querySelector('ul');
    const buttonHamburger = this.shadowRoot.querySelector('button.show');
    const buttonClose = this.shadowRoot.querySelector('button.notShow');
    ul.classList.add('open');
    buttonHamburger.classList.remove('show');
    buttonHamburger.classList.add('notShow');
    buttonClose.classList.remove('notShow');
    buttonClose.classList.add('show');
  }

  _hideNavLink() {
    const ul = this.shadowRoot.querySelector('ul');
    const buttonClose = this.shadowRoot.querySelector('button.show');
    const buttonHamburger = this.shadowRoot.querySelector('button.notShow');
    ul.classList.remove('open');
    buttonClose.classList.remove('show');
    buttonClose.classList.add('notShow');
    buttonHamburger.classList.remove('notShow');
    buttonHamburger.classList.add('show');
  }
}

customElements.define('nav-links', NavLinks);
