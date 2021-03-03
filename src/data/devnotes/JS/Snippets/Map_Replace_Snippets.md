Useful for using with https://marketplace.visualstudio.com/items?itemName=Yukai.map-replace-js

## camelCase -> Sentence Case
```js
(v, i) => `${v[0].toUpperCase()}${v.slice(1).replace( /([A-Z])/g, " $1" )}`
```

## snake_case -> camelCase
```js
(v, i) => `${v.replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', ''))}`
```
