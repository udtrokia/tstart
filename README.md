
## Typescrit training following docs step by step 🤺

### Where can we declare types ?

+ what are different?
+ which should declare, and how?
+ keep words and special symbol.
  + `interface, type, namespace, declare, enum`
  + `< >`, `:`, 
  + `<T>foo && foo<T>`



### TsLint Config  

_use ts-node and tslint to check grammer._  

```json
{
    "scripts":{
        "lint": "ts-node tslint -c tslint.json './tsrc/**/*.{ts.tsx}'"
    }
}
```  

### Types  

_the "<>" in type declaration._  

```
// Array
let list: Array<number> = [1, 2, 3];

// Assertions
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
```  

### Interface  

_?: in interface:_  

```typescript
interface SquareConfig{
    color?: string;
    width?: number;
}
```  

## extends and implement  
calss use `implement` can't change the interface's declare while `extends` can copy and change it.

### 
