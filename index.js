let isLoggedIn = false;

function checkout() {
  if (cartIsEmpty()) {
    console.log("Cart is empty. Please add items before checking out.");
    return;
  }

  if (isLoggedIn) {
    processLoggedInCheckout();
  } else {
    askGuestOption();
  }
}

function cartIsEmpty() {
  // Assuming you have a global variable `cart` that holds the items in the cart.
  return cart.length === 0;
}

function askGuestOption() {
  const guestOption = prompt("Do you want to check out as a guest? (yes/no)");

  if (guestOption.toLowerCase() === "yes") {
    processGuestCheckout();
  } else if (guestOption.toLowerCase() === "no") 
  
  {
    
    
    // Prompt user to log in or create an account
    console.log("Please log in or create an account to proceed.");
  } else {
    console.log("Invalid option. Please enter 'yes' or 'no'.");
  }
}

function processGuestCheckout() {
  // Process guest checkout logic
  console.log("Guest checkout process initiated.");
}

function processLoggedInCheckout() {
  // Process logged-in user checkout logic
  console.log("Logged-in user checkout process initiated.");
}

function multiply(a, b) {
    return a * b;
  }
  
  // Unit tests
  console.log("Expect 2 multiplied by 3 to be 6:", multiply(2, 3) === 6);
  console.log("Expect 5 multiplied by 0 to be 0:", multiply(5, 0) === 0);
  console.log("Expect -4 multiplied by 7 to be -28:", multiply(-4, 7) === -28);
  

  function concatOdds(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        result += arr[i];
      }
    }
    return result;
  }
  
  // Unit tests
  console.log("Expect [1, 2, 3, 4, 5] to concatenate odds as '135':", concatOdds([1, 2, 3, 4, 5]) === "135");
  console.log("Expect [2, 4, 6, 8, 10] to concatenate odds as '':", concatOdds([2, 4, 6, 8, 10]) === "");
  console.log("Expect [1, 3, 5, 7, 9] to concatenate odds as '13579':", concatOdds([1, 3, 5, 7, 9]) === "13579");
  