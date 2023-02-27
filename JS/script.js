function validate() {
    email = document.getElementById("email").value;

    var e =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email == "") {
        alert("enter mail");
        return false;
    } else if (!e.test(email)) {
        alert("enter valid mail addres");
        return false;
    }
    return true;
}
