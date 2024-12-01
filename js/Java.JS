function openNotebook() {
    const notebook = document.getElementById('notebook');
    notebook.classList.toggle('open');
}

function passWordShow() {
    let pass = document.getElementById("password")//要記得打引號
    if (pass.type === "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}
