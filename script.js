let properties = [];

function addProperty() {
    let title = document.getElementById("title").value;
    let price = document.getElementById("price").value;
    let location = document.getElementById("location").value;
    let description = document.getElementById("description").value;
    let imageInput = document.getElementById("image");

    if (!title || !price || !location) {
        alert("Please fill all required fields!");
        return;
    }

    let reader = new FileReader();

    reader.onload = function () {
        let property = {
            title,
            price,
            location,
            description,
            image: reader.result
        };

        properties.push(property);
        displayProperties();
        clearForm();
    };

    if (imageInput.files[0]) {
        reader.readAsDataURL(imageInput.files[0]);
    } else {
        alert("Upload an image!");
    }
}

function displayProperties() {
    let container = document.getElementById("propertyList");
    container.innerHTML = "";

    properties.forEach((p, index) => {
        container.innerHTML += `
            <div class="card">
                <img src="${p.image}">
                <div class="card-body">
                    <h3>${p.title}</h3>
                    <p class="location">${p.location}</p>
                    <p class="price">₹ ${p.price}</p>
                    <p>${p.description}</p>
                </div>
            </div>
        `;
    });
}

function clearForm() {
    document.getElementById("title").value = "";
    document.getElementById("price").value = "";
    document.getElementById("location").value = "";
    document.getElementById("description").value = "";
    document.getElementById("image").value = "";
}