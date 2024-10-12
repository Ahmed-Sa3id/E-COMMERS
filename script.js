window.onload = function () {
  let Cart = document.getElementsByClassName("Cart")[0];
  let openCart = document.getElementsByClassName("openCart")[0];
  let closeCart = document.getElementById("closeCart");
  let content = document.getElementsByClassName("content")[0];
  let cartList = document.getElementsByClassName("cart-list")[0];
  let addToCartBtn = document.getElementsByClassName("addToCartBtn")[0]

  openCart.addEventListener("click", function () {
    Cart.classList.add("active");
  });

  closeCart.addEventListener("click", function () {
    Cart.classList.remove("active");
  });

  let products = [
    {
      id: 1,
      image: "th.jpg",
      name: "MacBook",
      price: 1000,
    },
    {
      id: 2,
      image: "OIF.jpeg",
      name: "MacBook Air",
      price: 1200,
    },
    {
      id: 3,
      image: "download.jpeg",
      name: "iPhone 16 Pro",
      price: 1000,
    },
    {
      id: 4,
      image: "iphone.jpeg",
      name: "iPhone 16",
      price: 600,
    },
    {
      id: 5,
      image: "macbook_air.jpeg",
      name: "MacBook M2",
      price: 8000,
    },
  ];

  let listCart = [];

  function cartApp() {
    products.forEach((value) => {
      let newDiv = document.createElement("div"); // to add a div
      newDiv.classList.add("product_box"); // to name that div

      // Use backticks for multi-line HTML
      newDiv.innerHTML = `
        <img src="${value.image}" alt="${value.name}" />
        <h2>${value.name}</h2>
        <span>${value.price}</span></br>
        <button class="btn btn-primary addToCartBtn" onclick="addToCart(${value.id})">Add To Cart</button>
      `;

      content.appendChild(newDiv);
    });
  }

  cartApp();

  function reloadCart() {
    cartList.innerHTML = ""; // clear the cart before reloading
    listCart.forEach((value) => {
      let newList = document.createElement("div");
      newList.classList.add("cart_box");

      newList.innerHTML = `
        <img src="${value.image}" alt="${value.name}" style="width: 120px; height: 60px" class="mt-3" />
        <h5>${value.name}</h5>
        <span>${value.price}</span></br>
        <button class="btn btn-primary">Buy Now</button>
      `;

      cartList.appendChild(newList);
    });
  }
  addToCartBtn.addEventListener("click", function () {
    console.log("done");
    
  })
 
};
