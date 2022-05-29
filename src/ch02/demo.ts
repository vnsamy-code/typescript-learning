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

// -----------------------------------------------------Usage area-----------------------------------------------------

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