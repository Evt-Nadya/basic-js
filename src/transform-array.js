const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  var result = [];
    for (i = 0; i < arr.length; i++) {
        result.push(arr[i]);

        if (arr[i] == '--discard-next') {
            result.pop();
            if (i != arr.length - 1) {
                i = i + 1;
            }
        } else if (arr[i] == '--discard-prev') {
            result.pop();
            if (i != 0 && arr[i - 2] != '--discard-next') {
                result.pop();
            }
        } else if (arr[i] == '--double-next') {
            result.pop();
            if (i != arr.length - 1) {
                result.push(arr[i + 1]);
            }
        } else if (arr[i] == '--double-prev') {
            result.pop();
            if (i != 0 && arr[i - 2] != '--discard-next') {
                result.push(arr[i - 1]);
            }
        }
    }
    return result;
};
