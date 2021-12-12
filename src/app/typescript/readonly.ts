interface Stores {
  readonly user: string,
  readonly theme: string
  // ... some others
}

type ReadonlyStores = Readonly<Stores>

const store: ReadonlyStores = {
  user: '',
  theme: '',
  // ... some others
}

// store.user = 'aa'    ERROR
