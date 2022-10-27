# Swiss Defibrillator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## Deployment Setup

Use angular pre-rendering, this allows to serve a static site.

Currently we use [netfly](), note that set `NODE_ENVIRONMENT` in netfly to `17.16.1` due to an angular
build issue (with pre-rendering).


> Dynamic routes can be added as well, see [doc](https://angular.io/guide/prerendering)

> Note, if adding routes is an issue, fall back to using `npm run build` and server non static SPA.

## Deployment strategy

On push to `master` execute `npm run prerender`.

## TODO before deploy

- [ ] Setup Netfly custom domain.

## Feature request (sorted by importance)

- [ ] Google ad words
- [ ] Mobile friendly
- [ ] Multi language support i18 (or add simple lang interface)
- [ ] Dynamic page creation per product, good [example](https://shop.vnbeans.com/products/hung-farm-washed-officially-the-best-vietnamese-specialty-coffee)
- [ ] Nicer images (e.g. Certification image)
- [ ] Pick a good Font
- [ ] Add search bar in products and filter items
- [ ] Analyze SEO
