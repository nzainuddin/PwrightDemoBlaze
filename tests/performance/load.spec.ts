import { test, expect } from '@playwright/test';

test('Home Page Load Metrics @performance', async ({ page }) => {
  await page.goto('/');
  
  const performanceTiming = await page.evaluate(() => {
    const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return {
      domReady: nav.domContentLoadedEventEnd,
      loadTime: nav.loadEventEnd,
    };
  });

  console.log(`Performance Metrics:`, performanceTiming);
  expect(performanceTiming.loadTime).toBeLessThan(3000); // 3s Threshold
});