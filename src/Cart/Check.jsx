import React,{useState} from 'react'

const Check = ({ cartItems, totalPrice }) => {
    const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);

    const checkout = async () => {
      // Perform necessary actions before opening the payment gateway (e.g., validating items, calculating total)
  
      // For simplicity, we assume a successful checkout and open the payment gateway modal
      setPaymentModalOpen(true);
    };
  
    const handlePayment = async () => {
      // Implement the logic to interact with the actual payment gateway here
      // This may involve making an API request to the payment gateway service
  
      // For simplicity, we assume a successful payment and close the modal
      setPaymentModalOpen(false);
    };
  
    return (
      <div>
        <button onClick={checkout}>Checkout</button>
  
        {/* Payment Gateway Modal */}
        {isPaymentModalOpen && (
          <div className="payment-modal">
            <h2>Payment Gateway</h2>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            {/* Add payment gateway components here */}
            <button onClick={handlePayment}>Proceed to Payment</button>
          </div>
        )}
      </div>
    );
  };

export default Check
