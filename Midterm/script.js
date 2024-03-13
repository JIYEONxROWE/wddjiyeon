document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".menu a");
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);


    const products = [
        { name: "My Dream, My Coffee", price: 17, description: "Your dreamy coffee"},
        { name: "Open Your Heart", price: 17, description: "We has your heart"},
        { name: "Memory of Arashiyama", price: 20, description: "Kyoto express"},
        { name: "Decaf Guatemala", price: 17, description: "The classic"},
        { name: "Single Origin Of The Day", price: 25, description: "Guess our tastes"},
        { name: "Americano", price: 4.50, description: "No need to say"}
    ];

    menuItems.forEach(function(item) {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            const dataText = item.getAttribute("data-text");
            if (dataText === "Just") {
                return;
            }
            if (dataText === "3") {
                return;
            }
            const content = getContent(dataText);
            overlay.innerHTML = content;
            overlay.classList.add("show");
        });
    });

    overlay.addEventListener("click", function(event) {
        if (event.target === overlay) {
            overlay.classList.remove("show");
        }
    });

    function getContent(dataText) {
        switch(dataText) {
            case "S":
                return createProductListHTML();
            case "E":
                return "<h2>Events</h2><p>Coming Soon.</p>";
            case "C":
                return "<h2>Company</h2><p>Like many endeavors, the genesis of Sodoi spans back centuries. Jae Chung, Bob Baldwin, and Robert Hensley have nearly 100 years of combined experience in coffee trading, roasting, blending and serving. In addition, their mentors have passed knowledge gained from a lifetime in the coffee industry. Sodoi stands firmly on a foundation of 200 years combined industry expertise. Our knowledgeable, consumer-oriented and skilled team provides you with the best quality and customer service.\n Sodoi's deeply rooted history extends back generation. Bob and Robert have been honored to call Alfred Peet(founder of Peet's Coffee & Tea) a mentor and friend. In addition to acquiring the vast knowledge and experience by working with Mr.Peet, Bob and Robert worked for Probat Burns, a German roasting company founded in 1864. Together, they built, restored, installed, and trained on roasting equipment, which extended from vintage machines of the early 20th century to the most refined and advanced roasting equipment built today. \n All of us at Sodoi are blessed to stand on the shoulders of giants in the industry who have come before and helped us discern between what adds value to our customer's experience and what is merely the latest fad or simple shortcut and pretense to quality. These past masters of the art and science of coffee include dedicated professionals across the full spectrum of producing great coffee, from growers and millers, to roasters and brew masters. We give thanks to all the efforts of those who have blazed the trail before us. </p>";
            default:
                return "<h2>Information</h2><p>Explore more information here.</p>";
        }
    }

    function createProductListHTML() {
        let productListHTML = "<h2>Store</h2>";
        productListHTML += "<div id='product-list' class='product-list'>";
        
        products.forEach(function(product) {
            productListHTML += `
                <div class="product" data-description="${product.description}">
                    <h3>${product.name}</h3>
                    <p>Price: $${product.price}</p>
                    <button class="buy-button" data-product="${product.name}" data-price="${product.price}">Buy</button>
                </div>
            `;
        });

        productListHTML += "</div>"; 
        return productListHTML;
    }

    const productList = document.getElementById("product-list");
    productList.addEventListener("click", function(event) {
        const product = event.target.closeset(".product");
        if (product) {
            const description = product.getAttribute("data-description");
            alert(description);
        }
    })
});
