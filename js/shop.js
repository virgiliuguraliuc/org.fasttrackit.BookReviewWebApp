window.shop = {
  API_BASE_URL: "http://localhost:8085",

  getProducts:function () {
      $.ajax({
          url: shop.API_BASE_URL + "/books",
          method: "GET"

      }).done (function (response) {
          console.log(response);
          shop.displayProducts(response.content);
      })
  },


    displayProducts:function (books) {
      var allProductsHtml = "";
      books.forEach(book => allProductsHtml += shop.getProductHtml(book));
        $(".single-product-area .row").html(allProductsHtml);
    },

    getProductHtml:function (book) {
      return `<div class="col-md-3 col-sm-6">
                    <div class="single-shop-product">
                        <div class="product-upper">
                            <img src="img/product-2.jpg" alt="">
                        </div>
                        <h2><a href="">${book.title}</a></h2>
                        <div class="product-carousel-price">
                            <ins>$${book.price}</ins> 
                        </div>  
                        
                        <div class="product-option-shop">
                            <a class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="${book.id}" rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>
                        </div>                       
                    </div>
                </div>`
    },

    // addProductToCart: function (productId) {
    //     //customerId to be read from memory somehow in the future
    //     var CustomerId = 34;
    //     var requestBody = {
    //         customerId: CustomerId,
    //         productId: productId
    //     };
    //
    //     $.ajax({
    //         url: shop.API_BASE_URL + "/carts",
    //         method: "PUT",
    //         contentType: "application/json",
    //         data: JSON.stringify(requestBody)
    //     }).done(function () {
    //         window.location.replace("cart.html")
    //     }) //asa fac navigatie spre alta pagina
    // },
    //
    //     bindEvents: function () {
    //         $(`.single-product-area .row`).delegate(`.add_to_cart_button`, `click`, function (event) {
    //             event.preventDefault();
    //
    //             var productId = $(this).data(`product_id`);
    //             shop.addProductToCart(productId);
    //         });
    //     }
    };

shop.getProducts();
//shop.bindEvents();