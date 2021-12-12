type FilterConditionally<Source, Condition> = Pick<Source,
  { [K in keyof Source]:
    Source[K] extends Condition
    ? K
    : never
  }[keyof Source]>;


interface Sample {
  property1: string; // ✅  NOT filtered out
  property2: string; // ✅  NOT filtered out
  property3: number; // ❌ filtered out
  property4: boolean; // ❌ filtered out
}
type NewType = FilterConditionally<Sample, string>

/*
type NewType = {
    property1: string;
    property2: string;
}
*/

// how it works
type MarkUnwantedTypesAsNever<Source, Condition> =
  { [K in keyof Source]: Source[K] extends Condition
    ? K
    : never
  }

interface Sample {
  property1: string; // string extends string ? ✅  set "property1"
  property2: string; // string extends string ? ✅ set "property2"
  property3: number; // number extends string ? ❌ set never
  property4: boolean; // boolean extends string ? ❌ set never
}

type Result = {
  property1: "property1";
  property2: "property2";
  property3: never;
  property4: never;
}

// union types of keys
/*

We’re looking for a way to transform Result into Type ResultAfterSecondTransformation = "property1" | "property2" .
We can do this by adding an index access type.

type MarkUnwantedTypesAsNever<Source, Condition> =
   {[K in keyof Source]: Source[K] extends Condition ? K : never}[keyof Source]

   Let’s look at what this type does to if we pass our Sample type to it: MarkUnwantedTypesAsNever<Sample, string> .

   type Result = {
   property1: "property1";
   property2: "property2";
   property3: never; // ❌ we want this gone
   property4: never; // ❌ we want this gone
}["property1" | "property2" | "property3" | "property4"]

Remember! When we access a property of an interface via an index, we receive the type of that property:

type Access = {property1: "foo"}["property1"] // -> "foo";

If we do the same for two properties, we’re building a union type:

type Access = {property1: "foo"; property2: "bar"}["property1" | "property2"]

// Result: type Deepdive = "foo" | "bar"

If we try to access the type of a property with a never type, the never type will not be included in the resulting union.
type Access = {property1: "foo"; property2: never}["property1" | "property2"]

// Result: type Deepdive = "foo"

Understanding why never types get filtered out is often hard since it requires some knowledge of sets. If you’re interested in learning more, read the disclaimer below.

*/

type CreateUnionOfWantedPropertyKeys<Source, Condition> =
  { [K in keyof Source]: Source[K] extends Condition
    ? K
    : never
  }[keyof Source]

// picking the types we want
type FinalType<Source, Condition> = Pick<Source, CreateUnionOfWantedPropertyKeys<Source, Condition>>;

