const cart=$("#basketCounter")
$(".add-to-cart-container").click(function(){
    let counter=parseInt(cart.text())+1
    cart.text(counter)
})
const form=$("#contactForm")
form.submit(function(event){
    event.preventDefault()
    Swal.fire(
        'Great success!',
        'Thank you for contacting us!',
        'success'
      )
})
