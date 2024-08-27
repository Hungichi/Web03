// const App = () => {
//     const [cartItems, setCartItems] = useState([]);
  
//     const addToCart = async (username, product) => {
//       try {
//         const response = await axios.post('http://localhost:5000/add-to-cart', {
//           username,
//           productId: product._id,
//           quantity: 1
//         });
//         setCartItems(response.data.cart);
//       } catch (error) {
//         console.error('Error adding to cart:', error);
//       }
//     };
// }

// export default App