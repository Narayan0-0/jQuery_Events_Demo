# jQuery Events Demo Website

A comprehensive interactive website demonstrating various jQuery events and DOM manipulation techniques using jQuery, HTML, CSS, and Bootstrap.


### Live Demo
You can also view the live demo at: [jquery_demo](https://narayan0-0.github.io/jQuery_Events_Demo/)


## 🚀 Features

### Core jQuery Events
- **$(document).ready()**: Page load initialization
- **.change()**: Dynamic color selection dropdown
- **.click()**: Interactive calculator with arithmetic operations
- **.hover()**: Color-changing hover effects
- **.keydown()**: Real-time keyboard input capture
- **.submit()**: Form submission with validation

### Interactive Components
1. **Color Selector**: Dropdown that changes display box colors dynamically
2. **Calculator**: Perform basic arithmetic operations (+, -, ×, ÷)
3. **Hover Box**: Visual feedback on mouse interactions using jQuery hover
4. **Keyboard Tracker**: Displays pressed keys and their codes
5. **Contact Form**: User input form with jQuery validation and feedback
6. **Text Manipulator**: String operations using jQuery methods
7. **Counter & Timer**: Increment/decrement counter with start/stop timer

### Additional Features
- **Dark/Light Mode Toggle**: Theme switching with jQuery class manipulation
- **Responsive Design**: Mobile-friendly layout using Bootstrap
- **jQuery Animations**: Smooth transitions and effects
- **Chaining**: jQuery method chaining for efficient code

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Custom styling with transitions
- **jQuery 3.6.0**: JavaScript library for DOM manipulation
- **Bootstrap 5**: Responsive grid system and components
- **CDN**: jQuery and Bootstrap loaded via CDN

## 📁 Project Structure

```bash
jquery-events-demo/
│
├── index.html          # Main HTML file with jQuery CDN
├── styles.css          # Custom CSS styles
├── script.js           # jQuery JavaScript code
└── README.md           # Project documentation
```

## 🎯 Learning Objectives

This project demonstrates:
- **jQuery Selectors**: Efficient DOM element selection
- **Event Handling**: jQuery event methods and delegation
- **DOM Manipulation**: Using jQuery methods for content updates
- **Method Chaining**: Combining multiple jQuery operations
- **Form Processing**: jQuery form handling and validation
- **Animations**: jQuery effects and transitions
- **CSS Class Management**: addClass, removeClass, toggleClass
- **AJAX Ready**: Foundation for AJAX implementations

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML, CSS, and jQuery
- Internet connection (for CDN resources)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/jquery-events-demo.git
   ```

2. Navigate to the project directory:
   ```bash
   cd jquery-events-demo
   ```

3. Open `index.html` in your web browser:
   ```bash
   # On macOS
   open index.html
   
   # On Windows
   start index.html
   
   # On Linux
   xdg-open index.html
   ```


## 💡 How to Use

1. **Color Selector**: Choose a color from the dropdown to see the display box change
2. **Calculator**: Enter two numbers and click operation buttons to calculate
3. **Hover Box**: Move your mouse over the blue box to see jQuery hover effects
4. **Keyboard Input**: Type in the text field to see key codes displayed
5. **Contact Form**: Fill out the form and submit to see jQuery success message
6. **Text Manipulator**: Enter text and use buttons to transform it
7. **Counter**: Use increment/decrement buttons and start/stop the timer
8. **Theme Toggle**: Click the theme button to switch between light and dark modes

## 🎨 Customization

### Adding New jQuery Events
To add new jQuery events:

1. Add HTML elements in `index.html`
2. Create event handler functions in `script.js` using jQuery syntax
3. Use jQuery selectors and event methods

### jQuery Selectors
```javascript
// ID selector
$("#elementId")

// Class selector
$(".className")

// Element selector
$("tagName")

// Attribute selector
$("[attribute='value']")
```

### Styling with jQuery
- Use `.addClass()`, `.removeClass()`, `.toggleClass()`
- Implement `.css()` for direct styling
- Add jQuery animations with `.fadeIn()`, `.slideUp()`, etc.

## 📚 Code Examples

### jQuery Event Handler Example
```javascript
// Button click event with jQuery
$("#btn-add").click(function() {
  calculate("add");
});
```

### jQuery DOM Manipulation Example
```javascript
// Dynamic content update with method chaining
$("#result").text("New content").addClass("highlight").fadeIn();
```

### jQuery Form Handling Example
```javascript
// Form submission with jQuery
$("#user-form").submit(function(event) {
  event.preventDefault();
  // jQuery form processing
});
```

### jQuery Hover Effects
```javascript
// Hover with jQuery
$("#color-box").hover(
  function() {
    $(this).removeClass("bg-primary").addClass("bg-danger");
  },
  function() {
    $(this).removeClass("bg-danger").addClass("bg-primary");
  }
);
```

## 🔧 jQuery Methods Used

- **Selectors**: `$("#id")`, `$(".class")`, `$("element")`
- **Events**: `.click()`, `.change()`, `.hover()`, `.keydown()`, `.submit()`
- **DOM Manipulation**: `.text()`, `.val()`, `.html()`
- **CSS**: `.addClass()`, `.removeClass()`, `.toggleClass()`, `.hasClass()`
- **Effects**: `.fadeIn()`, `.fadeOut()`, `.slideUp()`, `.slideDown()`
- **Utilities**: `.each()`, `.map()`, `.filter()`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/jquery-enhancement`)
3. Commit your changes (`git commit -am 'Add jQuery animation'`)
4. Push to the branch (`git push origin feature/jquery-enhancement`)
5. Create a Pull Request

## 🙏 Acknowledgments

- jQuery Foundation for the amazing library
- Bootstrap team for the responsive framework
- jQuery documentation and community
- Stack Overflow jQuery community

## 🔗 Useful Links

- [jQuery Documentation](https://api.jquery.com/)
- [jQuery Learning Center](https://learn.jquery.com/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/)
- [jQuery CDN](https://code.jquery.com/)

---

⭐ **Star this repository if you found it helpful!**

💡 **Tip**: This project serves as a great foundation for learning jQuery and can be extended with AJAX, jQuery UI, and other jQuery plugins.
