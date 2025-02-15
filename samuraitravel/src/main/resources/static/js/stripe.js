const stripe = Stripe('pk_test_51QrLBrRxGCe9majKYX4BP3q4yP53zXG6ZQjJUdL6sebSqLM7TKxVOlQEBAwT8AuXaAthzdhZBt41Y9AayTDM7AcE00EMZbqjAk');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click',()=> {
	stripe.redirectToCheckout({
		sessionId:sessionId
	})
});