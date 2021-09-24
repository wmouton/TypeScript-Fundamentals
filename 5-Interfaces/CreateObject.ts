interface User {
    name: string;
    age?: number;
}

const dvlpr: User = {
    name: "Developer",
    age: 250
}

const dsgnr: User = {
    name: "Designer",
    age: 250
};

const webtester: User = {
    name: "WebAppTester"
}

console.log(dvlpr.name, dsgnr.name, webtester.name);