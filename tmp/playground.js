console.log('it works...');
function getFieldValue(source, property) {
    return source[property];
}
var contact = {
    id: 90,
    name: 'Cavin'
};
var field = getFieldValue(contact, "id");
console.log("Name field value is: ".concat(field));
// typeof operator example
var range = { min: 1, max: 100 };
function printRange(params) {
    console.log("min from: ".concat(params.min, " and max to: ").concat(params.max));
}
// ❌ getRange({ x: 1000, y: 1000 }); - This won't work since the property names are different.
printRange({ min: 900, max: 1000 });
// Record type example
var license = {
    'testuser': 12345
};
license.anotherTestUser = 099876;
console.log("License: ".concat(JSON.stringify(license)));
// Record type with keyof
var eContact = {
    id: 1244,
    name: 'Cavin'
};
var person = {
    name: 'Person-Cavin'
};
var employee = {
    name: 'Student-Cavin'
};
function getFieldValueAcceptingRecord(obj) {
    console.log("Record input is: ".concat(JSON.stringify(obj)));
}
getFieldValueAcceptingRecord({ "name": eContact });
function printUserDetails(user) {
    console.log("===> NAME: ".concat(user.name));
}
printUserDetails({ name: 's/w dev' });
// class implementing interface
var AppType;
(function (AppType) {
    AppType[AppType["Web"] = 0] = "Web";
    AppType[AppType["Mobile"] = 1] = "Mobile";
    AppType[AppType["Desktop"] = 2] = "Desktop";
})(AppType || (AppType = {}));
var Application = /** @class */ (function () {
    function Application(version, type, canDeployRemote) {
        this.canDeployRemote = canDeployRemote;
        this.version = version;
        this.type = type;
    }
    Application.prototype.printDeploymentOption = function () {
        console.log("Application can be deployed: ".concat(this.canDeployRemote ? 'Remotely' : 'On-prem'));
    };
    return Application;
}());
var webApp = new Application('1.2', AppType.Web, true);
webApp.printDeploymentOption();
var mobileApp = new Application('3.7', AppType.Mobile, false);
mobileApp.printDeploymentOption();
