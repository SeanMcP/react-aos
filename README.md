# React AOS ・

A React implementation of [Michał Sajnóg's ](https://github.com/michalsnik) [AOS (animate on scroll)](https://github.com/michalsnik/aos) library

## Why

AOS integrates well with React as it is, but importing the CSS and pulling `AOS.init` into a HOC or Hook makes implementation simpler. Additionally, `react-aos` provides an `AOS` component that handles the `data-aos` attributes and checks provided values with PropTypes.