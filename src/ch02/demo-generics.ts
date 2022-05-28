function clone<T>(source: T): T {
    return Object.apply({}, source)
}

const dateRange = { startDate: Date.now(), endDate: Date.now() }
const dateRangeCopy = clone(dateRange);

// ------------------------------------------------------------------
// Generics with constraints

interface GContact {
    id: number;
    name: string;
}

// interface UserContact<TExternalId> {
//     id: number;
//     name: string;
//     username: string;
//     externId: TExternalId;
// }

interface UserContact {
    id: number;
    name: string;
    username: string;
}

function anotherClone<T, U>(source: T): U {
    return Object.apply({}, source);
}

const contact: GContact = {
    id: 123,
    name: 'Cavin'
}

const contactClone = anotherClone<GContact, UserContact>(contact);