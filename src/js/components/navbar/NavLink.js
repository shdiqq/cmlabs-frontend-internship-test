import { LitElement, css, html } from 'lit';

class NavLink extends LitElement {
  static styles = css`
    li {
      list-style-type: none;
    }

    a,
    a li {
      font-size: 20px;
      text-decoration: none;
      font-size: 16px;
      color: black;
    }

    a.nav-link li:hover {
      border-bottom: 1px solid black;
    }

    @media screen and (max-width: 675px) {
      li {
        background: rgb(245, 245, 245);
        border-radius: 0.5em;
        padding: 1em 0;
        text-align: center;
      }

      a.nav-link li:hover {
        border-bottom: none;
      }
    }

    @media screen and (min-width: 920px) {
      a li {
        font-size: 20px;
      }
    }
  `;

  static properties = {
    content: { type: String, reflect: true },
    to: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('to')) {
      throw new Error(`Atribut "to" harus diterapkan pada elemen ${this.localName}`);
    }
  }

  render() {
    if (this.to === '') {
      return html`
        <a>
          <li class="nav-item">${this.content}</li>
        </a>
      `;
    } else {
      return html`
        <a class="nav-link" href="${this.to}">
          <li class="nav-item">${this.content}</li>
        </a>
      `;
    }
  }
}

customElements.define('nav-link', NavLink);
