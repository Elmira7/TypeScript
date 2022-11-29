const admins = [
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];
const users = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' }
];
export function promisify(arg) {
    return () => new Promise((resolve, reject) => {
        arg((response) => {
            if (response.status === 'success') {
                resolve(response.data);
            }
            else {
                reject(new Error(response.error));
            }
        });
    });
}
const oldApi = {
    requestAdmins(callback) {
        callback({
            status: 'success',
            data: admins
        });
    },
    requestUsers(callback) {
        callback({
            status: 'success',
            data: users
        });
    },
    requestCurrentServerTime(callback) {
        callback({
            status: 'success',
            data: Date.now()
        });
    },
    requestCoffeeMachineQueueLength(callback) {
        callback({
            status: 'error',
            error: 'Numeric value has exceeded Number.MAX_SAFE_INTEGER.'
        });
    }
};
export const api = {
    requestAdmins: promisify(oldApi.requestAdmins),
    requestUsers: promisify(oldApi.requestUsers),
    requestCurrentServerTime: promisify(oldApi.requestCurrentServerTime),
    requestCoffeeMachineQueueLength: promisify(oldApi.requestCoffeeMachineQueueLength)
};
function logPerson(person) {
    console.log(` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`);
}
async function startTheApp() {
    console.log('Admins:');
    (await api.requestAdmins()).forEach(logPerson);
    console.log();
    console.log('Users:');
    (await api.requestUsers()).forEach(logPerson);
    console.log();
    console.log('Server time:');
    console.log(`   ${new Date(await api.requestCurrentServerTime()).toLocaleString()}`);
    console.log();
    console.log('Coffee machine queue length:');
    console.log(`   ${await api.requestCoffeeMachineQueueLength()}`);
}
startTheApp().then(() => {
    console.log('Success!');
}, (e) => {
    console.log(`Error: "${e.message}", but it's fine, sometimes errors are inevitable.`);
});
