const bar = document.getElementById('bar');
const close = document.getElementById('close')
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click' , () =>{
        nav.classList.add('active');
    })
}
if (close){
    close.addEventListener('click' , () =>{
        nav.classList.remove('active');
    })
}    

if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready);
}else{
    ready();
}

function ready(){
    var removeCartItemButtons = document.getElementsByClassName('fa-dot-circle')
console.log(removeCartItemButtons)
for(var i = 0;i < removeCartItemButtons.length; i++){
    var button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
    }
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for(var i = 0;i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

}


function removeCartItem(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.remove()
        updateCartTotal()
    }

    function quantityChanged(event){
        var input = event.target
        if (NaN(input.value) || input.value <= 0){
            input.value = 1
        }
        updateCartTotal()
    }
    

function updateCartTotal(){
    var cartItemContainer = document.getElementsByTagName('tbody')[0]
    var cartRows = cartItemContainer.getElementsByTagName('tr')
    var total = 0
    for(var i = 0;i < cartRows.length; i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$',''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
    document.getElementsByClassName('cart-total')[0].innerText = '$'+ total


   
    
}