const Manager = require("../library/Manager");


// Checking attributes
test('Check Manager name attribute',function(){
    const newHire = new Manager("Alex")
    expect(newHire.name).toBe("Alex")
})

test('Check Manager ID attribute',function(){
    const newHire = new Manager("Alex", "5")
    expect(newHire.id).toBe("5")
})

test('Check Manager email attribute',function(){
    const newHire = new Manager("Alex", "5", "alex@gmail.com")
    expect(newHire.email).toBe("alex@gmail.com")
})

test('Check Manager office number attribute',function(){
    const newHire = new Manager("Alex", "5", "alex@gmail.com", "15")
    expect(newHire.officenumber).toBe("15")
})

//check methods
test('Check Manager getName ',function(){
    const newHire = new Manager("Alex")
    expect(newHire.getName()).toBe("Alex")
})

test('Check Manager getID',function(){
    const newHire = new Manager("Alex", "5")
    expect(newHire.getId()).toBe("5")
})

test('Check Manager getEmail',function(){
    const newHire = new Manager("Alex", "5", "alex@gmail.com")
    expect(newHire.getEmail()).toBe("alex@gmail.com")
})

test('Check Manager office Number',function(){
    const newHire = new Manager("Alex", "5", "alex@gmail.com", "15")
    expect(newHire.getOfficenumber()).toBe("15")
})

test('Check Manager getRole',function(){
    const newHire = new Manager("Alex", "5", "alex@gmail.com", "15")
    expect(newHire.getRole()).toBe("Manager")
})