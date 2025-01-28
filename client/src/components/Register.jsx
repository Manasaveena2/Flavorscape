

// import React, { useState } from 'react';
// import { useAuth } from "../context/AuthContext"; 
// import { useNavigate } from 'react-router-dom'; // Import the Auth context
// import './styles/Register.css'; // Add the CSS file for styling

// const Register = ({ handleToggleForm }) => {
//   const navigate = useNavigate();
//   const { login } = useAuth(); // Access the login function from AuthContext
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [showConstraints, setShowConstraints] = useState(false);
//   const [isPasswordValid, setIsPasswordValid] = useState({
//     length: false,
//     uppercase: false,
//     specialChar: false,
//   });
//   const [errorMessages, setErrorMessages] = useState({
//     length: 'Password must be at least 8 characters long.',
//     uppercase: 'Password must contain at least one uppercase letter.',
//     specialChar: 'Password must contain at least one special character.',
//   });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handlePasswordChange = (e) => {
//     const newPassword = e.target.value;
//     setPassword(newPassword);

//     // Validate password against constraints
//     setIsPasswordValid({
//       length: newPassword.length >= 8,
//       uppercase: /[A-Z]/.test(newPassword),
//       specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword),
//     });

//     // Update error messages based on validation
//     setErrorMessages({
//       length: newPassword.length >= 8 ? '' : 'Password must be at least 8 characters long.',
//       uppercase: /[A-Z]/.test(newPassword) ? '' : 'Password must contain at least one uppercase letter.',
//       specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword) ? '' : 'Password must contain at least one special character.',
//     });
//   };

//   const handlePasswordFocus = () => {
//     setShowConstraints(true); // Show constraints when user focuses on the password field
//   };

//   const handlePasswordBlur = () => {
//     setShowConstraints(false); // Hide constraints when user leaves the password field
//   };

//   const isFormValid =
//     username.length >= 3 &&
//     isPasswordValid.length &&
//     isPasswordValid.uppercase &&
//     isPasswordValid.specialChar &&
//     password === confirmPassword;

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     if (!isFormValid) {
//       setError('Please complete the form with valid inputs.');
//       setSuccess('');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:5000/api/auth/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setSuccess('Registration successful!');
//         login(data); // Update the authentication context
//         navigate('/navigate'); // Redirect to homepage
//         setError('');

//         // Clear form fields
//         setUsername('');
//         setEmail('');
//         setPassword('');
//         setConfirmPassword('');
//         setIsPasswordValid({
//           length: false,
//           uppercase: false,
//           specialChar: false,
//         });
//       } else {
//         setError(data.message || 'Registration failed');
//         setSuccess('');
//       }
//     } catch (error) {
//       console.error(error);
//       setError('An error occurred while registering');
//       setSuccess('');
//     }
//   };

//   return (
//     <div className="register-form">
//       <h2>Create Account</h2>
//       <form onSubmit={handleRegister}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//             minLength="3"
//             placeholder="Enter a username (min 3 chars)"
//           />
//         </div>

//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={handlePasswordChange}
//             onFocus={handlePasswordFocus}
//             onBlur={handlePasswordBlur}
//             required
//           />
//         </div>

//         <div>
//           <label>Confirm Password:</label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </div>

//         {/* Password constraints */}
//         {showConstraints && (
//           <div className="password-constraints">
//             <ul>
//               <li className={isPasswordValid.length ? 'valid' : 'invalid'}>
//                 {isPasswordValid.length ? '✓ ' : '✗ '} {errorMessages.length}
//               </li>
//               <li className={isPasswordValid.uppercase ? 'valid' : 'invalid'}>
//                 {isPasswordValid.uppercase ? '✓ ' : '✗ '} {errorMessages.uppercase}
//               </li>
//               <li className={isPasswordValid.specialChar ? 'valid' : 'invalid'}>
//                 {isPasswordValid.specialChar ? '✓ ' : '✗ '} {errorMessages.specialChar}
//               </li>
//             </ul>
//           </div>
//         )}

//         <button
//           type="submit"
//           style={{ backgroundColor: isFormValid ? '#4CAF50' : '#ccc' }}
//           disabled={!isFormValid}
//         >
//           Register
//         </button>
//       </form>

//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {success && <p style={{ color: 'green' }}>{success}</p>}

//       <p>
//         Already have an account?{' '}
//         <span className="toggle-link" onClick={handleToggleForm}>
//           Login here
//         </span>
//       </p>
//     </div>
//   );
// };

// export default Register;
// import React, { useState } from 'react';
// import { useAuth } from "../context/AuthContext"; 
// import { useNavigate } from 'react-router-dom';
// import './styles/Register.css';

// const Register = ({ handleToggleForm }) => {
//   const navigate = useNavigate();
//   const { login } = useAuth(); // Access the login function from AuthContext
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [showConstraints, setShowConstraints] = useState(false);
//   const [isPasswordValid, setIsPasswordValid] = useState({
//     length: false,
//     uppercase: false,
//     specialChar: false,
//   });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handlePasswordChange = (e) => {
//     const newPassword = e.target.value;
//     setPassword(newPassword);

//     setIsPasswordValid({
//       length: newPassword.length >= 8,
//       uppercase: /[A-Z]/.test(newPassword),
//       specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword),
//     });
//   };

//   const handlePasswordFocus = () => setShowConstraints(true);
//   const handlePasswordBlur = () => setShowConstraints(false);

//   const isFormValid =
//     username.length >= 3 &&
//     isPasswordValid.length &&
//     isPasswordValid.uppercase &&
//     isPasswordValid.specialChar &&
//     password === confirmPassword;

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     if (!isFormValid) {
//       setError('Please complete the form with valid inputs.');
//       setSuccess('');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:5000/api/auth/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setSuccess(`Registration successful! ${data.message}`);
//         login(data); // Update the authentication context
//         navigate('/welcome'); // Redirect to the welcome page
//         setError('');
//         setUsername('');
//         setEmail('');
//         setPassword('');
//         setConfirmPassword('');
//         setIsPasswordValid({
//           length: false,
//           uppercase: false,
//           specialChar: false,
//         });
//       } else {
//         setError(data.message || 'Registration failed');
//         setSuccess('');
//       }
//     } catch (error) {
//       console.error('Error during registration:', error);
//       setError('An error occurred while registering.');
//       setSuccess('');
//     }
//   };

//   return (
//     <div className="register-form">
//       <h2>Create Account</h2>
//       <form onSubmit={handleRegister}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//             minLength="3"
//             placeholder="Enter a username (min 3 chars)"
//           />
//         </div>

//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={handlePasswordChange}
//             onFocus={handlePasswordFocus}
//             onBlur={handlePasswordBlur}
//             required
//           />
//         </div>

//         <div>
//           <label>Confirm Password:</label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </div>

//         {showConstraints && (
//           <div className="password-constraints">
//             <ul>
//               <li className={isPasswordValid.length ? 'valid' : 'invalid'}>
//                 Password must be at least 8 characters long.
//               </li>
//               <li className={isPasswordValid.uppercase ? 'valid' : 'invalid'}>
//                 Password must contain at least one uppercase letter.
//               </li>
//               <li className={isPasswordValid.specialChar ? 'valid' : 'invalid'}>
//                 Password must contain at least one special character.
//               </li>
//             </ul>
//           </div>
//         )}

//         <button
//           type="submit"
//           style={{ backgroundColor: isFormValid ? '#4CAF50' : '#ccc' }}
//           disabled={!isFormValid}
//         >
//           Register
//         </button>
//       </form>

//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {success && <p style={{ color: 'green' }}>{success}</p>}

//       <p>
//         Already have an account?{' '}
//         <span className="toggle-link" onClick={handleToggleForm}>
//           Login here
//         </span>
//       </p>
//     </div>
//   );
// };

// export default Register;



import React, { useState } from 'react';
import { useAuth } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';
import './styles/Register.css'; // Add the CSS file for styling
import pic9 from "../assets/pic9.jpeg"

const Register = ({ handleToggleForm }) => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Access the login function from AuthContext
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConstraints, setShowConstraints] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState({
    length: false,
    uppercase: false,
    specialChar: false,
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    setIsPasswordValid({
      length: newPassword.length >= 8,
      uppercase: /[A-Z]/.test(newPassword),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword),
    });
  };

  const handlePasswordFocus = () => setShowConstraints(true);
  const handlePasswordBlur = () => setShowConstraints(false);

  const isFormValid =
    username.length >= 3 &&
    isPasswordValid.length &&
    isPasswordValid.uppercase &&
    isPasswordValid.specialChar &&
    password === confirmPassword;

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!isFormValid) {
      setError('Please complete the form with valid inputs.');
      setSuccess('');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(`Registration successful! ${data.message}`);
        localStorage.setItem('username', username);
        navigate('/login');
        login(data); 
       // Update the authentication context
       // navigate('/login'); // Redirect to the welcome page
        setError('');
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setIsPasswordValid({
          length: false,
          uppercase: false,
          specialChar: false,
        });
      } else {
        setError(data.message || 'Registration failed');
        setSuccess('');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setError('An error occurred while registering.');
      setSuccess('');
    }
  };

  return (
    <div className="register-container">
      <div className="register-image">
        <img src={pic9} alt=""/>
        </div> {/* Image on left side */}
      <div className="register-form">
        <form onSubmit={handleRegister}>
        <h2>Create Account</h2>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              minLength="3"
              placeholder="Enter a username (min 3 chars)"
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
              required
            />
          </div>

          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {showConstraints && (
            <div className="password-constraints">
              <ul>
                <li className={isPasswordValid.length ? 'valid' : 'invalid'}>
                  Password must be at least 8 characters long.
                </li>
                <li className={isPasswordValid.uppercase ? 'valid' : 'invalid'}>
                  Password must contain at least one uppercase letter.
                </li>
                <li className={isPasswordValid.specialChar ? 'valid' : 'invalid'}>
                  Password must contain at least one special character.
                </li>
              </ul>
            </div>
          )}

          <button
            type="submit"
            style={{ backgroundColor: isFormValid ? '#4CAF50' : '#ccc' }}
            disabled={!isFormValid}
          >
            Register
          </button>
        </form>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}

        <p>
          Already have an account?{' '}
          <span className="toggle-link" onClick={handleToggleForm}>
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
