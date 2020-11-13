class Contact {

    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.number = params[6];
        this.email = params[7];
    }
    get firstName() { return this._firstName; }
    set firstName(firstName) {
        let regName = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (regName.test(firstName)) {
            this._firstName = firstName;
        }
        else throw 'Incorrect first name';
    }
    get lastName() { return this._lastName; }
    set lastName(lastName) {
        let regName = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (regName.test(lastName)) {
            this._lastName = lastName;
        }
        else throw 'Incorrect last name';
    }
    get address() { return this._address; }
    set address(address) {
        let regName = RegExp('^[A-Za-z0-9]{4,}$');
        if (regName.test(address)) {
            this._address = address;
        }
        else throw 'Incorrect address';
    }
    get city() { return this._city; }
    set city(city) {
        let regName = RegExp('^[A-Za-z]{4,}$');
        if (regName.test(city)) {
            this._city = city;
        }
        else throw 'Incorrect city';
    }
    get state() { return this._state; }
    set state(state) {
        let regName = RegExp('^[A-Za-z]{4,}$');
        if (regName.test(state)) {
            this._state = state;
        }
        else throw 'Incorrect state';
    }
    get zip() { return this._zip; }
    set zip(zip) {
        let regEx = RegExp('^\\d{3}(\\s{0,1}\\d{3})$');
        if (regEx.test(zip)) {
            this._zip = zip;
        }
        else throw 'Incorrect zip';

    }

    get number() { return this._number; }
    set number(number) {
        let regEx = RegExp('^\\d{2}(\\s{1}\\d{10})$');
        if (regEx.test(number)) {
            this._number = number;
        }
        else throw 'Incorrect number';
    }

    get email() { return this._email; }
    set email(email) {
        let regEx = RegExp('^[a-zA-Z]+([._+-]{0,1}[a-zA-Z0-9]+)*@[a-zA-Z0-9]+.[(com)|(co)|(net)]+(?:\\.[a-z]{2,}){0,1}$');
        if (regEx.test(email)) {
            this._email = email;
        }
        else throw 'Incorrect email';

    }
    toString() {
        return '\nFirstName: ' + this.firstName + ' LastName: ' + this.lastName + ' Address: ' + this.address + ' City: ' + this.city + ' State : ' + this.state + ' Zip: ' + this.zip + ' Number: ' + this.number + 'Email: ' + this.email;
    }

}
//Function to update name in addressBook
function updateName(contact, oldName, newName) {
    contact.filter(person => person.firstName == oldName).forEach(person => person.firstName = newName);
}
//Function to add name in addressBook
function addName(contactArray, contact) {
    for (contacts in contactArray) {
        if (contacts.firstName == contact.firstName) {
            throw 'Name already taken';

        }
    }
    contactArray.push(contact);
}
//Function to delete name in addressBook
function deleteName(contactArray, name) {
    var removeIndex = contactArray.map(item => item.firstName).indexOf(name);
    contactArray.splice(removeIndex, 1);
}
//Function to count the contacts
function countContacts(contactArray) {
    let count = contactArray.reduce((acc, curVal) => acc.concat(curVal), []).length;
    console.log("Number of contacts is: " + count);
}
//Function to get contacts by city name
function getPersonByCity(contactArray, cityName) {
    contactArray.filter(name => name.city == cityName).forEach(contact => console.log(contact.toString()));
}
//Function to get contacts by state name
function getPersonByState(contactArray, stateName) {
    contactArray.filter(name => name.state == stateName).forEach(contact => console.log(contact.toString()));
}
//Function to search for contacts in state
function isPresentInState(contactArray, name, stateName) {
    let contactSearched = contactArray.filter(name => name.state == stateName).find(o => o.firstName === name);
    if (contactSearched != undefined) {
        console.log(contactSearched.toString());
    }
    else {
        console.log("Person not found in this state");
    }

}
//Function to search for contacts in city
function isPresentInCity(contactArray, name, cityName) {
    let contactSearched = contactArray.filter(name => name.city == cityName).find(o => o.firstName === name);
    if (contactSearched != undefined) {
        console.log(contactSearched.toString());

    }
    else {
        console.log("Person not found in this city");
    }

}
//Function to get count of persons by city
function getCountByCity(contactArray, cityName) {
    let count = contactArray.filter(contact => contact.city == cityName).reduce((acc, curVal) => acc.concat(curVal), []).length;
    console.log("Number of contacts living in this city are: " + count);
}
//Function to get count of persons by state
function getCountByState(contactArray, stateName) {
    let count = contactArray.filter(contact => contact.state == stateName).reduce((acc, curVal) => acc.concat(curVal), []).length;
    console.log("Number of contacts living in this state are: " + count);
}
//Function to sort on the basis of names
function sortedContacts(contactArray,type) {
    if(type=="Name"){
    contactArray.sort(function (a, b) {
        var nameA = a.firstName.toLowerCase(), nameB = b.firstName.toLowerCase()
        if (nameA < nameB)
            return -1
        if (nameA > nameB)
            return 1
        return 0
    });
    contactArray.forEach(emp => console.log(emp.toString()));
}
else if(type=="City"){
    contactArray.sort(function (a, b) {
        var nameA = a.city.toLowerCase(), nameB = b.city.toLowerCase()
        if (nameA < nameB)
            return -1
        if (nameA > nameB)
            return 1
        return 0
    });
    contactArray.forEach(emp => console.log(emp.toString()));
}
else if(type=="State"){
    contactArray.sort(function (a, b) {
        var nameA = a.state.toLowerCase(), nameB = b.state.toLowerCase()
        if (nameA < nameB)
            return -1
        if (nameA > nameB)
            return 1
        return 0
    });
    contactArray.forEach(emp => console.log(emp.toString()));
}
else{
    contactArray.sort(function (a, b) { return a.zip - b.zip });
    contactArray.forEach(emp => console.log(emp.toString()));
}
}
//Sorting Function

try {
    let contact = new Contact("Arka", "Prabha", "Hazra", "Kolkata", "WBengal", 700026, '91 7980430469', 'abc@yahoo.com');
    let contact2 = new Contact("Ritu", "Biswas", "Rashbehari", "Mumbai", "Maharashthra", 780067, '91 7988930469', 'xyz@yahoo.com');
    let contact3 = new Contact("Sayak", "Mondal", "Hazra", "Kolkata", "WBengal", 700067, '91 7989930469', 'def@yahoo.com');
    let contact4 = new Contact("Saunak", "Mondal", "Hazra", "Mumbai", "Maharashthra", 700067, '91 6989930469', 'acid@yahoo.com');
    let addressBook = new Array();
    addName(addressBook, contact);
    addName(addressBook, contact2);
    addName(addressBook, contact3);
    addName(addressBook, contact4);
    console.log("------Initial AddressBook Array---------");
    addressBook.forEach(contact => console.log(contact.toString()));
    updateName(addressBook, "Arka", "Orko");
    console.log("                   ");
    console.log("------After Updating---------");
    addressBook.forEach(contact => console.log(contact.toString()));
    // deleteName(addressBook, "Ritu");
    // console.log("                   ");
    // console.log("------After Deleting ---------");
    // addressBook.forEach(contact => console.log(contact.toString()));
    console.log("                   ");
    console.log("----Getting the count---------");
    countContacts(addressBook);
    console.log("                   ");
    console.log("----Getting contacts by city name---------");
    getPersonByCity(addressBook, "Kolkata");
    console.log("                   ");
    console.log("----Getting contacts by state name---------");
    getPersonByState(addressBook, "Maharashthra");
    console.log("                   ");
    console.log("----Searching contacts in a state---------");
    isPresentInState(addressBook, "Sayak", "MWBengal");
    console.log("                   ");
    console.log("----Searching contacts in a city---------");
    isPresentInCity(addressBook, "Sayak", "Kolkata");
    console.log("                   ");
    console.log("----Number of contacts in a city---------");
    getCountByCity(addressBook, "Kolkata");
    console.log("                   ");
    console.log("----Number of contacts in a state---------");
    getCountByState(addressBook, "Maharashthra");
    console.log("                   ");
    console.log("----Contacts sorted on the basis of name---------");
    sortedContacts(addressBook,"Name");
    console.log("                   ");
    console.log("----Contacts sorted on the basis of city---------");
    sortedContacts(addressBook,"City");
    console.log("                   ");
    console.log("----Contacts sorted on the basis of state---------");
    sortedContacts(addressBook,"State");
    console.log("                   ");
    console.log("----Contacts sorted on the basis of zip---------");
    sortedContacts(addressBook,"Zip");

}
catch (e) {
    console.error(e);
}