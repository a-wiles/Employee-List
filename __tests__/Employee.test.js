
const Employee = require("../library/Employee");


// Checking attributes
test('Check Employee name attribute',function(){
    const newHire = new Employee("Alex")
    expect(newHire.name).toBe("Alex")
})

test('Check Employee ID attribute',function(){
    const newHire = new Employee("Alex", "5")
    expect(newHire.id).toBe("5")
})

test('Check Employee email attribute',function(){
    const newHire = new Employee("Alex", "5", "alex@gmail.com")
    expect(newHire.email).toBe("alex@gmail.com")
})

//check methods
test('Check Employee getName ',function(){
    const newHire = new Employee("Alex")
    expect(newHire.getName()).toBe("Alex")
})

test('Check Employee getID',function(){
    const newHire = new Employee("Alex", "5")
    expect(newHire.getId()).toBe("5")
})

test('Check Employee getEmail',function(){
    const newHire = new Employee("Alex", "5", "alex@gmail.com")
    expect(newHire.getEmail()).toBe("alex@gmail.com")
})

test('Check Employee getRole',function(){
    const newHire = new Employee("Alex", "5", "alex@gmail.com")
    expect(newHire.getRole()).toBe("Employee")
})