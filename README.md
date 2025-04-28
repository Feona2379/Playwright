

# 🎭 Playwright Test Automation Suite

This project contains end-to-end UI and API test automation scripts built using **Playwright**. The tests are written in **JavaScript/TypeScript** and follow modern best practices for automation, including structured test cases, assertions, and reusable functions.

---

## 📁 Project Structure

```
playwright-project/
│
├── tests/                   # All test files
│   ├── login.spec.ts
│   ├── dashboard.spec.ts
│   └── ...
│
├── pages/                   # Page Object Models (POM)
│   ├── loginPage.ts
│   ├── dashboardPage.ts
│   └── ...
│
├── utils/                   # Reusable utility functions
│   ├── apiHelpers.ts
│   └── testData.ts
│
├── playwright.config.ts     # Playwright configuration
├── package.json             # Dependencies and scripts
├── .eslintrc.js             # ESLint configuration
└── README.md                # You're here!
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 16.x  
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Feona2379/Playwright.git
   cd playwrightautomation
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Run Tests

To run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/login.spec.ts
```

Run with UI:

```bash
npx playwright test --ui
```

Generate HTML report:

```bash
npx playwright show-report
```

---

## 🔧 Configuration

- **playwright.config.ts**  
  Contains base settings like test timeout, browser options, test directory, and reporter config.
- **.eslintrc.js**  
  Configuration file for ESLint that enforces code style and quality standards across the project.

---

## 🧑‍💻 Code Quality Tools

### ESLint

[ESLint](https://eslint.org/) is used to ensure that the code adheres to a consistent style and follows best practices. The ESLint configuration file `.eslintrc.js` is included in this project to enforce rules related to:

- **Code style**: Enforces consistent indentation, quotes, and other style guidelines.
- **Error detection**: Warns or errors on common issues like unused variables, potential bugs, etc.
- **Best practices**: Enforces best practices like no `console.log` in production code.

To run ESLint on your project, simply execute:

```bash
npx eslint .
```

To fix issues automatically:

```bash
npx eslint . --fix
```

### Husky

[Husky](https://typicode.github.io/husky/) is used to run hooks in Git to ensure quality checks before committing or pushing code. This project uses **Husky** to ensure that certain tasks are executed before commits and pushes, such as linting the code.

### Pre-commit Hook Setup with Husky

Husky can run pre-commit hooks to lint your code before you commit it. This ensures that only code that meets the standards gets committed.

The following hook has been set up:

- **Pre-commit hook**: Runs ESLint to lint all the files that are staged for commit.

To install and enable Husky in your repository, make sure the following is done (it should already be set up from the instructions earlier):

1. Install Husky and lint-staged:

   ```bash
   npm install husky lint-staged --save-dev
   ```

2. Enable Git hooks with Husky:

   ```bash
   npx husky install
   ```

3. Set up the pre-commit hook to run ESLint:

   ```bash
   npx husky add .husky/pre-commit "npx lint-staged"
   ```

4. In your `package.json`, add the following configuration for lint-staged:

   ```json
   "lint-staged": {
     "*.ts": "eslint --fix"
   }
   ```

This configuration ensures that before every commit, **Husky** will run the `eslint --fix` command on all staged `.ts` files.

---

## 🔑 Key Functionalities

### Login Page (`loginPage.ts`)

```ts
async navigateToLoginPage(): Promise<void>
```
- Navigates to the login URL defined in the config.

```ts
async login(username: string, password: string): Promise<void>
```
- Fills login credentials and submits the form.

```ts
async isLoginSuccessful(): Promise<boolean>
```
- Checks for an element visible only upon successful login.

---

### Dashboard Page (`dashboardPage.ts`)

```ts
async verifyUserGreeting(): Promise<string>
```
- Returns the welcome message displayed after login.

```ts
async clickMenuOption(option: string): Promise<void>
```
- Clicks a menu item dynamically based on the provided option name.

---

### API Helpers (`apiHelpers.ts`)

```ts
async getAuthToken(): Promise<string>
```
- Retrieves an authentication token using API call for further test usage.

```ts
async createTestUser(data: any): Promise<object>
```
- Creates a test user via API for pre-test setup.

---

## 🧪 Sample Test Case

```ts
test('User can login successfully', async ({ page }) => {
  const login = new LoginPage(page);
  await login.navigateToLoginPage();
  await login.login('testuser', 'password123');
  expect(await login.isLoginSuccessful()).toBe(true);
});
```

---

## 📊 Reporting

- Uses Playwright's built-in HTML reporter.
- View the report after test runs with:
  ```bash
  npx playwright show-report
  ```

---

## 📌 Best Practices

- Keep locators in page objects, not test files.
- Reuse common data and functions from the `utils/` folder.
- Clean up test data using API helpers or setup/teardown hooks.

---

## 📬 Questions?

If you have any questions or need support, feel free to reach out!

---

## 🤝 Contributing

We welcome contributions! Please fork this repository, make your changes, and create a pull request. Here's how you can contribute:

1. Fork the repo
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Create a pull request

---

## ⚠️ Troubleshooting

If you run into issues during setup or running the tests, here are some common solutions:

- **Playwright not installed correctly**: Make sure that you've run `npm install` or `yarn install` to get all dependencies.
- **Permissions issues**: Ensure that your test scripts have permission to execute by checking the file permissions in the `tests/` and `pages/` directories.

---

