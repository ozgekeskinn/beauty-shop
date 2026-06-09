function getCart(){
    const data = localStorage.getItem('cart');  // metni alır
    if(data){
        return JSON.parse(data);  // null değilse diziye çevirir
    } else {
        return [];
    }
}

function saveCart(cart){
    localStorage.setItem('cart' , JSON.stringify(cart));   // diziyi metne çevirip yazar
}

function addToCart(id , quantity){
    const cart = getCart();
    const existing = cart.find(item => item.id === id);
    if(existing){
        existing.quantity += quantity;  // varsa adet arttır
    } else{
        cart.push({id,quantity});   // yoksa yeni ekler
    }
    saveCart(cart);
}

function removeFromCart(id){
    let cart = getCart();
    cart = cart.filter(item => item.id !== id);
    saveCart(cart);
}

function updateQuantity(id, quantity){
    const cart = getCart();
    const item = cart.find(i => i.id === id);
    if(item){
        item.quantity = quantity;
        if(item.quantity < 1) item.quantity = 1;
    }
    saveCart(cart);
}