# Playwright_Test_Agent

A comprehensive Playwright test suite for testing user authentication and registration workflows on the Practice Software Testing website.

## Test Suite Overview

### 1. Generated Registration & Login Test (`generated-registration-login.spec.ts`)

- **Purpose**: Tests the complete user registration and login flow
- **Functionality**:
  - Navigates to the practice testing website
  - Fills out a comprehensive registration form with user details (name, DOB, address, contact info)
  - Creates a new user account with a dynamically generated unique email
  - Validates successful registration by checking page redirect
  - Logs in immediately after registration using the newly created credentials
- **Credentials**: Uses `uniqueEmail` and `password` from `.env` file
- **Status**: Tests registration and login workflow

### 2. Login with Valid Credentials (`Login with valid.spec.ts`)

- **Purpose**: Verifies successful login with correct credentials
- **Functionality**:
  - Navigates to the practice testing website
  - Clicks the "Sign in" link
  - Fills in valid email and password from environment variables
  - Submits the login form
  - Verifies successful authentication
- **Credentials**: Uses `uniqueEmail` and `password` from `.env` file
- **Status**: Tests valid login scenario

### 3. Login Fails with Incorrect Password (`Login fails.spec.ts`)

- **Purpose**: Verifies that login fails gracefully with wrong credentials
- **Functionality**:
  - Navigates to the practice testing website
  - Clicks the "Sign in" link
  - Fills in an email and incorrect password from environment variables
  - Submits the login form
  - Verifies error message appears
  - Confirms user remains on the login page
- **Credentials**: Uses `_email` and `_password` from `.env` file (for failed login testing)
- **Status**: Tests invalid login scenario

## Environment Variables

Create a `.env` file in the project root with the following variables:

'''
uniqueEmail=<user1764504923183@example.com>
password=NewUser@2024Secure
_email=<wrongtest@example.com>
_password=WrongPassword@123
'''

**Note**: The `.env` file is not committed to version control (see `.gitignore`) to protect sensitive credentials.

## Running Tests

```bash
# Run all tests
npx playwright test

# Run specific test file
npx playwright test "login with valid"
npx playwright test "login fails"
npx playwright test "generated-registration-login"

# View test report
npx playwright show-report
```

## Project Structure

- `tests/` - Contains all test files
- `playwright.config.ts` - Playwright configuration
- `package.json` - Project dependencies
- `.env` - Environment variables (not committed)
- `example.env` - Example environment variables template
