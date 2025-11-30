# Practice Software Testing - Toolshop - User Registration & Login Test Plan

## Application Overview

The Practice Software Testing - Toolshop application is a comprehensive e-commerce testing platform that includes user registration and authentication functionality. The application features:

- **User Registration**: Create new customer accounts with comprehensive personal and address information
- **User Login**: Authenticate existing users with email and password credentials
- **Password Requirements**: Enforced password validation with specific complexity rules
- **Google Authentication**: Alternative sign-in method via Google OAuth
- **Account Recovery**: Password reset functionality for forgotten credentials
- **Responsive Design**: Works across multiple browser types and screen sizes
- **Navigation**: Seamless navigation between login, registration, and home pages

## Test Scenarios

### 1. User Registration

#### 1.1 Successful User Registration with Valid Data
**Objective:** Verify that a new user can successfully register with complete and valid information

**Steps:**
1. Navigate to https://practicesoftwaretesting.com/
2. Click the "Sign in" link in the navigation menu
3. Click the "Register your account" link
4. Fill in "First name" field with "John"
5. Fill in "Last name" field with "Doe"
6. Fill in "Date of Birth" field with "1990-05-15" (YYYY-MM-DD format)
7. Fill in "Street" field with "123 Main Street"
8. Fill in "Postal code" field with "12345"
9. Fill in "City" field with "New York"
10. Fill in "State" field with "NY"
11. Select "United States of America (the)" from the Country dropdown
12. Fill in "Phone" field with "+1-555-123-4567"
13. Fill in "Email address" field with "testuser@example.com"
14. Fill in "Password" field with "Test@1234" (meets all requirements)
15. Click the "Register" button

**Expected Results:**
- Registration form submits successfully
- User is redirected to a success page or automatically logged in
- A confirmation message appears indicating successful registration
- No error messages are displayed
- The user account is created in the system

---

#### 1.2 Registration with Missing Required Fields
**Objective:** Verify that the form rejects submission when required fields are empty

**Assumptions:** Start with a fresh registration page

**Steps:**
1. Navigate to the registration page
2. Leave all fields empty
3. Click the "Register" button

**Expected Results:**
- Form submission is prevented
- Validation error messages appear for all required fields
- User remains on the registration page
- No account is created

---

#### 1.3 Registration with Invalid Email Format
**Objective:** Verify that the system rejects invalid email addresses

**Assumptions:** Start with a fresh registration page

**Steps:**
1. Navigate to the registration page
2. Fill in all required fields with valid data
3. Fill in "Email address" field with "invalidemail" (no @ symbol)
4. Fill in "Password" field with "Test@1234"
5. Click the "Register" button

**Expected Results:**
- Form submission is prevented
- An error message appears indicating "Invalid email format" or similar
- The email field is highlighted as having an error
- No account is created

---

#### 1.4 Registration with Invalid Date of Birth Format
**Objective:** Verify that date validation enforces YYYY-MM-DD format

**Assumptions:** Start with a fresh registration page

**Steps:**
1. Navigate to the registration page
2. Fill in other required fields with valid data
3. Fill in "Date of Birth" field with "05/15/1990" (incorrect format)
4. Fill in "Password" field with "Test@1234"
5. Click the "Register" button

**Expected Results:**
- Form submission is prevented
- An error message appears indicating the required YYYY-MM-DD format
- The date field is highlighted as having an error
- No account is created

---

#### 1.5 Registration with Weak Password
**Objective:** Verify that password strength requirements are enforced

**Assumptions:** Start with a fresh registration page

**Steps:**
1. Navigate to the registration page
2. Fill in all required fields with valid data
3. Fill in "Password" field with "password" (lowercase only, no numbers or special characters)
4. Observe the password strength indicator
5. Click the "Register" button

**Expected Results:**
- The password strength indicator shows "Weak"
- Form submission is prevented
- An error message appears listing the unmet password requirements:
  - Must be at least 8 characters long
  - Must contain both uppercase and lowercase letters
  - Must include at least one number
  - Must have at least one special symbol
- No account is created

---

#### 1.6 Registration with Password Missing Uppercase Letter
**Objective:** Verify that passwords must contain uppercase letters

**Assumptions:** Start with a fresh registration page

**Steps:**
1. Navigate to the registration page
2. Fill in all required fields with valid data
3. Fill in "Password" field with "test@1234" (no uppercase letter)
4. Observe the password strength indicator
5. Click the "Register" button

**Expected Results:**
- The password strength indicator shows less than "Strong"
- Form submission is prevented
- An error message appears indicating "Contain both uppercase and lowercase letters" requirement is not met
- No account is created

---

#### 1.7 Registration with Password Missing Number
**Objective:** Verify that passwords must contain at least one number

**Assumptions:** Start with a fresh registration page

**Steps:**
1. Navigate to the registration page
2. Fill in all required fields with valid data
3. Fill in "Password" field with "Test@abcd" (no number)
4. Observe the password strength indicator
5. Click the "Register" button

**Expected Results:**
- The password strength indicator shows less than "Strong"
- Form submission is prevented
- An error message appears indicating "Include at least one number" requirement is not met
- No account is created

---

#### 1.8 Registration with Password Missing Special Character
**Objective:** Verify that passwords must contain special characters

**Assumptions:** Start with a fresh registration page

**Steps:**
1. Navigate to the registration page
2. Fill in all required fields with valid data
3. Fill in "Password" field with "Test1234" (no special character)
4. Observe the password strength indicator
5. Click the "Register" button

**Expected Results:**
- The password strength indicator shows less than "Strong"
- Form submission is prevented
- An error message appears indicating "Have at least one special symbol" requirement is not met
- No account is created

---

#### 1.9 Registration with Password Too Short
**Objective:** Verify that passwords must be at least 8 characters long

**Assumptions:** Start with a fresh registration page

**Steps:**
1. Navigate to the registration page
2. Fill in all required fields with valid data
3. Fill in "Password" field with "T@1" (only 3 characters)
4. Observe the password strength indicator
5. Click the "Register" button

**Expected Results:**
- The password strength indicator shows "Weak"
- Form submission is prevented
- An error message appears indicating "Be at least 8 characters long" requirement is not met
- No account is created

---

#### 1.10 Registration with Duplicate Email Address
**Objective:** Verify that the system prevents duplicate email addresses

**Assumptions:** An account with email "existing@example.com" already exists in the system

**Steps:**
1. Navigate to the registration page
2. Fill in all required fields with valid data
3. Fill in "Email address" field with "existing@example.com"
4. Fill in "Password" field with "Test@1234"
5. Click the "Register" button

**Expected Results:**
- Form submission is prevented
- An error message appears indicating "Email address already in use" or similar
- The email field is highlighted as having an error
- No new account is created

---

#### 1.11 Registration Form Field Character Limits
**Objective:** Verify that text fields enforce appropriate character limits

**Assumptions:** Start with a fresh registration page

**Steps:**
1. Navigate to the registration page
2. Fill in "First name" field with a string exceeding typical limits (e.g., 100+ characters)
3. Fill in "Last name" field with a string exceeding typical limits
4. Fill in "Street" field with a string exceeding typical limits
5. Fill in "City" field with a string exceeding typical limits
6. Fill in "Phone" field with a string exceeding typical limits
7. Fill in other required fields with valid data
8. Click the "Register" button

**Expected Results:**
- Either the form submission is prevented with appropriate error messages
- Or the form accepts the data but truncates/validates it appropriately
- The application does not crash or produce unexpected errors

---

#### 1.12 Registration with Invalid Phone Number
**Objective:** Verify that phone number validation works correctly

**Assumptions:** Start with a fresh registration page

**Steps:**
1. Navigate to the registration page
2. Fill in all required fields with valid data
3. Fill in "Phone" field with "invalid-phone" (non-numeric characters)
4. Fill in "Password" field with "Test@1234"
5. Click the "Register" button

**Expected Results:**
- Form submission is prevented
- An error message appears indicating invalid phone format
- The phone field is highlighted as having an error
- No account is created

---

#### 1.13 Registration with All Fields Populated Correctly
**Objective:** Verify successful registration after correcting all validation errors

**Assumptions:** Start with a fresh registration page

**Steps:**
1. Navigate to the registration page
2. Fill in "First name" with "Jane"
3. Fill in "Last name" with "Smith"
4. Fill in "Date of Birth" with "1995-03-20"
5. Fill in "Street" with "456 Oak Avenue"
6. Fill in "Postal code" with "54321"
7. Fill in "City" with "Los Angeles"
8. Fill in "State" with "CA"
9. Select "United States of America (the)" from Country dropdown
10. Fill in "Phone" with "+1-555-987-6543"
11. Fill in "Email address" with "jane.smith@testmail.com"
12. Fill in "Password" with "SecurePass@2024"
13. Verify password strength indicator shows "Strong" or higher
14. Click the "Register" button

**Expected Results:**
- Registration completes successfully
- User is redirected to home page or login page
- A success message is displayed
- The new account can be used to login

---

### 2. User Login

#### 2.1 Successful Login with Valid Credentials
**Objective:** Verify that a registered user can successfully log in

**Assumptions:** A user account with email "testuser@example.com" and password "Test@1234" exists

**Steps:**
1. Navigate to https://practicesoftwaretesting.com/
2. Click the "Sign in" link
3. Fill in "Email address" field with "testuser@example.com"
4. Fill in "Password" field with "Test@1234"
5. Click the "Login" button

**Expected Results:**
- Login succeeds
- User is redirected to the home page or dashboard
- User's account information is loaded
- No error messages appear
- Navigation shows the user is logged in (e.g., username or logout option visible)

---

#### 2.2 Login with Incorrect Password
**Objective:** Verify that login fails with an incorrect password

**Assumptions:** A user account with email "testuser@example.com" exists

**Steps:**
1. Navigate to the login page
2. Fill in "Email address" field with "testuser@example.com"
3. Fill in "Password" field with "WrongPassword@123"
4. Click the "Login" button

**Expected Results:**
- Login fails
- User remains on the login page
- An error message appears indicating "Invalid email or password"
- The form fields retain the entered email but clear the password
- The account remains locked (no brute force protection indicated)

---

#### 2.3 Login with Non-existent Email
**Objective:** Verify that login fails when email is not registered

**Assumptions:** Start with a fresh login page

**Steps:**
1. Navigate to the login page
2. Fill in "Email address" field with "nonexistent@example.com"
3. Fill in "Password" field with "Test@1234"
4. Click the "Login" button

**Expected Results:**
- Login fails
- User remains on the login page
- An error message appears indicating "Invalid email or password" or "User not found"
- No sensitive information is revealed (email existence not disclosed)

---

#### 2.4 Login with Empty Email Field
**Objective:** Verify that login validation requires email address

**Assumptions:** Start with a fresh login page

**Steps:**
1. Navigate to the login page
2. Leave "Email address" field empty
3. Fill in "Password" field with "Test@1234"
4. Click the "Login" button

**Expected Results:**
- Form submission is prevented
- A validation error appears for the email field
- User remains on the login page
- No login attempt is made

---

#### 2.5 Login with Empty Password Field
**Objective:** Verify that login validation requires password

**Assumptions:** Start with a fresh login page

**Steps:**
1. Navigate to the login page
2. Fill in "Email address" field with "testuser@example.com"
3. Leave "Password" field empty
4. Click the "Login" button

**Expected Results:**
- Form submission is prevented
- A validation error appears for the password field
- User remains on the login page
- No login attempt is made

---

#### 2.6 Login with Both Fields Empty
**Objective:** Verify that login validation requires both fields

**Assumptions:** Start with a fresh login page

**Steps:**
1. Navigate to the login page
2. Leave both "Email address" and "Password" fields empty
3. Click the "Login" button

**Expected Results:**
- Form submission is prevented
- Validation errors appear for both fields
- User remains on the login page
- Appropriate error messages guide the user

---

#### 2.7 Login with Invalid Email Format
**Objective:** Verify that email format validation works on login

**Assumptions:** Start with a fresh login page

**Steps:**
1. Navigate to the login page
2. Fill in "Email address" field with "notanemail" (no @ symbol)
3. Fill in "Password" field with "Test@1234"
4. Click the "Login" button

**Expected Results:**
- Form submission is prevented (or prevented server-side)
- An error message appears indicating invalid email format
- User remains on the login page
- No login attempt is made to the server

---

#### 2.8 Login with Whitespace in Email
**Objective:** Verify that leading/trailing whitespace is handled correctly

**Assumptions:** A user account with email "testuser@example.com" exists

**Steps:**
1. Navigate to the login page
2. Fill in "Email address" field with " testuser@example.com " (with spaces)
3. Fill in "Password" field with "Test@1234"
4. Click the "Login" button

**Expected Results:**
- Login succeeds (whitespace is trimmed) OR
- An error appears indicating invalid email format
- System handles whitespace gracefully without crashes

---

#### 2.9 Password Visibility Toggle
**Objective:** Verify that the password visibility button works correctly

**Assumptions:** Start with a fresh login page

**Steps:**
1. Navigate to the login page
2. Fill in "Email address" with "testuser@example.com"
3. Fill in "Password" field with "Test@1234"
4. Observe that password appears as dots/asterisks
5. Click the eye icon button next to the password field
6. Verify the password is now visible as plain text
7. Click the eye icon button again
8. Verify the password is hidden again

**Expected Results:**
- Password visibility toggle works correctly
- Password is displayed as masked characters by default
- Clicking the eye icon reveals the password in plain text
- Clicking the eye icon again hides the password
- No data is lost or corrupted during the toggle

---

#### 2.10 Login Session Persistence
**Objective:** Verify that logged-in sessions persist across navigation

**Assumptions:** User has successfully logged in

**Steps:**
1. Navigate to the login page
2. Log in with valid credentials (email: "testuser@example.com", password: "Test@1234")
3. Verify successful login (redirected to home/dashboard)
4. Click the "Home" link in the navigation menu
5. Verify that the user is still logged in
6. Click on another menu item (e.g., "Categories")
7. Verify that the user is still logged in and the session persists

**Expected Results:**
- User remains logged in across page navigation
- Session is maintained without requiring re-login
- User information is accessible throughout the site
- No unexpected redirects to login page

---

#### 2.11 Login Case Sensitivity
**Objective:** Verify how the system handles email case sensitivity

**Assumptions:** A user account with email "testuser@example.com" exists

**Steps:**
1. Navigate to the login page
2. Fill in "Email address" field with "TESTUSER@EXAMPLE.COM" (all uppercase)
3. Fill in "Password" field with "Test@1234"
4. Click the "Login" button

**Expected Results:**
- Login succeeds (email is case-insensitive) OR
- Login fails with appropriate error message
- System behavior is consistent and documented

---

#### 2.12 Login with Special Characters in Email
**Objective:** Verify that special characters in email addresses are handled

**Assumptions:** A user account with an email containing special characters exists

**Steps:**
1. Navigate to the login page
2. Fill in "Email address" field with an email containing valid special characters (e.g., "test.user+tag@example.com")
3. Fill in "Password" field with the correct password
4. Click the "Login" button

**Expected Results:**
- Login succeeds if the account exists
- System correctly processes special characters in email
- No character encoding issues occur

---

### 3. Password Recovery (Forgot Password)

#### 3.1 Access Forgot Password Page
**Objective:** Verify that users can access the password recovery feature

**Assumptions:** Start with a fresh login page

**Steps:**
1. Navigate to the login page
2. Click the "Forgot your Password?" link

**Expected Results:**
- User is redirected to the password recovery page
- A form appears requesting email address or recovery method
- Clear instructions are provided for resetting password
- No error messages appear

---

#### 3.2 Password Reset with Valid Email
**Objective:** Verify that password reset email is sent for valid accounts

**Assumptions:** A user account with email "testuser@example.com" exists

**Steps:**
1. Navigate to the password recovery page
2. Fill in the email field with "testuser@example.com"
3. Click the reset/submit button
4. Check for confirmation message

**Expected Results:**
- Form submission succeeds
- A confirmation message appears indicating "Check your email for reset instructions"
- No error messages appear
- User can return to login or receives next steps

---

#### 3.3 Password Reset with Non-existent Email
**Objective:** Verify password reset handling for unregistered emails

**Assumptions:** Email "nonexistent@example.com" is not registered

**Steps:**
1. Navigate to the password recovery page
2. Fill in the email field with "nonexistent@example.com"
3. Click the reset/submit button

**Expected Results:**
- Either: A generic message appears (doesn't reveal if email exists)
- Or: An error appears indicating account not found
- System should not reveal whether email is registered (security best practice)

---

### 4. Google Authentication (Alternative Login)

#### 4.1 Initiate Google Sign-In
**Objective:** Verify that Google authentication button is functional

**Assumptions:** Start with a fresh login page

**Steps:**
1. Navigate to the login page
2. Observe the "Sign in with Google" button
3. Click the "Sign in with Google" button

**Expected Results:**
- Google authentication flow initiates
- User is redirected to Google login (or would be in real scenario)
- No errors occur during the initiation
- The button is properly configured with Google OAuth credentials

---

#### 4.2 Google Sign-In Success Path
**Objective:** Verify complete Google authentication flow

**Assumptions:** User has a valid Google account and is testing in a supported environment

**Steps:**
1. Navigate to the login page
2. Click the "Sign in with Google" button
3. Complete Google authentication flow
4. Authorize the application to access user information
5. Verify redirect back to the application

**Expected Results:**
- User is successfully authenticated
- User is created or logged in on the application
- User is redirected to home page or account dashboard
- Session is established
- User information is properly linked

---

### 5. Navigation and Links

#### 5.1 Navigation from Login to Registration
**Objective:** Verify smooth navigation between authentication pages

**Assumptions:** Start on the login page

**Steps:**
1. Navigate to the login page
2. Click the "Register your account" link
3. Verify the registration page loads

**Expected Results:**
- User is redirected to the registration page
- All form fields are empty (fresh form)
- No data from login page is carried over
- Page title and heading indicate registration page

---

#### 5.2 Navigation from Registration to Login
**Objective:** Verify users can return to login from registration

**Assumptions:** Start on the registration page

**Steps:**
1. Navigate to the registration page
2. Click the back button in the browser (or look for a login link)
3. Verify navigation back to login page

**Expected Results:**
- User is redirected to the login page
- All form fields are cleared
- No data from registration is retained
- Page properly loads with all elements

---

#### 5.3 Navigation Menu After Login
**Objective:** Verify navigation options change for authenticated users

**Assumptions:** User is logged in

**Steps:**
1. Log in with valid credentials
2. Verify the navigation menu is displayed
3. Check if "Sign in" link changes to show logged-in status
4. Click on "Home", "Categories", and "Contact" links
5. Verify all navigation items work correctly

**Expected Results:**
- Navigation menu is visible
- "Sign in" link may change to "Logout" or show username
- All navigation links work correctly
- User remains authenticated while navigating
- No unexpected redirects to login

---

### 6. Security Tests

#### 6.1 SQL Injection Attempt in Email Field
**Objective:** Verify that the system is protected against SQL injection

**Assumptions:** Start with a fresh login page

**Steps:**
1. Navigate to the login page
2. Fill in "Email address" field with "' OR '1'='1"
3. Fill in "Password" field with anything
4. Click the "Login" button

**Expected Results:**
- Login fails gracefully
- An error message appears (generic error, not SQL-related)
- No database error messages are exposed
- No unauthorized access is granted
- Application continues to function normally

---

#### 6.2 XSS Attempt in Input Fields
**Objective:** Verify protection against Cross-Site Scripting attacks

**Assumptions:** Start with a fresh registration page

**Steps:**
1. Navigate to the registration page
2. Fill in "First name" field with "<script>alert('XSS')</script>"
3. Fill in other required fields with valid data
4. Click the "Register" button

**Expected Results:**
- The script does not execute
- The input is either sanitized or rejected
- No alert dialog appears
- Application continues to function normally
- Input is either escaped or stored safely

---

#### 6.3 Password Not Sent in Plain Text
**Objective:** Verify that passwords are transmitted securely

**Assumptions:** Browser dev tools are available

**Steps:**
1. Open browser developer tools (F12)
2. Go to Network tab
3. Navigate to the login page
4. Fill in credentials: email "testuser@example.com" and password "Test@1234"
5. Click Login button
6. Inspect the network request in the Network tab

**Expected Results:**
- The login request uses HTTPS (secure connection)
- The password is not visible in the URL
- The request body is transmitted over HTTPS
- No password is exposed in plain text in the network traffic
- Form data is properly encrypted during transmission

---

#### 6.4 Account Lockout After Failed Attempts
**Objective:** Verify that the system protects against brute force attacks

**Assumptions:** Start with a fresh login page

**Steps:**
1. Navigate to the login page
2. Attempt login with correct email and incorrect password 5 times rapidly
3. On the 6th attempt, try logging in with the correct password
4. Observe the response

**Expected Results:**
- After multiple failed attempts, the account is temporarily locked
- An error message indicates the account is locked or rate-limited
- User must wait or verify via email before attempting again
- Correct credentials do not work during lockout period
- System logs security events

---

#### 6.5 Session Timeout
**Objective:** Verify that sessions expire after inactivity

**Assumptions:** User is logged in

**Steps:**
1. Log in with valid credentials
2. Wait for the specified inactivity timeout period (check application settings)
3. Attempt to perform an action (e.g., click a link)
4. Observe if user is logged out or redirected to login

**Expected Results:**
- After inactivity timeout, user is logged out
- User is redirected to login page
- Session data is cleared
- User must log in again to continue

---

### 7. Cross-Browser and Responsive Tests

#### 7.1 Registration Form on Mobile Device
**Objective:** Verify registration form works on mobile screen sizes

**Assumptions:** Testing on a mobile browser or mobile viewport (375px width)

**Steps:**
1. Open browser in mobile mode (or use mobile device)
2. Navigate to the registration page
3. Verify all form fields are visible and accessible
4. Scroll through the entire form
5. Fill in all required fields
6. Submit the form

**Expected Results:**
- All form fields are responsive and properly sized
- Text input fields are easily tappable
- Dropdown menus function correctly on mobile
- Form is scrollable and usable on small screens
- Submit button is accessible and clickable
- No horizontal scrolling is required
- Registration completes successfully

---

#### 7.2 Login Form on Tablet
**Objective:** Verify login form works on tablet screen sizes

**Assumptions:** Testing on tablet viewport (768px width)

**Steps:**
1. Open browser in tablet mode
2. Navigate to the login page
3. Verify form elements are properly positioned
4. Fill in email and password fields
5. Click the Login button
6. Complete the login

**Expected Results:**
- Form layout is optimized for tablet size
- All elements are clearly visible
- No overlapping or misaligned elements
- Button is easily clickable
- Login completes successfully

---

## Test Execution Notes

- **Test Environment:** https://practicesoftwaretesting.com/
- **Supported Browsers:** Chrome, Firefox, Safari, Edge
- **Test Data:** Use unique email addresses for each registration test (e.g., testuser[timestamp]@example.com)
- **Account Cleanup:** Delete test accounts after testing to maintain database cleanliness
- **Dependencies:** Tests can run independently; registration tests should precede login tests if using the same account

## Success Criteria

- All scenarios execute without application crashes
- Validation messages are clear and actionable
- User experience is consistent across browsers and screen sizes
- Security measures are properly implemented
- Error handling is graceful and user-friendly
- Data is properly persisted and retrieved
