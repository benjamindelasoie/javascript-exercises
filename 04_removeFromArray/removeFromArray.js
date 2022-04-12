const removeFromArray = function(arr, ...elems) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (!elems.includes(arr[i])) {
            ans.push(arr[i]);
        }
    }
    return ans;
};

// Do not edit below this line
module.exports = removeFromArray;
