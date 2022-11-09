// instruction
// Managing User Permissions
// Background
// Our app recently started supporting multiple types of users. As a result, we need to add the concept of role-based access control. When users log in, they should only be able to view certain pages according to their roles.
// We have already laid out the framework for this change on the database end by adding a roles property to our user model and creating a permissions table that contains all the roles we want to give the users and their associated permissions.

// Here is a graphic to help visualize the two data structures, Users and Permissions
// Note: This is a graphic to represent the two data structures using pseudocode and not written within the grammar/naming conventions of any one programming language
// We have determined the next step in the process is to build two functions that will give us the ability to check all the permissions associated with each role and check whether a user has specific permission.
// Testing
// The automated tests we provide only cover a few key cases, so you should plan to add some of your own tests or modify the existing ones to ensure that your solution handles any edge cases. You should be able to follow the existing patterns for naming and constructing tests to add your own.
// Notes
// It's more important for the return value to be correct than for the algorithm to be highly optimized.
// You should not change the name, arguments, or return types of the provided functions since our test cases depend on those not changing.
// The data in the internal tests will be different from the data we gave in the examples, so do not hardcode your solutions to the examples.
// Feel free to add additional functions beyond those provided if they improve the structure of your solution.
//  Run Output

/////////////////////////////////////////////////////////

//  sample tests(modifiable)

// let expect = require("chai").expect
// describe("Authorization", () => {
//   beforeEach(() => {
//     const permissions = [
//       { role: "superuser", name: "lock user account", active: true },
//       { role: "superuser", name: "unlock user account", active: true },
//       { role: "superuser", name: "purchase widgets", active: false },
//       { role: "charger", name: "view pick up locations", active: true },
//       { role: "rider", name: "view my profile", active: true },
//       { role: "rider", name: "scooters near me", active: true },
//     ]
//     const users = [
//       { id: 1, name: "Anna Administrator", roles: ["superuser"] },
//       { id: 2, name: "Charles N. Charge", roles: ["charger", "rider"] },
//       { id: 7, name: "Ryder", roles: ["rider"] },
//       { id: 11, name: "Unregistered Ulysses", roles: [] },
//       { id: 18, name: "Tessa Tester", roles: ["beta tester"] },
//     ]
//     this.authorization = new Authorization(permissions, users)
//   })
//   it("listPermissions returns correct permission names when there is one role", () => {
//     const result = this.authorization.listPermissions(7)
//     expect(result, "view my profile").to.include("view my profile")
//     expect(result, "scooters near me").to.include("scooters near me")
//     expect(result.length).to.equal(2)
//   })
//   it("checkPermitted returns true for all of the permissions that exist for the user", () => {
//     expect(this.authorization.checkPermitted("view pick up locations", 2), "view pick up locations").to.equal(true)
//     expect(this.authorization.checkPermitted("view my profile", 2), "view my profile").to.equal(true)
//     expect(this.authorization.checkPermitted("scooters near me", 2), "scooters near me").to.equal(true)
//   })
// })


// /////////////////////////////////////////////////////////
// your solution
// // see graphic in instructions for visual explanation of the permission and user data structures
// class Authorization {
//   constructor(permissions, users) {
//     this.permissions = permissions
//     this.users = users
//   }
//   // @rtype: array of strings
//   // @returns: an array of all the active permission names that the user with the corresponding user_id has
//   // @note: The order in which the permission names are returned is not important
//   // @example: listPermissions(1) ➡ ["View Orders", "Block User Account"] (purchased widgets not included since it is not active)
//   listPermissions(userId) {
//     // TODO: fill this out!
//     return
//   }
//   // @rtype: boolean value
//   // @returns: true or false based on if the user with the corresponding user_id has the role that corresponds with the 
//   // specific permission_name
//   // @example: Example (Based on data from graphic)
//   // checkPermitted("scooters near me", 2) ➡ true
//   // checkPermitted("scooters near me", 1) ➡ false
//   checkPermitted(permissionName, userId) {
//     // TODO: fill this out!
//     return
//   }
// }

// class Authorization {
//     constructor(permissions, users) {
//         this.permissions = permissions
//         this.users = users
//     }
    
//     listPermissions(userId) {
//         let roles = [];
//         let grantedPermissions = [];

//         for (let user of this.users) {
//             if (userId == user.id) {
//                 roles = user.roles;
//                 break;
//             }
//         }

//         for (let role of roles) {
//             for (let permission of this.permissions) {
//                 if (permission.role == role && permission.active) {
//                     grantedPermissions.push(permission.name);   
//                 }
//             }
//         }
//         return grantedPermissions;
//     }
    
//     checkPermitted(permissionName, userId) {
//         return this.listPermissions(userId).includes(permissionName);
//     }
// }