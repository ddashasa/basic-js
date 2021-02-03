module.exports = function createDreamTeam(members) {
    if (!(Array.isArray(members)) || members.length == 0) {
    return false;
  };
    trimMembers = [];
    let str = '';
    for (let i = 0; i < members.length; i++) {
      if (typeof(members[i]) == 'string') {
        trimMembers.push(members[i].trim().toUpperCase());
      };
    };
    trimMembers.sort();
    for (let i = 0; i < trimMembers.length; i++) {
    if (typeof(trimMembers[i]) == 'string') {
      str += trimMembers[i][0];
    };
    };
    return str.toUpperCase();
};
