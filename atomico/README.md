# rollup mjs

This configuration allows the creation of progressive applications (PWA) or design systems with Atomico, the project is managed thanks to [Rollup](https://rollupjs.org/).

The default entry is [**index.html**](./index.html), you can create as many as you like, since rollup using the plugin `@atomico/rollup-plugin-input-html`, is capable of scanning HTML files and extracting local modules , to group them in a single MJS bunde associated with the HTML file independently, the `dist` directory is the destination of the code processed by rollup and it is the directory that you must send to production.

Project assets such as images, svg or global styles must be added in the `dist` directory.

## Scripts

```bash
npm run build # production mode
npm run dev # development mode
```

## Export

The extraction of the js code depends on `rollup.config.js`, you can create more HTML files, since the capture of these is by means of the expression `*.html`, this capture is only done when starting Rollup.

### Directory recommendation for application

by default Atomico shows the following distribution to create applications.

```bash
index.html
/src
  # You can create HoCs or reusable ui that do not
  # need declaration as web-components
  /components
  # To create reusable logic between
  # components and web-components
  /hooks
    useCustomHook.js
  # You can create HoCs or reusable ui
  # that do not need declaration as WC
  /pages
  	/home
  		index.js
  		style.css
  # Components declared as web-components
  /web-components
    /hello-word
      index.js
      style.css
```

### Recommendation directory for design systems

if you create independent HTML files you can export the components independently, for a light export in production, comment the plugins `rollup-plugin-node-resolve` in`rollup.config.js`, in this way Atomico will not be part of the bundle.

```bash
ui-button.html # <script type="module" src="./src/web-component/ui-button">
ui-header.html # <script type="module" src="./src/web-component/ui-header">
/src
  /web-component
    /ui-button
      index.js
      style.css
    /ui-header
      index.js
      style.css
```

The result of dist will be something like this:

```
/dist
  ui-button.html
  ui-button.js
  ui-button.html
  ui-button.js
```

You can consume this resource using unpkg, example `http://unpkg.com/my-ui/dist/my-single-web-component?module`,unpkg will automatically add Atomico as a resource of the package.

## Activation of PWA

The file that comes by default `index.html`, has commented the following one taken. **Remove the comnetario and this code and enable the service worker**, this default is only updated when using `npm run build`.

```html
<!--Delete comment to activate PWA
<script>
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
  }
</script>
-->
```

#### remember to complete manifest.json and update previously generated icons
