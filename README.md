<h1 align="center">MERN Stack Authentication System with Email Verification and Password Reset</h1>

<p align="center">
  <strong>A comprehensive authentication system built using the MERN stack (MongoDB, Express.js, React.js, and Node.js).</strong>
</p>

<h2>Features</h2>
<ul>
  <li><strong>User Registration and Login</strong>: Secure user management with hashed passwords.</li>
  <li><strong>Email Verification</strong>: Integration with <a href="https://mailtrap.io/">Mailtrap</a> to handle email verification links for account activation.</li>
  <li><strong>Password Reset</strong>: A password recovery workflow with secure token generation and email-based reset links.</li>
  <li><strong>JWT-Based Authentication</strong>: Protects routes and APIs using JSON Web Tokens.</li>
  <li><strong>Responsive UI</strong>: A user-friendly frontend for seamless interaction.</li>
</ul>

<h2>Installation</h2>
<ol>
  <li><strong>Clone the repository</strong>:
    <pre><code>git clone https://github.com/yourusername/mern-authentication-system.git
cd mern-authentication-system
</code></pre>
  </li>
  <li><strong>Install server dependencies</strong>:
    <pre><code>npm install
</code></pre>
  </li>
  <li><strong>Install client dependencies</strong>:
    <pre><code>cd frontend
npm install
</code></pre>
  </li>
  <li><strong>Set up environment variables</strong>:
    <p>Create a <code>.env</code> file in the <code>server</code> directory with the following variables:</p>
    <pre><code>MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
MAILTRAP_USER=your_mailtrap_username
MAILTRAP_PASS=your_mailtrap_password
</code></pre>
  </li>
  <li><strong>Run the application</strong>:
    <ul>
      <li>Start the server:
        <pre><code>npm run dev
</code></pre>
      </li>
      <li>Start the client:
        <pre><code>cd frontend
npm run dev
</code></pre>
      </li>
    </ul>
  </li>
  <li><strong>Access the application</strong>:
    <p>Navigate to <a href="http://localhost:3000">http://localhost:3000</a> in your browser.</p>
  </li>
</ol>

<h2>Usage</h2>
<ul>
  <li><strong>Register</strong>: Create a new account by providing a valid email and password.</li>
  <li><strong>Verify Email</strong>: Check your email for a verification link and click it to activate your account.</li>
  <li><strong>Login</strong>: Access your account using your email and password.</li>
  <li><strong>Reset Password</strong>: If you forget your password, use the "Forgot Password" feature to receive a reset link via email.</li>
</ul>

<h2>Contributing</h2>
<p>Contributions are welcome! Please fork this repository and submit a pull request for any enhancements or bug fixes.</p>

