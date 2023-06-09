import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { useCart } from '../hooks/useCart'
import { formatCurrency } from '../utils/formatCurrency'
import ModalCheckout from './ModalCheckout'
import Warning from './Warning'


export default function Cart() {
   const { cartItems, MAX_NUM_PRODUCTS, clearCart, removeFromCart } = useCart()
   const [modalShow, setModalShow] = useState(false)
   const [toast, setToast] = useState({ isOpen: false, title: '', message: '', type: '', delay: 3500 })

   const handleBuyButton = () => {
      if (cartItems.length <= 0) {
         setToast({
            isOpen: true,
            title: 'Your Cart is empty.',
            message: 'Please add some products.',
            type: 'warning',
            delay: 3500
        })
      }
      else {
         setModalShow(true)
      }
   }     
   return (
      <>
      <Warning
            body={toast}
            onHide={() => setToast({...toast, isOpen:false})}
      />      
      <Container className="border border-2 border-dark p-4">
         <h4>Cart</h4>
         <Container>
            {(cartItems.length > 0) && 
            <Table striped bordered hover>
               <thead>
               <tr>
                  <th>Product Name</th>
                  <th>Amount</th>
                  <th>Unit Price</th>
                  <th>Tax</th>
                  <th>Price (no Tax)</th>
                  <th>Price (incl.Tax)</th>
                  <th>Remove</th>
               </tr>
               </thead>
               <tbody>
               {cartItems.map((item, idx: number) => (
                  <tr key={idx} >
                     <td>{item.prod.productName}</td>
                     <td>{item.amount}</td>
                     <td>{formatCurrency(item.prod.price)}</td>
                     <td>{item.prod.taxRate}%</td>
                     <td>{formatCurrency(item.prod.price*item.amount)}</td>
                     <td>{formatCurrency(item.prod.price*(100+item.prod.taxRate)/100*item.amount)}</td>
                     <td><Button variant="danger" onClick={() => removeFromCart(item.prod.id)}>X</Button></td>
                  </tr>                  
               ))}              


               
               </tbody>
               <tfoot>
                <tr>
                  <td className="p-3 text-end fw-bold" colSpan={4}>Total:</td>
                  <td className="p-3 text-primary fw-bold" >
                     {formatCurrency(cartItems.reduce((total, cartItem) => {
                                       return total + (cartItem.prod.price) * cartItem.amount
                                     }, 0))}
                  </td>
                  <td className="p-3 text-primary fw-bold" >
                     {formatCurrency(cartItems.reduce((total, cartItem) => {
                                       return total + (cartItem.prod.price) * ((100+cartItem.prod.taxRate)/100) * cartItem.amount
                                     }, 0))}
                  </td>
                  <td ></td>
               </tr>
               </tfoot>
            </Table>
            }
         </Container>

         <Container className="pt-4">

            <Row className="w-full align-items-center justify-content-between g-3">
            <Col>
               <Button variant="danger" onClick={clearCart}>Clear Cart</Button>
            </Col>        

            <Col>
            <div className="text-center">
               <p>Number of products {cartItems.length}/{MAX_NUM_PRODUCTS}<i className="bi bi-6-square-fill"></i></p>
               <progress id="numproducts" value={cartItems.length} max={MAX_NUM_PRODUCTS}> {cartItems.length} </progress>

            </div>
            </Col>


            <Col>
               <Button variant="success" onClick={handleBuyButton}>Buy!</Button>
            </Col>

         
            </Row>

         </Container>
      </Container>
    <ModalCheckout
      show={modalShow}
      onHide={() => setModalShow(false)}
    />      
      </>
   )
}
