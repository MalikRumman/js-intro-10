console.log(Math.PI); // PI is a static proeprty of Math prototype

console.log(Math.max(1, 2)); // max() is a static method of Math prototype


/*
static keyword
static methods-properties: can be invoked/accessed with the className or prototype

*/

class AmazonAccount {
    varaible1 = 'Hello';
    static varaible2 = 'World';
    // static methods can be incoked by the class or prototype name
    static aFunction() {
        console.log('STATIC METHOD');
    }

    // non-static methods can be invoked by the object of this class or prototype
    bFunction() {
        console.log('NON-STATIC METHOD');
    }
};

AmazonAccount.aFunction();
console.log(AmazonAccount.varaible2);

const aa = new AmazonAccount();
aa.bFunction();
console.log(aa.varaible1);


// Static methods
Array.isArray();
Object.entries();
Object.keys();
Object.values();
Object.create();
Math.min();
Number.isInteger();


// Static proeprties
Math.PI;
Number.MAX_VALUE;
Number.MAX_SAFE_INTEGER;