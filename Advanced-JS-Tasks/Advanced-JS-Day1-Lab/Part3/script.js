/*
PartThree : 
-depend on PartTwo
-Build Your UserProfileManger Object with properties :
-ArrayOfUserProfileObjects
-Method To Print UserPfiles
-Method AddingNewUserPfile Take UserProfileObject
-Method RemoveUSerProfile Take UserProfileId As Param
-Method To Filter Get the UserProfileObject with the same Name As Input
-Method to Sorting UserProfiles By Id and anthor One By Name
- Build Your Form To Take UserProfileData From form Inputs (with validation ) 
-Try All UserProfileManger Method With At Least 5 Of USers
*/

userProfileManger = {
    userProfiles: [],
    printUserProfiles: function() {
        console.log(this.userProfiles);
    },
    addingNewUserProfile: function(userProfileObject) {
        this.userProfiles.push(userProfileObject);
    },
    removeUserProfile: function(userID) {
        this.userProfiles.splice(this.userProfiles.indexOf(userID), 1);
    },
    filterUserProfiles: function(userName) {
        return this.userProfiles.filter(function(userProfile) {
            return userProfile.name === userName;
        })
    },
    sortUserProfilesById: function() {
        return this.userProfiles.sort(function(a, b) {
            return a.id - b.id;
        })
    },
    sortUserProfilesByName: function() {
        return this.userProfiles.sort(function(a, b) {
            return a.name.localeCompare(b.name);
        })
    },
}

// use user object in name address age
userProfileManger.addingNewUserProfile({id: 1, name: 'Mohamed', street: 'Abo El Wafa', city: 'Dameitta', age: 25});
userProfileManger.addingNewUserProfile({id: 2, name: 'Ahmed', street: 'Abo El Wafa', city: 'Dameitta', age: 30});
userProfileManger.addingNewUserProfile({id: 3, name: 'Sara', street: 'Abo El Wafa', city: 'Dameitta', age: 22});
userProfileManger.addingNewUserProfile({id: 4, name: 'Laila', street: 'Abo El Wafa', city: 'Dameitta', age: 28});
userProfileManger.addingNewUserProfile({id: 5, name: 'Omar', street: 'Abo El Wafa', city: 'Dameitta', age: 35});
userProfileManger.printUserProfiles();
// userProfileManger.removeUserProfile(3);
// userProfileManger.printUserProfiles();
// console.log(userProfileManger.filterUserProfiles('Mohamed'));
// console.log(userProfileManger.sortUserProfilesById());
// console.log(userProfileManger.sortUserProfilesByName());

/*
<form action="" id="userProfileForm">
        <input type="text" name="name" placeholder="Enter Your Name"> <br />
        <input type="text" name="street" id="street" placeholder="Enter Your street"> <br />
        <input type="text" name="city" id="city" placeholder="Enter Your city"> <br />
        <input type="number" name="age" id="age" placeholder="Enter Your Age"> <br />
        <input type="submit" value="Add User Profile"> <br />
</form>
*/
var userProfileForm = document.getElementById('userProfileForm');
userProfileForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var name = e.target.name.value;
    var street = e.target.street.value;
    var city = e.target.city.value;
    var age = parseInt(e.target.age.value);
    
    if (!name && !street && !city && !age) {
        alert('Please fill the form inputs.');
    }  else if (age < 0) {
        alert('Please enter a valid age.');
    } else if (!name || !street || !city) {
        alert('Please fill all the fields.');
    } else if (name.length < 2) {
        alert('Name must be at least 2 characters long.');
    } else if (street.length < 2 || city.length < 2) {
        alert('Street and City must be at least 2 characters long.');
    } else if (name.match(/[0-9]/)) {
        alert('Name cannot contain numbers.');
    } else if (street.match(/[0-9]/) || city.match(/[0-9]/)) {
        alert('Street and City cannot contain numbers.');
    } else (name && street && city && age) 
        var newUserProfile = {
            id: userProfileManger.userProfiles.length + 1,
            name: name,
            address: `${street}, ${city}`,
            age: age
        };
        userProfileManger.addingNewUserProfile(newUserProfile);
        userProfileManger.printUserProfiles();
        e.target.reset();
});