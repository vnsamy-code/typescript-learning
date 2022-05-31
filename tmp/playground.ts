console.log('it works...');

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

console.log(`Name field value is: ${field}`)