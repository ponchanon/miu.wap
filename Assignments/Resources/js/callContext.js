//Problem 01
function askPassword(ok, fail) {
    let password = prompt ("Password? (default pass is rockstar)",'');
    if (password == "rockstar") ok();
    else fail();
}
    let user = {
        name: 'John',
        loginOk () {
            alert(`${this.name} logged in`);
        },
        loginFail() {
            alert(`${this.name} failed to log in`);
        },
    };
    askPassword(user.loginOk.bind(user), user.loginFail.bind(user));




// Problem 02
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function (student) {
            console.log(this.title + ": " + student
            );
        }.bind(this));
    }
};
group.showList();