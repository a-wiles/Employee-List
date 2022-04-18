

const Engineer = require("../library/Engineer");


// Checking attributes
test('Check Engineer name attribute',function(){
    const newHire = new Engineer("Alex")
    expect(newHire.name).toBe("Alex")
})

test('Check Engineer ID attribute',function(){
    const newHire = new Engineer("Alex", "5")
    expect(newHire.id).toBe("5")
})

test('Check Engineer email attribute',function(){
    const newHire = new Engineer("Alex", "5", "alex@gmail.com")
    expect(newHire.email).toBe("alex@gmail.com")
})

test('Check Engineer github attribute',function(){
    const newHire = new Engineer("Alex", "5", "alex@gmail.com", "a-wiles")
    expect(newHire.github).toBe("a-wiles")
})

//check methods
test('Check Engineer getName ',function(){
    const newHire = new Engineer("Alex")
    expect(newHire.getName()).toBe("Alex")
})

test('Check Engineer getID',function(){
    const newHire = new Engineer("Alex", "5")
    expect(newHire.getId()).toBe("5")
})

test('Check Engineer getEmail',function(){
    const newHire = new Engineer("Alex", "5", "alex@gmail.com")
    expect(newHire.getEmail()).toBe("alex@gmail.com")
})

test('Check Engineer getGithub',function(){
    const newHire = new Engineer("Alex", "5", "alex@gmail.com", "a-wiles")
    expect(newHire.getGithub()).toBe("a-wiles")
})

test('Check Engineer getRole',function(){
    const newHire = new Engineer("Alex", "5", "alex@gmail.com", "a-wiles")
    expect(newHire.getRole()).toBe("Engineer")
})