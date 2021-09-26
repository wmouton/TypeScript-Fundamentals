type ID1 = string;
type PopularTag1 = string;
type MaybePopularTag = string | null;

interface UserInterface {
    id: ID1;
    name: string
    surname1: string
}

const popularTag1: PopularTag1[] = ["dragon", "coffee"]

const dragonsTag: MaybePopularTag = "dragon";

let username2: string = "Developer";

let pageNumber2: string | number = "1";

let errorMessage2: string | null = null;

let user2: UserInterface | null = null;

let someProp2: string | number | null | undefined | string[] | object

console.log(username2, pageNumber2, errorMessage2, user2, someProp2);