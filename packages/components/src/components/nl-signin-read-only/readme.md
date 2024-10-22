# nl-signin-read-only

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type     | Default                                                   |
| ------------- | ------------- | ----------- | -------- | --------------------------------------------------------- |
| `description` | `description` |             | `string` | `'Please enter the user name or npub of any Nostr user.'` |
| `titleLogin`  | `title-login` |             | `string` | `'Log in to read only'`                                   |


## Events

| Event             | Description | Type                  |
| ----------------- | ----------- | --------------------- |
| `nlCheckLogin`    |             | `CustomEvent<string>` |
| `nlLoginReadOnly` |             | `CustomEvent<string>` |


## Dependencies

### Used by

 - [nl-auth](../nl-auth)

### Depends on

- [button-base](../button-base)

### Graph
```mermaid
graph TD;
  nl-signin-read-only --> button-base
  nl-auth --> nl-signin-read-only
  style nl-signin-read-only fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
