// enum Role {
//     Admin,
//     Editor,
//     Guest,
// }

// let userRole: Role = Role.Admin;

//...

//userRole = Role.Guest;

let userRole: "Admin" | "Editor" | "Guest" = "Admin";

userRole = "Guest";

let posibleResults: [0 | 1, number];

posibleResults = [1, -2];