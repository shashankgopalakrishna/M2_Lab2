window.addEventListener("load", function () {
    document.getElementById("empForm").reset();
    document.querySelector("form").addEventListener("submit", function(e) {
        e.preventDefault();
        addEmp(); 
});});
const addEmp = () => {
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var extension = document.getElementById("extension").value;
    var email = document.getElementById("email").value;
    var department = document.getElementById("department").value;
    console.log("ID: ", id, "\nName: ", name, "\nExtension: ", extension, "\nEmail: ", email, "\nDepartment: ", department);
    document.getElementById("empForm").reset();
}