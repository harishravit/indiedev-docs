---
prev: false
next: false
---

# Typescript syntax-sheet-cheat

## Syntax for type `basic types`

> [!note]
> I just mention the <code> <...> </code> for just styling not syntax in
> typescript.but it as a function syntax we see about upcoming session.

:::code-group

```ts [index.ts]
/* string,number,boolean*/
<variablKeyword> <variableName>:<variableType> =<value>
/* array
<variablKeyword> <variableName>:<variableType>[] =[<value>]
/* object
<variablKeyword> <variableName>:<{value:type,value:type..}> ={value}
```

```ts [Example]
const typeString: string = "Harish R";
const typeNumber: number = 2;
const typeBoolean: boolean = true;
const typeArray: number[] = [1, 2, 4];
const typeObject: { name: string } = { name: "Harish R" };
```

:::
