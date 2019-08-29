/**
 * MDN: The Promise object represents the eventual completion (or failure)
 *  of an asynchronous operation, and its resulting value.
 */
/**
 * Analogy: Have you use a self order kiosk before?
 * On purchase a receipt is given to you.
 * Usually there will be a tv screen showing the numbers that are prepare.
 * When the order is prepared, you go to collect the order.
 *
 * This order the receipt.
 * You can't start to eat just because you have order the food,
 * you have to wait till you collect the item before is possible
 */

// waiter getting menu, or can be waiting for server response
const getMenu = () =>
  new Promise(
    resolve =>
      setTimeout(() => {
        resolve(["burger", "fries"]);
      }, 1000) // simulate data coming back 1 second later
  );

const readMenu = () => {
  const menuItems = getMenu();
  console.log(menuItems);
};

readMenu(); // Promise { <pending> }
