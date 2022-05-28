interface FContact {
    id: number,
    name: string
}

function clone(source: FContact): FContact {
    return Object.apply({}, source);
}

// can also send function as a parameter
function fClone(source: FContact, func: (source: FContact) => FContact): FContact {
    return Object.apply({}, source);
}