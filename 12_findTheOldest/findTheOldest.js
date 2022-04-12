const findTheOldest = function(arr) {
    let oldest = {
        name: "",
        age: 0,
    };
    for (let i = 0; i < arr.length; i++) {
        let age = arr[i].yearOfDeath - arr[i].yearOfBirth;
        if (age > oldest.age) {
            oldest.name = arr[i].name;
            oldest.age = age;
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
