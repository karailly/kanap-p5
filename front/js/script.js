fillSection();

// récupération des articles de l'API
async function getArticles() {
    var articlesCatch = await fetch("http://localhost:3000/api/products")
    
    return await articlesCatch.json();
}

    // répartition des données de l'API dans le DOM
async function fillSection() {
    var result = await getArticles ()
    .then(function (resultatAPI){
        const articles = resultatAPI;
        console.table(articles);
        for (let article of articles) {

            // a
            let productLink = document.createElement("a");
            document.querySelector(".items").appendChild(productLink);
            productLink.href = `product.html?id=${resultatAPI[article]._id}`;

            // article
            let productArticle = document.createElement("article");
            productLink.appendChild(productArticle);

            // insertion de l'image
            let productImg = document.createElement("img");
            productArticle.appendChild(productImg);
            productImg.src = resultatAPI[article].imageUrl;
            productImg.alt = resultatAPI[article].altTxt;

            // h3
            let productName = document.createElement("h3");
            productArticle.appendChild(productName);
            productName.classList.add("productName");
            productName.innerHTML = resultatAPI[article].name;

            // p
            let productDescription = document.createElement("p");
            productArticle.appendChild(productDescription);
            productDescription.classList.add("productName");
            productDescription.innerHTML = resultatAPI[article].description;
        }
    })
    .catch (function(error){
        return error;
    });
}