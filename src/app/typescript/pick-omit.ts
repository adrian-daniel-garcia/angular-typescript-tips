// interface Stores {
//   user: User,
//   theme: Theme
//   // ... some others
// }

// interface AvatarProps {
//   user: User,
//   rounded: boolean
//   // ... some others
// }

// interface AvatarProps extends Pick<Stores, "user"> {
//   rounded: boolean
//   // ... some others
// }

interface Foo {
  key1: number,
  key2: number,
  key3: number
}

type FooPicked = Pick<Foo, "key1" | "key2">

/*

This will result in a type like that:

interface FooPicked {
  key1: number,
  key2: number
}

*/

interface Foo {
  key1: number,
  key2: number,
  key3: number
}

type FooOmited = Omit<Foo, "key1" | "key2">

/*

This will result in a type like that:

interface FooOmited {
  key3: number
}

*/


