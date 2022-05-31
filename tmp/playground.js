console.log('it works...');
function getFieldValue(source, property) {
    return source[property];
}
var contact = {
    id: 90,
    name: 'Cavin'
};
var field = getFieldValue(contact, "name");
console.log("Name field value is: ".concat(field));
