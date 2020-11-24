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

let stock = 0;
const cakeType = document.getElementById('cakeSelect').value;
const orderAmount = document.getElementById('cakeAmount').value;
const orderBtn = document.getElementById('submit_btn');


const checkOrder = (order) => {
    console.log(patisserie.hasOwnProperty(order[0]))
    //setTimeout
    return new Promise ((resolve, reject) => {
        if (patisserie.hasOwnProperty(order[0]) && patisserie.order[0][1] >= orderAmount) {
          let totalpayment = patisserie.order[0].price * patisserie.order[1]
          console.log(`Your order is in stock and your payment is ${totalpayment} euro.`)
          resolve (totalpayment);
        } else {
          reject (`Your order is not enough in stocks`)
        }
    })


};



const payment = (resolvedValueArray) => {
  
  //setTimeout
  return new Promise((resolve, reject) => {
    let confirm = prompt(`Are you confirming the payment ${resolvedValueArray} euro. Write 1 to conform.`)
    if (confirm == 1) {
      console.log('Payment Completed')
      resolve ('confirmed')
    } else {
      reject (`Your order not confirmed.`)
    }
  })
  
}

const stockControl = (resolvedValueArray) => {
  
    //setTimeout
    return new Promise((resolve, reject) => {
      let stock = patisserie.order[0].stock - order
      if ()
    })

  }



orderBtn.onclick = ()=>{
  // let order = ['contessa', 2];   // sample order template
  checkOrder(cakeType).then(stockControl(a))

  //then
  //catch  

}