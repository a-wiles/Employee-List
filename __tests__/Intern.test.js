const Intern = require("../library/Intern");


// Checking attributes
test('Check Intern name attribute',function(){
    const newHire = new Intern("Alex")
    expect(newHire.name).toBe("Alex")
})

test('Check Intern ID attribute',function(){
    const newHire = new Intern("Alex", "5")
    expect(newHire.id).toBe("5")
})

test('Check Intern email attribute',function(){
    const newHire = new Intern("Alex", "5", "alex@gmail.com")
    expect(newHire.email).toBe("alex@gmail.com")
})

test('Check Intern school attribute',function(){
    const newHire = new Intern("Alex", "5", "alex@gmail.com", "bootcamp")
    expect(newHire.school).toBe("bootcamp")
})

//check methods
test('Check Inter getName ',function(){
    const newHire = new Intern("Alex")
    expect(newHire.getName()).toBe("Alex")
})

test('Check Intern getID',function(){
    const newHire = new Intern("Alex", "5")
    expect(newHire.getId()).toBe("5")
})

test('Check Intern getEmail',function(){
    const newHire = new Intern("Alex", "5", "alex@gmail.com")
    expect(newHire.getEmail()).toBe("alex@gmail.com")
})

test('Check Intern getSchool',function(){
    const newHire = new Intern("Alex", "5", "alex@gmail.com", "bootcamp")
    expect(newHire.getSchool()).toBe("bootcamp")
})

test('Check Intern getRole',function(){
    const newHire = new Intern("Alex", "5", "alex@gmail.com", "bootcamp")
    expect(newHire.getRole()).toBe("Intern")
})