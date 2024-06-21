document.getElementById('payment-method').addEventListener('change', function() {
    var creditCardInfo = document.getElementById('credit-card-info');
    if (this.value === 'credit-card') {
        creditCardInfo.style.display = 'block';
    } else {
        creditCardInfo.style.display = 'none';
    }
});

document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var paymentMethod = document.getElementById('payment-method').value;

    if (paymentMethod === 'credit-card') {
        var card = document.getElementById('card').value;
        alert('Pagamento com cartão de crédito realizado com sucesso!');
    } else if (paymentMethod === 'financing') {
        alert('Solicitação de financiamento enviada com sucesso!');
    }

    console.log(`Nome: ${name}, Email: ${email}, Método de Pagamento: ${paymentMethod}`);
});
