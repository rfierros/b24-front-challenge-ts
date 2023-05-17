import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import productsList from '../data/products.json'
import { productProps } from '../interfaces/interfaces'
import { useCart } from '../hooks/useCart'
import { formatCurrency } from '../utils/formatCurrency'
import Warning from './Warning'

export default function ProductSelection() {
   const { addToCart, MAX_NUM_PRODUCTS, cartItems } = useCart()

   const [amount, setAmount] = useState(0)
   const [selected, setSelected] = useState<productProps | undefined>({
      id: '',
      productName: '',
      maxAmount: 0,
      taxRate: 0,
      price: 0
   })
   const [toast, setToast] = useState({ isOpen: false, title: '', message: '', type: '', delay: 3500 })

   const handleAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
      setAmount(parseInt(event.target.value, 10))
   }
   const handleSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const currentId = event.target.value
      setSelected(productsList.find((i: productProps) => {
         return (i.id === currentId)
      }))      
      setAmount(0)
   }

   const handleAddProduct = () => {
      if ( amount == 0){
         setToast({
            isOpen: true,
            title: 'Incorrect amount.',
            message: 'Please choose an amount of items bigger than 0.',
            type: 'warning',
            delay: 3500
         })
      } else 
         if (cartItems.length >= MAX_NUM_PRODUCTS) {
            setToast({
               isOpen: true,
               title: 'Too many products.',
               message: 'The maximum amount of different products is ' + MAX_NUM_PRODUCTS + '.',
               type: 'warning',
               delay: 3500
            })
      }
      else {
         if (selected !== undefined) {
            addToCart(selected,amount)
         }
      }
   }

   return (
      <>
      <Warning
            body={toast}
            onHide={() => setToast({...toast, isOpen:false})}
      />
      <Container className="border border-2 border-dark p-4 align-items-center justify-content-center">
         <h4>Product Selection</h4>
         <Row className="w-full align-items-center justify-content-between g-3">
         <Col>
               <select name="products" id="products" onChange={handleSelected} defaultValue=''>
                  <option value="" disabled>Choose a product</option>
                  {productsList.map((item: productProps, i: number) => (
                     <option key={i} value={item.id}>{item.productName}</option>
                  ))}
               </select>
         </Col>        

         <Col>
            <div className="text-center">
               <div>Amount: <span>{amount}</span></div>
               <input type="range" id="amount" min="0" max={typeof selected !== 'undefined' ? selected.maxAmount : 0} value={amount}
                     onChange={handleAmount}/>
            </div>            
         </Col>

         <Col>
         <div className="p-2">
            <span className="p-2">{amount}</span>
            <span className="p-2">X</span>
            <span className="p-2">{typeof selected !== 'undefined' && formatCurrency(selected.price)}</span>
            <span className="p-2">=</span>
            <span className="p-2">{typeof selected !== 'undefined' && formatCurrency(selected.price*amount)}</span>
         </div>
         </Col>

         <Col>
            <Button onClick={handleAddProduct}>add to Cart</Button>
         </Col>
         </Row>
      </Container>
      </>
   )
}