const stockItems = [
    {
        name: "Fruit Tree (Apple)",
        price: 25,
        imgSrc: "path/to/image1.jpg"
    },
    {
        name: "Fruit Tree (Pear)",
        price: 10,
        imgSrc: "path/to/image2.jpg"
    },
    {
        name: "Fruit Tree (Olive)",
        price: 5,
        imgSrc: "path/to/image3.jpg"
    },
    {
        name: "Shade Tree (Oak)",
        price: 25,
        imgSrc: "path/to/image3.jpg"
    },
    {
        name: "Shade Tree (Maple)",
        price: 25,
        imgSrc: "path/to/image3.jpg"
    },
    {
        name: "Evergreen Tree (Pine)",
        price: 25,
        imgSrc: "path/to/image3.jpg"
    },
    {
        name: "Evergreen Tree (Fir)",
        price: 25,
        imgSrc: "path/to/image3.jpg"
    },
    {
        name: "Ornamental Tree (Magnolia)",
        price: 25,
        imgSrc: "path/to/image3.jpg"
    },
    {
        name: "Flowering Tree (Cherry)",
        price: 25,
        imgSrc: "path/to/image3.jpg"
    },
    {
        name: "Conifers Tree (Juniper)",
        price: 25,
        imgSrc: "path/to/image3.jpg"
    },
];

  // Function to generate HTML for each stock item
  function generateStockItemHTML(item) {
    return `
        <div class="col-md-6">
            <p>Item: ${item.name}</p>
            <p>Price: $${item.price}</p>
            <div class="input-group">
                <span class="input-group-btn">
                    <button type="button" class="btn btn-default btn-number" data-type="minus" data-field="quantity">
                        <span class="glyphicon glyphicon-minus"></span>
                    </button>
                </span>
                <input type="text" id="quantity" name="quantity" class="form-control input-number" value="1" min="1" max="10">
                <span class="input-group-btn">
                    <button type="button" class="btn btn-default btn-number" data-type="plus" data-field="quantity">
                        <span class="glyphicon glyphicon-plus"></span>
                    </button>
                </span>
            </div>
            <br>
            <button class="btn btn-success" onclick="addToCart()">Add to Cart</button>
        </div>
      `;
    }

    // Loop through stock items and generate HTML for each item
    const stockContainer = document.getElementById("trees");
    for (let item of stockItems) {
        const itemHTML = generateStockItemHTML(item);
        stockContainer.insertAdjacentHTML("beforeend", itemHTML);
    }

    // Function to add item to cart
    function addToCart() {
        // Add your implementation here
    }
