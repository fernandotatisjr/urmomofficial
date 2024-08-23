class metaElements extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <meta content="IE=edge" http-equiv="X-UA-Compatible">
            <meta content="width=device-width,initial-scale=1.0,maximum-scale=1" name="viewport">
            <meta content="telephone=no" name="format-detection">
            <link rel="icon" href="" type="image/png">
              <meta name="generator" content="">
            <base href="">
            <meta http-equiv="content-type" content="text/html; charset=utf-8"></meta>`
    }
}

customElements.define('meta-elements',metaElements)