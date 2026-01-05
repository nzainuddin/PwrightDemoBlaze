## PwrightDemoBlaze
Automation Test for DemoBlaze website using Playwright - Typescript

### Project Structure

## Project Structure

```text
.
├── src
│   ├── data          # Test data files and Test Cases (JSON/CSV)
│   ├── pages         # Page Object Models (POM)
│   ├── fixtures.ts   # Custom Playwright fixtures
│   └── helpers.ts    # Utility/Reusable functions
└── tests
    ├── features      # Feature tests
    ├── regression    # Regression tests
    └── performance   # Performance tests
```

#### ⚡⚡⚡Running the Test
| Mode     | Command     |
|----------|:-----------:|
| Headless | npx playwright test  |
| Headed   | npx playwright test --headed |
| UI       | npx playwright --ui |
