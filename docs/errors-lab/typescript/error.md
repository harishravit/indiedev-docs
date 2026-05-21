---
prev: false
next: false
---

# typescript errors

:::code-group

```ts:line-numbers [index.ts]
let name: string = "hello world";

name = 10;
Error: Type 'number' is not assignable to type 'string'.// [!code error];
/*
TypeScript : Hey, the variable "name" is already defined as a string.
ButYou are trying to assign a number.I will not allow.
because the type is fixed.*/
```

```js:line-numbers [index.js]
let name: string = "hello world";

name = 10;
Error: Type 'number' is not assignable to type 'string'.// [!code error];
/*
TypeScript : Hey, the variable "name" is already defined as a string.
ButYou are trying to assign a number.I will not allow.
because the type is fixed.*/
```

:::
