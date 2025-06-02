$(document).ready(() => {
  // Welcome message on page load
  alert("Welcome to the JavaScript Events Demo!")
  console.log("Page loaded successfully!")

  // Handle dropdown change
  $("#color-select").change(function () {
    const selectedValue = $(this).val()
    const $display = $("#selected-color-display")

    if (selectedValue) {
      $display
        .removeClass()
        .addClass(`p-3 rounded-3 text-white bg-${selectedValue}`)
        .text(`Selected: ${$(this).find("option:selected").text()}`)
    } else {
      $display.removeClass().addClass("p-3 rounded-3 text-white bg-secondary").text("No color selected")
    }
  })

  // Calculator functions
  function calculate(operation) {
    const num1 = Number.parseFloat($("#num1").val())
    const num2 = Number.parseFloat($("#num2").val())
    const $resultDisplay = $("#result")

    if (isNaN(num1) || isNaN(num2)) {
      $resultDisplay.text("Please enter valid numbers")
      return
    }

    let result
    switch (operation) {
      case "add":
        result = num1 + num2
        break
      case "subtract":
        result = num1 - num2
        break
      case "multiply":
        result = num1 * num2
        break
      case "divide":
        if (num2 === 0) {
          $resultDisplay.text("Cannot divide by zero")
          return
        }
        result = num1 / num2
        break
    }

    $resultDisplay.text(`Result: ${result}`)
  }

  // Calculator button click events
  $("#btn-add").click(() => {
    calculate("add")
  })
  $("#btn-subtract").click(() => {
    calculate("subtract")
  })
  $("#btn-multiply").click(() => {
    calculate("multiply")
  })
  $("#btn-divide").click(() => {
    calculate("divide")
  })

  // Color box mouse events
  $("#color-box").hover(
    function () {
      $(this).removeClass("bg-primary").addClass("bg-danger").text("Mouse is over me!")
    },
    function () {
      $(this).removeClass("bg-danger").addClass("bg-primary").text("Hover over me!")
    },
  )

  // Keyboard events
  $("#key-input").keydown((event) => {
    $("#key-display").text(`Key pressed: ${event.key} (Code: ${event.code})`)
  })

  // Theme toggle functionality
  $("#theme-toggle").click(function () {
    $("body").toggleClass("dark-mode")

    if ($("body").hasClass("dark-mode")) {
      $(this).text("Toggle Light Mode").removeClass("btn-outline-primary").addClass("btn-outline-light")
    } else {
      $(this).text("Toggle Dark Mode").removeClass("btn-outline-light").addClass("btn-outline-primary")
    }
  })

  // Form submission handler
  $("#user-form").submit(function (event) {
    event.preventDefault()

    const name = $("#name").val()
    const email = $("#email").val()
    const message = $("#message").val()
    const $formMessage = $("#form-message")

    // Display success message
    $formMessage
      .text(`Thank you, ${name}! Your message has been received.`)
      .removeClass("d-none alert-danger")
      .addClass("alert alert-success")

    // Reset the form
    this.reset()

    // Hide the message after 5 seconds
    setTimeout(() => {
      $formMessage.addClass("d-none")
    }, 5000)
  })

  // Text manipulation functions
  function transformText(operation) {
    const input = $("#text-input").val()
    const $resultDisplay = $("#text-result")

    if (!input) {
      $resultDisplay.text("Please enter some text first")
      return
    }

    switch (operation) {
      case "uppercase":
        $resultDisplay.text(input.toUpperCase())
        break
      case "lowercase":
        $resultDisplay.text(input.toLowerCase())
        break
      case "reverse":
        $resultDisplay.text(input.split("").reverse().join(""))
        break
      case "count":
        $resultDisplay.text(`Your text contains ${input.length} characters`)
        break
    }
  }

  // Text manipulation button click events
  $("#btn-uppercase").click(() => {
    transformText("uppercase")
  })
  $("#btn-lowercase").click(() => {
    transformText("lowercase")
  })
  $("#btn-reverse").click(() => {
    transformText("reverse")
  })
  $("#btn-count").click(() => {
    transformText("count")
  })

  // Counter variables and functions
  let count = 0
  let timerInterval = null
  let seconds = 0
  let minutes = 0
  let timerRunning = false

  function updateCounterDisplay() {
    $("#counter-display").text(count)
  }

  // Counter button click events
  $("#btn-increment").click(() => {
    count++
    updateCounterDisplay()
  })

  $("#btn-decrement").click(() => {
    if (count > 0) {
      count--
    }
    updateCounterDisplay()
  })

  $("#btn-reset").click(() => {
    count = 0
    updateCounterDisplay()
  })

  // Timer functions
  function updateTimer() {
    seconds++
    if (seconds >= 60) {
      seconds = 0
      minutes++
    }

    const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
    $("#timer-display").text(formattedTime)
  }

  $("#timer-button").click(function () {
    if (timerRunning) {
      // Stop the timer
      clearInterval(timerInterval)
      $(this).text("Start Timer")
      timerRunning = false
    } else {
      // Start the timer
      timerInterval = setInterval(updateTimer, 1000)
      $(this).text("Stop Timer")
      timerRunning = true
    }
  })
})
