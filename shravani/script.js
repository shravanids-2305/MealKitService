
let vendor_login = [{
  username: 'hometown@gmail.com',
  password: 'abc@123'
}]

localStorage.setItem('vendor', JSON.stringify(vendor_login))
let cust_login = [{
  username: 'ms@gmail.com',
  password: 'abc@123'
}]

localStorage.setItem('customer', JSON.stringify(cust_login))
let vend = localStorage.getItem('vendor')
console.log(JSON.parse(vend), typeof (vend), "<<<<<<<<<<<<<<<<<<<<");

const container = document.getElementById('container');
const registerBtn = document.getElementById('registers');
const loginBtn = document.getElementById('logins');

registerBtn.addEventListener('click', () => {
  container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
  container.classList.remove("active");
});

// Function to handle login check
function checkLogin() {
  let userType = document.querySelector('input[name="login-type"]:checked').value; // Get the selected user type
  const username = signin.querySelector('input[type="email"]').value;
  const password = signin.querySelector('input[type="password"]').value;

  console.log(username, password);
  let logdata = JSON.parse(localStorage.getItem('vendor'))


  if (userType === 'vendor') {
    logdata.forEach(vendor => {
      if (username == vendor.username && password == vendor.password) {
        alert('Login successful as Vendor');
      } else {
        alert('Vendor login failed');
      }
    });
  } else if (userType === 'customer') {
    // Check if the customer key exists in localStorage
    if (localStorage.getItem('customer')) {
      alert('Login successful as Customer');
    } else {
      alert('Customer login failed');
    }
  }
}

function checkregister() {
  let userType = document.querySelector('input[name="login-type"]:checked').value; // Get the selected user type
  const username = signup.querySelector('input[type="email"]').value;
  const password = signup.querySelector('input[type="password"]').value;

  console.log(username, password);
  let logdata_v = JSON.parse(localStorage.getItem('vendor'))
  let logdata_c = JSON.parse(localStorage.getItem('customer'))


  if (userType === 'vendor') {
    let user = {
      username: username,
      password: password
    }
    logdata_v.push(user)
    localStorage.setItem('vendor', JSON.stringify(logdata_v))
  } else if (userType === 'customer') {
    let user = {
      username: username,
      password: password
    }
    logdata_c.push(user)
    localStorage.setItem('customer', JSON.stringify(logdata_c))
    alert('Register successful as Customer');

  }
}

// Event listener for the login button
document.getElementById('login').addEventListener('click', checkLogin);
document.getElementById('register').addEventListener('click', checkregister);