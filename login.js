document.getElementById('loginForm').addEventListener('submit', function(event){ 
    preventDefault(); // Prevent the default form submission)
    const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;
                const message = document.getElementById('message');

                // Simple validation
                if (username && password) {
                    message.textContent = 'Logging in...';
                    console.log(`Username: ${username}, Password: ${password}`);
                    
                    // Optionally reset the form after submission
                    loginForm.reset();

                    // Here you can send the data to the server, 
                    // sendLoginRequest(username, password);
                } else {
                    message.textContent = 'Please enter both username and password.';
                }
        
           });