// -----------------------------------------------------Definition area-----------------------------------------------------

// new type alias
type ContactName = string;

type ContactBirthDate = Date | number | string;

// enum
enum ContactStatus {
    Active,
    Inactive,
    New
}

// The same enum can be rewritten to contain all the states with string;
type TContactStatus = "active" | "inactive" | "new";

// Keyof operator example
type ContactField = keyof Contact;

// typeof operator example
var range = { min: 1, max: 100 };
function printRange(params) {
    console.log("min from: ".concat(params.min, " and max to: ").concat(params.max));
}

// custom types
interface Contact extends Address {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate;
    status: ContactStatus;
    tStatus: TContactStatus;
}

interface Address {
    line1: string,
    line2: string,
    province: string,
    region: string,
    postalCode: string
}

type AddressableCOntact = Contact & Address;

function getFieldValue(source, property: ContactField) {
    return source[property];
}

// generic keyOf example
function tGetFieldValue<T>(source: T, property: keyof T) {
    return source[property];
}

// indexed typeof example
interface TYContact {
    name: Contact["name"];      // The type of name is the type of of the `name` property in `Contact` object.
}

// Record type example
const license: Record<string, number> = {
    'testuser': 12345
};
license.anotherTestUser = 099876;

// Partial example
type pContact = Partial<Record<keyof Contact, string>>; // hover over to see all are optional.


// -----------------------------------------------------Usage area-----------------------------------------------------

console.log('hello...');

const primaryContact: Contact = {
    id: 12345,
    name: 'Cavin',
    birthDate: new Date('01-01-1980'),
    status: ContactStatus.Active,
    tStatus: "active",
    line1: 'line1',
    line2: 'line1',
    province: 'province',
    region: 'region',
    postalCode: '560016'
}

const addressableContact: AddressableCOntact = {
    id: 12345,
    name: 'Cavin',
    birthDate: new Date('01-01-1980'),
    status: ContactStatus.Active,
    tStatus: "new",
    line1: 'line1',
    line2: 'line1',
    province: 'province',
    region: 'region',
    postalCode: '560016'
}

const value = getFieldValue(primaryContact, "name");
console.log(value);

const tValue = tGetFieldValue(primaryContact, "postalCode");
console.log(value);

const looseObject = tGetFieldValue({ min: 10, max: 100 }, "min");

// ❌ printRange({ x: 1000, y: 1000 }); - This won't work since the property names are different.
printRange({ min: 900, max: 1000 });
