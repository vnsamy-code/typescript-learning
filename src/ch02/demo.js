// -----------------------------------------------------Definition area-----------------------------------------------------
// enum
var ContactStatus;
(function (ContactStatus) {
    ContactStatus[ContactStatus["Active"] = 0] = "Active";
    ContactStatus[ContactStatus["Inactive"] = 1] = "Inactive";
    ContactStatus[ContactStatus["New"] = 2] = "New";
})(ContactStatus || (ContactStatus = {}));
function getFieldValue(source, property) {
    return source[property];
}
// generic keyOf example
function tGetFieldValue(source, property) {
    return source[property];
}
// -----------------------------------------------------Usage area-----------------------------------------------------
console.log('hello...');
var primaryContact = {
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
};
var addressableContact = {
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
};
var value = getFieldValue(primaryContact, "name");
console.log(value);
var tValue = tGetFieldValue(primaryContact, "postalCode");
console.log(value);
