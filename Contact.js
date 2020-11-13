class Contact{

    constructor(...params){
        this.firstName=params[0];
        this.lastName=params[1];
        this.address=params[2];
        this.city=params[3];
        this.state=params[4];
        this.zip=params[5];
        this.number=params[6];
        this.email=params[7];
    }
    get firstName() { return this._firstName; }
    set firstName(firstName) { 
        let regName=RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(regName.test(firstName)){
        this._firstName = firstName;
    } 
    else throw 'Incorrect first name';
}
get lastName() { return this._lastName; }
set lastName(lastName) { 
    let regName=RegExp('^[A-Z]{1}[a-z]{3,}$');
    if(regName.test(lastName)){
    this._lastName = lastName;
} 
else throw 'Incorrect last name';
}
get address(){ return this._address;}
set address(address){
    let regName=RegExp('^[A-Za-z0-9]{4,}$');
    if(regName.test(address)){
        this._address=address;
    }
    else throw 'Incorrect address';
}
get city(){ return this._city;}
set city(city){
    let regName=RegExp('^[A-Za-z]{4,}$');
    if(regName.test(city)){
        this._city=city;
    }
    else throw 'Incorrect city';
}
get state(){ return this._state;}
set state(state){
    let regName=RegExp('^[A-Za-z]{4,}$');
    if(regName.test(state)){
        this._state=state;
    }
    else throw 'Incorrect state';
}
get zip(){return this._zip;}
    set zip(zip){
        let regEx= RegExp('^\\d{3}(\\s{0,1}\\d{3})$');
        if(regEx.test(zip)){
            this._zip=zip;
        } 
        else throw 'Incorrect zip';

    }

get number(){return this._number;}
set number(number){
    let regEx= RegExp('^\\d{2}(\\s{1}\\d{10})$');
    if(regEx.test(number)){
        this._number=number;
    } 
    else throw 'Incorrect number';
}

get email(){return this._email;}
    set email(email){
        let regEx= RegExp('^[a-zA-Z]+([._+-]{0,1}[a-zA-Z0-9]+)*@[a-zA-Z0-9]+.[(com)|(co)|(net)]+(?:\\.[a-z]{2,}){0,1}$');
        if(regEx.test(email)){
            this._email=email;
        } 
        else throw 'Incorrect email';

    }
    toString(){
        return '\nFirstName: ' + this.firstName + ' LastName: ' + this.lastName + ' Address: ' + this.address+ ' City: '+ this.city+' State : '+ this.state+ ' Zip: '+this.zip+' Number: '+this.number+'Email: '+ this.email;
    }

}
try{
let contact= new Contact("Arka","Prabha","Hazra","Kolkata","WBengal",700026,'91 7980430469','abc@yahoo.com');
console.log(contact.toString());
}
catch(e){
    console.error(e);
}