const faker = require('faker');
const fs = require('fs');

function generateData(numberOfRecords = 100) {
    const dataArray = [];
    for (let id = 1; id <= numberOfRecords; id++) {
        const firstName = faker.name.firstName();
        const middleName = faker.name.middleName(); // Include middle name if desired
        const lastName = faker.name.lastName();
        const gender = faker.name.findName({ gender: faker.random.arrayElement(['male', 'female']) }); // Flexible gender generation
        const contact = faker.phone.phoneNumber();
        const userName = faker.internet.userName();
        const email = faker.internet.email();

        dataArray.push({
            'id': id, // Add an ID property (optional)
            'firstName': firstName,
            'middleName': middleName, // Include middle name if desired
            'lastName': lastName,
            'gender': gender,
            'contact': contact,
            'userName': userName,
            'email': email
        });
    }
    return dataArray;
}

// Set the desired number of records (default: 100)
const numberOfRecords = 20; // Customize as needed

const dataArray = generateData(numberOfRecords);

// Format and write data to JSON file with indentation
const jsonData = JSON.stringify(dataArray, null, 2); // 2 spaces for indentation

try {
    fs.writeFileSync('data.json', jsonData);
    console.log(`Successfully generated ${numberOfRecords} records and wrote to data.json`);
} catch (error) {
    console.error('Error writing data to file:', error);
}
