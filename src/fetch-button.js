import { LitElement, html, css } from 'lit-element';

class FetchButton extends LitElement {
  static get properties() {
    return {
      button: { type: Boolean },
      url: { type: String },
      buttonText: { type: String },
      responseData: { type: Object },
      name: { type: String },
      email: { type: String },
      body: { type: String },
    };
  }

  static get styles() {
    return css`
      button {
        padding: 8px;
        border-radius: 4px;
        background-color: #007bff;
        color: #fff;
        cursor: pointer;
        font-size: 16px;
      }
    `;
  }

  constructor() {
    super();
    this.url = '';
    this.buttonText = '';
    this.responseData = null;
  }

  async fetchData() {
    try {
      const response = await fetch(this.url);
      this.responseData = await response.json();
      this.requestUpdate();
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    console.log(this.responseData, 'aqui es');
    return html`
      ${this.button &&
      html`<button @click=${this.fetchData}>${this.buttonText}</button>
        <button @click=${this.fetchData}>Clear Data</button>`}
      ${this.responseData
        ? html`
            <ul>
              ${this.responseData.map(
                (data) =>
                  html`<li>Name Fetch: ${data.name}</li>
                    <li>Email Fetch:${data.email}</li>
                    <li>Body: Fetch${data.body}</li>`
              )}
            </ul>
          `
        : ''}
      ${this.name &&
      html` <ul>
        <li>Name: ${this.name}</li>
        <li>Email: ${this.email}</li>
        <li>Body: ${this.body}</li>
      </ul>`}
    `;
  }
}

customElements.define('fetch-button', FetchButton);
export { FetchButton };
