
# Typescrit training follow docs step by step 🤺

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

