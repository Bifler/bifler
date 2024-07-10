


### create npm for eleventy and bootstrap css only
```
npm init -y
npm install @11ty/eleventy

```

### plugins
```
npm install @11ty/eleventy-plugin-nunjucks-date

```


### add these lines to package.json
```
"start": "npx @11ty/eleventy --serve",
"build": "npx @11ty/eleventy"
```

### use virtual env created by python venv module
On mac
```
source biflerVenv/bin/activate
```