- `noEmit` tells TS to not write any files to disk. Set this to `true` if you need it for typechecking only.
- TS is a superset of JS. All JS is valid TS.
- Adding types (or type info) to JS code by JSDoc syntax.
- If a library from NPM registry doesn't support TS:
    - You can build the type information yourself.
    - Or use TS support built by others. Example: https://github.com/DefinitelyTyped/DefinitelyTyped.
- .d.ts files are typescript declaration files.
- `birthDate?: Date | number | string; ==> This is the pipe syntax and allows you to define more than one type to a field.
- A `typealias` could be an alternative to `enum` in TypeScript.
    - Example: `type TContactStatus = "active" | "inactive" | "new"` and `// enum
enum ContactStatus {
    Active,
    Inactive,
    New
}` do the same job.
- A `union` type represents that a type can be one of the types piped |. Example: `nameOrContact: string | Contact`.
- `typeof` operator ensures that the same parameter structure is passed.
- `Record` type helps define multiple acceptable types. 
- Partial, Omit, Pick, Required - Use these if you want to modify existing types.

**Commands**:

- `tsc init` initializes a new tsconfig.json file.
- `tsc` to compile TS file.
- 