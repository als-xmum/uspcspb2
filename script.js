((window) => {
  const $order = window.document.querySelector('.order button')
  $order.addEventListener('click', e => {
    alert('Your order is being proceeded.')
  })
})(window)
