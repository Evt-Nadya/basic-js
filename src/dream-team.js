const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  if (!Array.isArray(members)) {
        return false;
    }

    var result = [];
    for (i = 0; i < members.length; i++) {
        if (typeof members[i] == 'string') {
            result.push(members[i].trim().substr(0, 1).toUpperCase());
        } else continue;
    }
    result = result.sort().join('');
    return result;
};
