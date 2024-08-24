fetch('./product.json')
  .then(response => response.json())
  .then(data => {
    localStorage.setItem("productsdata", JSON.stringify(data));
    Product();
  });

function Product() {
  let collection = JSON.parse(localStorage.getItem("productsdata")) || [];

  collection.map((element) => {
    let box = document.createElement("div");

    let innerbox = document.createElement("div");
    let price1 = document.createElement("span");
    price1.innerHTML = element.price;
    let price2 = document.createElement("span");
    price2.innerHTML = element.actualprice;

    innerbox.append(price1, price2);
    innerbox.className = "innerbox";
    let avatar = document.createElement("img");
    avatar.src = element.img_src;
    avatar.className = "avatar";
    let brand = document.createElement("p");
    brand.innerHTML = element.Brand;
    box.append(avatar, brand, innerbox);
    document.getElementById("collection").append(box);
  });
}
