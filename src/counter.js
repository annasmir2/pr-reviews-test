export function setupCounter(element) {
  let counters = 0
  const setCounter = (count) => {
    counters = count
    element.innerHTML = `Count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
