// Partial
// We were talking about the store so let continue with that.In this case let think about action, mutation, or anything that will do an update.For example, let use the old setState that React uses in classes as an example.
// state

// this.state = {
//   foo: "foo",
//   bar: "bar"
// }

// // mutation
// this.setState({
//   foo: "foo"
// })

// The method setState needs to receive just a part of the whole state, but we can't use Pick or Omit, because we don't know which will be the key that will be omitted.So, for these cases, we need to send a "partial interface" that will be merged with the whole interface.
// // state
// interface State {
//   foo: string,
//   bar: string
// }

// mutation
// type SetState = (value: Partial<State>) => State;

// But what is doing this Partial behind the scene, well it's not so complicated. It's just adding optional to each first - level property.
// state

interface State {
  foo: string,
  bar: string
}

type PartialState = Partial<State>;

/*

This will result in a type like that:

interface PatialState {
  foo?: string,
  bar?: string
}

*/
// You could find another case where you need to use it.Just remember that only put optional to first level properties, if you have nested object the child properties will not be impacted by this util.
