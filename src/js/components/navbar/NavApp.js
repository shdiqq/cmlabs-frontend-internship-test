import { css, html, LitElement } from 'lit';

class NavApp extends LitElement {
  static styles = css`
    .navbar-container {
      background: white;
      position: fixed;
      z-index: 5;
      width: 100%;
    }

    .navbar-container .navbar-section {
      margin: auto;
      width: 85%;
      padding: 1em;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .navbar-container .navbar-section .navbar-left .brand-name a {
      color: #000000;
      text-decoration: none;
      border: none;
    }

    .navbar-container .navbar-section .navbar-right {
      display: flex;
      gap: 24px;
      flex-direction: row;
    }
  `;

  static properties = {
    brandName: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('brandName')) {
      throw new Error(`Atribut "brandName" harus diterapkan pada elemen ${this.localName}`);
    }
  }

  render() {
    return html`
      <nav class="navbar-container">
        <div class="navbar-section">
          <div class="navbar-left">
            <h1 class="brand-name"><a href="/">${this.brandName}</a></h1>
          </div>
          <div class="navbar-right">
            <nav-links></nav-links>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('nav-app', NavApp);
