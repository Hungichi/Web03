app.post('/add-to-cart', async (req, res) => {
    const { username, productId, quantity } = req.body;
  
    try {
      let user = await user.findById(username);
      if (!user) {
        return res.status(404).send('User not found');
      }
  
      const itemIndex = user.cart.findIndex(item => item.productId.equals(productId));
      if (itemIndex > -1) {
        user.cart[itemIndex].quantity += quantity;
      } else {
        user.cart.push({ productId, quantity });
      }
  
      await user.save();
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  });