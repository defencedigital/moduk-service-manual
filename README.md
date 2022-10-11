# Service Manual - Ministry of Defence

Helping you meet service standards and do your role in Defence.

Install the long-term support (LTS) version of <a href="https://nodejs.org/en/">Node.js</a>, which includes npm.

## Run app for development

### 1. Clone repo

```
git clone https://github.com/defencedigital/service-manual-mod.git service-manual-mod
```

### 2. Navigate to project folder

```
cd service-manual-mod
```

### 3. Install npm packages

```
npm install
```

### 4. Run app
Watch for changes to `CSS`, `JS`, `Images`, `Nunjucks`. Automatically update the browser, without the need for a manual refresh.

```
npm run dev
```

Visit: <a href="http://localhost:8080">http://localhost:8080</a>

## Build app for production

Render `CSS`, `JS`, `Images`, `Nunjucks`. Compress files and generates `HTML` pages, ready for production. It also performs a [W3C validation](https://validator.w3.org) on `HTML`, to ensure everything is valid.

```
npm run prod
```
