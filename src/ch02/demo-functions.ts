interface FContact {
    id: number,
    name: string
}

function fClone(source: FContact): FContact {
    return Object.apply({}, source);
}

// can also send function as a parameter
function fAnotherClone(source: FContact, func: (source: FContact) => FContact): FContact {
    return Object.apply({}, source);
}