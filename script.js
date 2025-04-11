
document.querySelector('.promo-bar .close').addEventListener('click', function() {
  document.querySelector('.promo-bar').style.display = 'none';
});

document.getElementById('search-bar').addEventListener('input', function() {
  let query = this.value.toLowerCase();
  let products = document.querySelectorAll('.product');
  products.forEach(function(product) {
    let productName = product.querySelector('.product-name').textContent.toLowerCase();
    if (productName.includes(query)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});
