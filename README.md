# My Portfolio

Welcome to my personal portfolio repository!

## About the Project

This project was developed as part of the **[Alura Include program](https://www.alura.com.br/empresas/impacto-social)**. The program aims to help participants from underrepresented groups in tech gain the skills and knowledge to build portfolios and prepare for the tech workforce. This project showcases the **front-end skills** I have developed through the program since October 2024, including HTML, CSS & JAVASCRIPT.

## Features

- **Home**: A brief introduction to who I am, my professional background, and my career transition into data science.
- **Skills**: A list of the technical skills I possess, including programming languages, frameworks, and tools I use in data analysis, web development, and other fields.
- **Portfolio**: A collection of various projects I’ve worked on, demonstrating my technical skills in areas like Python, SQL, JavaScript, and more.


## Technologies and Techniques Used

### HTML

- **Semantic HTML5**:  
  The website's structure is built using semantic HTML elements such as `<header>`, `<footer>`, `<nav>`, and `<section>`. These elements improve accessibility and search engine optimization (SEO).
  
- **External Assets**:  
  The site uses external images, linked stylesheets, and web fonts. Image assets (like icons and photographs) and external links (e.g., social media profiles) enhance the visual appeal and user experience.

- **Anchor Links**:  
  Navigation is structured with anchor links (`<a>`), facilitating easy movement between the different sections of the portfolio, such as `Home`, `Skills`, and `Portfolio` pages.

- **Responsive Layout**:  
  The `meta viewport` tag in the `<head>` ensures the page scales correctly on different devices, making the website responsive to mobile and desktop views.

### CSS

- **CSS Variables**:  
  Custom properties (CSS variables) are used to manage common design tokens such as primary and secondary colors, fonts, and overlay effects. This allows easy updates and consistency throughout the design.

  ```css
  :root {
      --primary-color: #000000;
      --secondary-color: #F6F6F6;
      --tertiary-color: #90c4d9;
      --hover-color: #272727;
      --overlay-opacity: rgba(0, 0, 0, 0.8);
      --primary-font: 'Do Hyeon';
      --secondary-font: 'Lato';
  }
  ```

- **Global Reset**:
   A global reset is applied to remove default browser margin and padding, ensuring consistent spacing across browsers.

  ```
  * {
      margin: 0;
      padding: 0;
  }
  
  ```

- **Presentation Section**:
  The main presentation section uses Flexbox to arrange text and images side by side. A ::before pseudo-element adds a semi-transparent overlay to improve text readability.
  
  ```
  .presentation {
    position: relative; /* Allows pseudo-elements to position correctly */
    padding: 5% 15%; /* Adds spacing around the section */
    display: flex; /* Aligns children horizontally */
    align-items: center; /* Centers items vertically */
    justify-content: space-between; /* Evenly spaces children */
    gap: 82px; /* Space between content and image */
  }
  
  .presentation::before {
      content: ""; /* Adds a semi-transparent overlay */
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--overlay-opacity); /* Semi-transparent black overlay */
      z-index: 0; /* Ensures the overlay is behind the content */
  }
  
  .presentation__content {
      display: flex; /* Aligns text content vertically */
      flex-direction: column;
      gap: 40px; /* Adds space between text blocks */
  }
  
  .presentation__content__title {
      font-size: 2.25rem; /* Large font size for titles */
      font-family: var(--primary-font); /* Main font for titles */
  }
  
  .presentation__content__text {
      font-size: 1.3rem; /* Readable font size for body text */
      font-family: var(--secondary-font); /* Body font */
      text-align: justify; /* Justified alignment for neatness */
  }

  ```

