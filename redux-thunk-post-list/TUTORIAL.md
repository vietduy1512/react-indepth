# Flow of Redux
```sh
    action → reducer → store → View
```

# Step to make it work
  - Add action type →  Add  actions of features
  - Add reducers of features -> Add root reducer
  - Add store by using createStore() and compose()
  - Add <Provider store = {store}> in App.js
  - In features components, use :
    -     mapStateToProps = state => ({})
    -     export default connect(mapStateToProps, { <action here> })( <class component here> );
  - Call this.props.<> to use