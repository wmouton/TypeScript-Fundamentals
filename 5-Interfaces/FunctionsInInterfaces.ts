interface UserInterface {
    name: string;
    age?: number;
    getMessage(): string;
}

const dv: UserInterface = {
    name: "Developer",
    age: 250,
    getMessage() {
        return "Hello" + name;
    },
}

const ds: UserInterface = {
    name: "Designer",
    age: 250,
    getMessage() {
        return "Hello" + name;
    },
};

const wt: UserInterface = {
    name: "WebAppTester",
    getMessage() {
        return "Hello" + name;
    },
}

console.log(dv.name, ds.name, wt.name);
