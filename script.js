// Select all elements with the class 'ripple'
const buttons = document.querySelectorAll('.ripple')

// Loop through each button and add a click event listener
buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        // Get the x and y coordinates of the click event on the page
        const x = e.pageX
        const y = e.pageY

        // Get the button's top and left positions relative to the page
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        // Calculate the x and y coordinates inside the button
        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        // Create a span element to represent the ripple circle
        const circle = document.createElement('span')
        // Add the 'circle' class to the span for styling
        circle.classList.add('circle')
        // Set the position of the ripple circle within the button
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        // Append the ripple circle to the button
        this.appendChild(circle)

        // Remove the ripple effect after 500 milliseconds
        setTimeout(() => circle.remove(), 500)
    })
})