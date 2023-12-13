import React from 'react'

const Spotlight = () => {
    document.addEventListener('mousemove', (e) => {
        const spotlight = document.getElementById('spotlight');
        spotlight.style.left = e.pageX + 'px';
        spotlight.style.top = e.pageY + 'px';
      });
      
      document.addEventListener('mouseenter', () => {
        const spotlight = document.getElementById('spotlight');
        spotlight.style.width = '300px';
        spotlight.style.height = '300px';
      });
      
      document.addEventListener('mouseleave', () => {
        const spotlight = document.getElementById('spotlight');
        spotlight.style.width = '300px';
        spotlight.style.height = '300px';
      });
  return (
    <div id="spotlight"></div>
  )
}

export default Spotlight