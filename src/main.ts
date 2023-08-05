import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import style from './style-hmr.ts'

class SampleElement extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: "open" })
    shadow.innerHTML = `<div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
      </a>
      <h1>Vite + TypeScript</h1>
      <div class="card">
        <button id="counter" type="button"></button>
      </div>
      <p class="read-the-docs">
        Click on the Vite and TypeScript logos to learn more
      </p>
    </div>`
    shadow.appendChild(style)
  }
}

customElements.define('sample-element', SampleElement)
 
const sampleElement = document.querySelector<SampleElement>('#app')!

setupCounter(sampleElement.shadowRoot!.querySelector<HTMLButtonElement>('#counter')!)
