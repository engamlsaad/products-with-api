let url = "https://api.escuelajs.co/api/v1/products";
let row = document.getElementById("row");
fetch(url).then((respose) => {
    return respose.json();
}).then((data) => {
    console.log(data);
    row.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        let des = data[i].description;
        let card = `
        <div class="col-md-4 col-sm-6">
            <div class="card shadow" style="height: 100%;">
                <img src="${data[i].category.image}" class="card-img-top" alt="img">
                <div class="card-body">
                <h3 class="title">${data[i].title.length > 15 ? data[i].title.substring(0, 20).concat("...") : data[i].title}</h3>    
                <h5 class="card-title">${data[i].category.name}</h5>
                <p class="card-text">${des.length > 100 ? des.substring(0, 100).concat("...more") : des}</p>
                <div class="card-footer d-flex justify-content-between align-items-center border border-0 bg-transparent rounded-0">
                    <div class="price fw-bold">$${data[i].price}</div>
                    <a href="#" class="link text-decoration-none">add to cart</a>
                </div>
                </div>
            </div>
        </div>
        `;
        row.innerHTML += card;
    }
});