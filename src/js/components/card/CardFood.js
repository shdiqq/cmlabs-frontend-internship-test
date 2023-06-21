import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class CardFood extends LitWithoutShadowDom {
  static properties = {
    id: { type: String, reflect: true },
    name: { type: String, reflect: true },
    photoUrl: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.id = '';
    this.name = '';
    this.photoUrl = '';
  }

  render() {
    if (this.id !== '') {
      return html`
        <a href="/detail/meal.html?meal_id=${this.id}">
          <div
            class="card-food-image"
            style="background-image: url('${this.photoUrl}');"
          >
            <div class="card-food-background">
              <div class="card-food-body">
                <h1 class="card-food-title fs-2">${this.name}<br /></h1>
              </div>
            </div>
          </div>
        </a>
      `;
    } else {
      return html`
        <a href="/detail/category.html?category_name=${this.name}">
          <div
            class="card-food-image"
            style="background-image: url('${this.photoUrl}'); height: 250px;"
          >
            <div class="card-food-background">
              <div class="card-food-body">
                <h1 class="card-food-title fs-2">${this.name}<br /></h1>
              </div>
            </div>
          </div>
        </a>
      `;
    }
  }
}

customElements.define('card-food', CardFood);
