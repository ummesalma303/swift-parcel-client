// import { CardElement } from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import { AuthContext } from '@/providers/AuthProvider';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure()
  const {total,user,parcelIds} = useContext(AuthContext);
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransaction] = useState("");
  // console.log(total)
    const [error,setError] = useState()
    const stripe = useStripe();
    const elements = useElements();


    useEffect(() => {
      if (total>0) {
        
        axiosSecure.post('/create-payment-intent',{price:total})
      .then(res=>{
        console.log(res.data)
        setClientSecret(res.data?.clientSecret)
        console.log(res.data?.clientSecret)
      })
      .catch(err=>console.log(err))
      }
      
    }, [total])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
          // Stripe.js has not loaded yet. Make sure to disable
          // form submission until Stripe.js has loaded.
          return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
          return;
        }


        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            setError(error.message)
            console.log('[error]', error);
          } else {
            setError('')
            console.log('[PaymentMethod]', paymentMethod);
          }

          // confirm payment
          const {paymentIntent,error:confirmError}= await stripe.confirmCardPayment(clientSecret,{
            payment_method: {
              card: card,
              billing_details: {
                name: user?.displayName || "anonymous",
                email: user?.email || "anonymous",
              },
            },
          })

          if (confirmError) {
            console.log('confirm error',confirmError)
          }
          else  {
            console.log('payment intent--->',paymentIntent)
            if(paymentIntent?.status === 'succeeded'){
              setTransaction(paymentIntent.id)
              navigate('/dashboard/paymentSuccess')
              const payment = {
                name:user?.displayName,
                email:user?.email,
                date:new Date(),
                transactionId:paymentIntent.id,
                parcelIds:parcelIds
              }
            }
            axiosSecure.patch('/payment',{parcelIds:parcelIds})
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
          }


    }
    return (
        <div className='my-5'>
             <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />

      {
        error&& <p className='text-red-500'>{error}</p>
      }
      {
        transactionId&&<p className='text-green-400'>Your Transaction Id:{transactionId}</p>
      }
      <Button type="submit" className='mt-4' disabled={!stripe || !clientSecret}>
        Pay
      </Button>
    </form>
        </div>
    );
};

export default CheckoutForm;