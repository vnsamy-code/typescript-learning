// custom types
interface Contact extends Address {
    id: number;
    name: ContactName;
    birthDate?: Date;
}

interface Address {
    line1: string,
    line2: string,
    province: string,
    region: string,
    postalCode: string
}

const primaryContact: Contact = {
    id: 12345,
    name: 'Cavin',
    birthDate: new Date('01-01-1980'),
    line1: 'line1',
    line2: 'line1',
    province: 'province',
    region: 'region',
    postalCode: '560016'
}

// new type alias
type ContactName = string;