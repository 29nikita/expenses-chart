# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot


### Links

- Solution URL: [Solution](https://github.com/29nikita/expenses-chart)
- Live Site URL: [Live Site](https://nikita-expenses-app.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [Angular](https://angular.io/) - JS Framework

### What I learned

This project made me learn how to work with chart.js module to create charts dynamically using the data present in the json file by calling it as API.

To see how you can add code snippets, see below:

```js
let myChart = new Chart("barChart", {
        type: 'bar',
        data: {
          labels: this.labelData, 
          datasets: [{
            label: '',
            data: this.dataSet, 
            backgroundColor : ['hsl(10, 79%, 65%)'],
            hoverBackgroundColor: ['hsl(10, 67%, 73%)']
          }]  
        },
        options: {
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            x: {
              grid: {
                display: false,
              }
            },
            y: {
              display: false
            }
          }
        }
      });
```

### Continued development

I will continue to focus more on how to work with chart.js package.

### Useful resources

- (https://www.chartjs.org/) - This helped me understand chart.js and how to work with it.

## Author

- Frontend Mentor - [@29nikita](https://www.frontendmentor.io/profile/29nikita)
