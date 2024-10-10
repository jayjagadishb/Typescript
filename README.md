Typescript code never runs in your browser. browser can only understand javascript.It is strictly typed.
Typescript is something that compiles down to javascript.
compile time check is added to the typescript for type checking and if it fails then error occurs in conversion to javascript.

steps to install tsc/typescript globally:
step1: npm i -g typescript
step2: mkdir node-app
cd node-app
npm init -y
npx tsc --init

To run ts file command : tsc -b
then a js file will be made automatically and we need to run the js file as browser understand that only. command to run it: node <filename>

typescript types : number,string,boolean,null,undefined.

type and interface are exactly same but with interface we can implement class. and with type we can have multiple types for a parameter of a function. for interface also we can have muitiple types.

TS never goes to the production it is only part of build dependency.
