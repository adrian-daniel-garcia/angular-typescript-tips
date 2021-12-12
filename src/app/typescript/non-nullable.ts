interface IPerson {
  name: string
}
type MaybePerson = IPerson | null
const fillMaybePerson = (maybe: MaybePerson): NonNullable<MaybePerson> => ({ name: maybe?.name || 'N/A' })

