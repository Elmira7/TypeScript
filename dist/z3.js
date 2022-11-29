export const persons = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
        type: 'User'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator',
        type: 'Admin'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
        type: 'User'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver',
        type: 'Admin'
    }
];
export function logPerson(person) {
    let additionalInformation;
    if (person.type === "Admin") {
        additionalInformation = person.role;
    }
    else {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}
persons.forEach(logPerson);
