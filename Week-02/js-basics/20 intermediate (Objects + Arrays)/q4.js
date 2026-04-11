let roles={ admin:["read","write"], user:["write"], staff: ["write"]}
let checkRole="user";
let action="write";

function checker(roles, checkRole, action){
    return roles[checkRole].includes(action);
}

console.log(checker(roles,checkRole,action));