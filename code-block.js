import { LitElement, html, css, } from 'lit';
import 'prismjs/prism.js';

class CodeBlock extends LitElement {
  static get properties() {
     return {
      language: {
        type: String,
      },
      theme: {
        type: String,
      },
    }
  }

  constructor() {
    super();
    this.language = 'clike';
    this.theme = '/node_modules/prismjs/themes/prism.css';
    this.lineNumbers = false;
  }

  async firstUpdated() {
    await this.__loadLanguage();
    const nodes = this.shadowRoot.querySelector('#code').assignedNodes();
    let codeCombined = '';
    for (let index = 0, len = nodes.length; index < len; ++index) {
      codeCombined += nodes[index].nodeValue;
    }

    // strip the lead/end newlines so we don't look horrible
    const codeClean = codeCombined.replace(/^\s+|\s+$/g, '');
    const highlight = Prism.highlight(codeClean, Prism.languages[this.language],
      this.language);

    // Set to our styled block
    this.shadowRoot.querySelector('#output').innerHTML = highlight;
  }

  async __loadLanguage() {
    await import(`/node_modules/prismjs/components/prism-${this.language}.min.js`);
  }

  static get styles() {
    return css`
      #hide {
        display: none !important;
      }
    `;
  }

  render() {
    return html`
    <link rel="stylesheet" href="${this.theme}">
    <pre class="language-${this.language}"><code id="output"></code></pre>

    <div id="hide">
      <slot id="code"></slot>
    </div>
    `;
  }
}
customElements.define('code-block', CodeBlock);
