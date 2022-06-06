console.log('it works...');

// keyof operator example

interface Person {
    name: string
}

interface Student {
    name: string
}

interface Contact {
    id: number;
    name: string;
}

function getFieldValue<T, U extends keyof T>(source: T, property: U): T[U] {
    return source[property];
}

const contact: Contact = {
    id: 90,
    name: 'Cavin'
};

const field = getFieldValue(contact, "id");

console.log(`Name field value is: ${field}`);

// typeof operator example

const range = { min: 1, max: 100 };

function printRange(params: typeof range) {
    console.log(`min from: ${params.min} and max to: ${params.max}`);
}

// ❌ getRange({ x: 1000, y: 1000 }); - This won't work since the property names are different.
printRange({ min: 900, max: 1000 });

// Record type example
const license: Record<string, number> = {
    'testuser': 12345
};
license.anotherTestUser = 099876;

console.log(`License: ${JSON.stringify(license)}`);

// Record type with keyof

const eContact: Contact = {
    id: 1244,
    name: 'Cavin'
};

const person: Person = {
    name: 'Person-Cavin'
};

const employee: Student = {
    name: 'Student-Cavin'
};

function getFieldValueAcceptingRecord(obj: Record<keyof Person, typeof person>) {
    console.log(`Record input is: ${JSON.stringify(obj)}`);
}

getFieldValueAcceptingRecord({ "name": eContact });

interface Developer extends Person {

}

function printUserDetails(user: Developer) {
    console.log(`===> NAME: ${user.name}`);
}

printUserDetails({ name: 's/w dev' });

// class implementing interface

enum AppType {
    Web,
    Mobile,
    Desktop
}

interface Deployment {
    canDeployRemote: boolean
}

class Application implements Deployment {
    version: string
    type: AppType

    constructor(version: string, type: AppType, readonly canDeployRemote: boolean) {
        this.version = version;
        this.type = type;
    }

    printDeploymentOption() {
        console.log(`Application can be deployed: ${this.canDeployRemote ? 'Remotely' : 'On-prem'}`);
    }
}

const webApp = new Application('1.2', AppType.Web, true);
webApp.printDeploymentOption();

const mobileApp = new Application('3.7', AppType.Mobile, false);
mobileApp.printDeploymentOption();