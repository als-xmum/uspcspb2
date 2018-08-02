((window) => {
  const document = window.document
  const $order = document.querySelector('.order button')
  const $colors = document.querySelectorAll('#model ul.colors li')
  const $capacities = document.querySelectorAll('#model ul.capacities li')
  const selection = {
    color: null,
    capacity: null
  }
  const resetChoice = (property, elements) => {
    elements.forEach($el => {
      $el.classList.remove('selected')
    })
    selection[property] = null
  }
  const applyChoice = (property, elements, getValueFromEl) => {
    elements.forEach($el => {
      $el.addEventListener('click', e => {
        e.preventDefault()
        resetChoice(property, elements)
        e.srcElement.classList.add('selected')
        selection[property] = getValueFromEl($el)
      })
    })
  }
  applyChoice('color', $colors, $el => $el.getAttribute('aria-label'))
  applyChoice('capacity', $capacities, $el => $el.textContent)
  $order.addEventListener('click', e => {
    const { color, capacity } = selection
    if (color === null) {
      return alert('Please select the color you prefer.')
    }
    if (capacity === null) {
      return alert('Please select the capacity that meets your requirement.')
    }
    alert(`You've ordered a USPC Solar Power Bank with color ${color} and capacity ${capacity}.
Please contact us for your present!`)
  })
})(window)
