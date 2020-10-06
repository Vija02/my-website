```javascript
const ComposeProvider = ({ providers, children }) => {
  return providers.reverse().reduce((acc, Val) => <Val>{acc}</Val>, children)
}
() => (
<ComposeProvider providers={[AuthProvider, ...]}>
  <Root />
</ComposeProvider>
)
```
