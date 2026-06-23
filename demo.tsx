// Generic function
function getValue<T>(item: T[]): T[] {
    return item;
}
const strings = getValue(['Saurav', 10]);
console.log(strings);

// Interface
interface user {
    id: number | string;
    title: string;
    desc: string;
} 
// Interface Extension : user will extend the user interface and add age property
interface user {
    age: number;
    salary?: number; // optional property
}

// when we are using interface which is extended, then it is mandatory to provide the age property in the object, otherwise it will throw an error
const saurav: user = {
    id: 'saurv',
    title: "Lala Bhai",
    desc: "new user",
    age: 32
}
console.log(saurav);

// Type alias - primitives, unions, intersections, tuples, and mapped types

// Primitives - The assigned value must match the exact primitive type specified.

const userId: number = 123;
const userName: string = "Saurav";
const isLoggedIn: boolean = true;

console.log("Primitives log:", userId, userName, isLoggedIn);

// Union - The assigned value can be one of the specified types.
type song = string | number
const songs: song = 120;
const songName: song = "Chal Chalein apne ghar";

console.log("Union log:",songs, songName);

// Intersection - The assigned value must satisfy all the specified types.
type userDetails = {
    id: number | string;
    title: string;
    desc: string;
}
type users = {
    age: number;
    salary?: number;
}
const sohan: users & userDetails = {
    id: 'sohan',
    title: "Another Song",
    desc: "new user",
    age: 25,
    salary: 250000
}

console.log(sohan);

// Tuple - The assigned value must be an array with a fixed number of elements, where each element has a specific type.
type userTuple = [number, string, boolean];
const userInfo: userTuple = [1, "Saurav", true];
console.log("Tuple log:", userInfo);

// Mapped Types - The assigned value is derived from another type, where each property is transformed based on a mapping function.
type User = { id: number; name: string };

// if we are using readonly mapped type, then we cannot change the value of the properties of the object, otherwise it will throw an error
type ReadonlyUser = { readonly [K in keyof User]: User[K] }; 
const client: ReadonlyUser = { id: 1, name: "Emma" };
console.log(client);

// if we are using mapped type without readonly, then we can change the value of the properties of the object
type EditableUser = {[K in keyof User]: User[K] }; 
const EditableClient: EditableUser = { id: 1, name: "Hamma" };

console.log(EditableClient);

EditableClient.id = 2;
EditableClient.name = "khamma";

console.log(EditableClient);