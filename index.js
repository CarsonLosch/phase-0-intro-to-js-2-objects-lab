// Write your solution in this file!

const employee = {
    name : "Yoked",
    streetAddress : "6952 West Funk St",
};

const updateEmployeeWithKeyAndValue = function(obj, key, value) {
    return  {
        ...obj,
        [key]: value,
    };
}

const destructivelyUpdateEmployeeWithKeyAndValue = function(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key){
    const newObj = {...obj};

    delete newObj[key];

    return newObj;
} 

const destructivelyDeleteFromEmployeeByKey = function(obj, key) {
    delete obj[key];
    return obj;
}