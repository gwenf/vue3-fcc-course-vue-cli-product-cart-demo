<template>
  <main class="wrapper">
    <h1>Past Orders</h1>

    <table class="product-table">
      <thead>
        <tr>
          <td><span class="sr-only">Product Image</span></td>
          <td>Product</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Total</td>
          <td><span class="sr-only">Actions</span></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><i class="icofont-carrot icofont-4x" /></td>
          <td>Carrot</td>
          <td>$1.00</td>
          <td>1</td>
          <td>$1.00</td>
          <td><button class="btn btn-dark">Add</button></td>
        </tr>
        <tr>
          <td><i class="icofont-banana icofont-4x" /></td>
          <td>Banana</td>
          <td>$0.50</td>
          <td>10</td>
          <td>$5.00</td>
          <td><button class="btn btn-dark">Add</button></td>
        </tr>
      </tbody>
    </table>
  </main>

</template>
