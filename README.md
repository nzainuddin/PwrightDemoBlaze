## PwrightDemoBlaze
Automation Test for DemoBlaze website using Playwright - Typescript

### Project Structure

```text
.
├── src
│   ├── api           # Contain BaseApi and Controller files 
│   ├── data          # Test data files and Test Cases (JSON/CSV)
│   ├── ui/pages      # Page Object Models (POM)
│   ├── fixtures      # Custom Playwright fixtures (API / UI)
│   └── utils         # Utility/Reusable functions
└── tests
    ├── features      # Feature tests
    ├── regression    # Regression tests
    └── performance   # Performance tests
```

#### ⚡⚡⚡Running the Test
| Mode     | Command     |
|----------|-----------|
| Headless | npx playwright test  |
| Headed   | npx playwright test --headed |
| UI       | npx playwright --ui |
