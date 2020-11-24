const patisserie = {
  bananaCaramel: {
    stock: 3,
    price: 9.99,
  },
  contessa: {
    stock: 5,
    price: 7.99,
  },
  concorde: {
    stock: 11,
    price: 22.99,
  },
  mouseCake: {
    stock: 8,
    price: 16.99,
  },
  confettiSuprise: {
    stock: 9,
    price: 14.99,
  },
};

const cakeType = document.getElementById('cakeSelect').value;
const orderAmount = document.getElementById('cakeAmount');
const orderBtn = document.getElementById('submit_btn');


function checkOrder (order) {
    console.log()
    //setTimeout
    return new Promise ((resolve, reject) => {
      let nameOrder = order[0];
      let amountOfOrder = parseInt(order[1]);
        if (parseInt(patisserie[order[0]]['stock']) >= amountOfOrder) {
          let totalpayment = parseInt(patisserie[order[0]]['price']) * parseInt(order[1])
          console.log(`Your order is in stock and your payment is ${totalpayment} euro.`)
          resolve ([order, totalpayment]);
        } else {
          console.log(`Your order is not enough in stocks`)
        }
    })


};



 function payment (resolvedValueArray) {
  let name = resolvedValueArray[0][0];
  let total = parseInt(resolvedValueArray[0][1]) * parseFloat(patisserie[name]['price'])
  //setTimeout
  return new Promise((resolve, reject) => {
    let confirm = prompt(`Are you confirming the payment ${total} euro. Write 1 to conform.`)
    if (confirm == 1) {
      console.log('Payment Completed...')
      resolve (resolvedValueArray)
    } else {
      console.log(`Your order not confirmed.`)
    }
  })
  
}

//console.log(payment([cakeType, parseInt(orderAmount.value)]))

function stockControl (resolvedValueArray) {
  
    //setTimeout
    return new Promise((resolve, reject) => {
      let stock = parseInt(patisserie[resolvedValueArray[0][0]].stock) - resolvedValueArray[0][1]
      if (stock > 3) {
        console.log('Your stocks ara enough.')
        resolve ('Your stocks ara enough.')
      } else {
        console.log('Your stocks ara not enough.')
      }
    })

  }



orderBtn.addEventListener('click', function () {
  let orders = [cakeType, parseInt(orderAmount.value)];
  checkOrder(orders)
  .then((resolvedValueArray) => {
    return payment(resolvedValueArray)
  })
  .then((resolvedValueArray) => {
   return stockControl(resolvedValueArray)
  }).catch()
})