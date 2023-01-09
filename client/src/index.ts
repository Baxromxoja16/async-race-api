import carinfo from "./scripts/interfaces";

function garage() {
    fetch('http://localhost:3000/garage')
    .then(data => {
        return data.json()
    })
    .then(data => {
        data.forEach((element: carinfo) => {
            document.write(` ${element.name}`)
            console.log(element);
        });
    })
}

garage()