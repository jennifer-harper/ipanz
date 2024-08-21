

// function updateElementHeights(selectors) {
//     const desktopWidth = 1024;

//     if (window.innerWidth >= desktopWidth) {
//         selectors.forEach(selector => {
//             const elements = document.querySelectorAll(selector);
//             let maxHeight = 0;

//             // Reset heights to auto to recalculate
//             elements.forEach(el => {
//                 el.style.height = 'auto'; // Reset height to auto
//             });

//             // Calculate the tallest height
//             elements.forEach(el => {
//                 const elementHeight = el.offsetHeight;
//                 if (elementHeight > maxHeight) {
//                     maxHeight = elementHeight;
//                 }
//             });

//             // Apply the tallest height to all elements
//             elements.forEach(el => {
//                 el.style.height = `${maxHeight}px`;
//             });
//         });
//     } else {
//         // Reset styles for mobile
//         selectors.forEach(selector => {
//             const elements = document.querySelectorAll(selector);
//             elements.forEach(el => {
//                 el.style.height = ''; // Reset height to auto
//             });
//         });
//     }
// }

// // List of selectors for elements you want to target
// const selectors = ['.same-height h3', '.same-height p:not(button p)'];

// // Run on page load
// updateElementHeights(selectors);

// // Run on window resize
// window.addEventListener('resize', () => updateElementHeights(selectors));


function updateElementHeights() {
    const desktopWidth = 1024;

    // Select all .same-height-wrapper containers
    const wrappers = document.querySelectorAll('.same-height-wrapper');

    wrappers.forEach(wrapper => {
        const selectors = ['h3', 'p:not(button p)']; // List of child elements to target within each wrapper

        selectors.forEach(selector => {
            const elements = wrapper.querySelectorAll(selector);
            let maxHeight = 0;

            // Reset heights to auto to recalculate
            elements.forEach(el => {
                el.style.height = 'auto'; // Reset height to auto
            });

            // Calculate the tallest height
            elements.forEach(el => {
                const elementHeight = el.offsetHeight;
                if (elementHeight > maxHeight) {
                    maxHeight = elementHeight;
                }
            });

            // Apply the tallest height to all elements within the wrapper
            elements.forEach(el => {
                el.style.height = `${maxHeight}px`;
            });
        });
    });

    // Reset styles for mobile
    if (window.innerWidth < desktopWidth) {
        wrappers.forEach(wrapper => {
            const elements = wrapper.querySelectorAll('h3, p:not(button p)');
            elements.forEach(el => {
                el.style.height = ''; // Reset height to auto
            });
        });
    }
}

// Run on page load
updateElementHeights();

// Run on window resize
window.addEventListener('resize', updateElementHeights);