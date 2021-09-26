type ID = string;
type PopularTag = string;

interface UserInterface {
    id: ID;
    name: string
    surname1: string
}

const popularTags: PopularTag[] = ["dragon", "coffee"]

let username1: string = "Developer";

let pageNumber1: string | number = "1";

let errorMessage1: string | null = null;

let user1: UserInterface | null = null;

let someProp1: string | number | null | undefined | string[] | object

console.log(username1, pageNumber1, errorMessage1, user1, someProp1);