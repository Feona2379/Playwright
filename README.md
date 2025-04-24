
---

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
└── README.md                # You're here!
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 16.x  
- npm or yarn

### Installation

```bash
npm install
# or
yarn install
```

### Run Tests

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
