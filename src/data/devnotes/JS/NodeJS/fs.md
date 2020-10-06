```javascript
fs.readdirSync(
  path.join(process.cwd(), "src/data/devnotes"),
)

fs.readFileSync(
  path.join(process.cwd(), `src/data/devnotes/asd.md`),
  "utf8",
)
```