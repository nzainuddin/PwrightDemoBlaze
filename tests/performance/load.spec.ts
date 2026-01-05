import { test, expect } from '@playwright/test';

test('Home Page: Load Metrics @performance', async ({ page }) => {
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

test('Home Page: Measure paint timing', async ({ page }) => {
  await page.goto('/');
  const paintMetrics = await page.evaluate(() => performance.getEntriesByType('paint'));
  console.log('Paint Metrics:', paintMetrics);
});

test('Home Page: Measure largest contentful paint', async ({ page }) => {
  await page.goto('/');
  const lcpObserver = new PerformanceObserver((entryList) => {
    const lcp = entryList.getEntries()[0];
    console.log('LCP:', lcp);
  });
  lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
});

test('Cart Page: Load Metrics @performance', async ({ page }) => {
  await page.goto('/cart');
  
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

test('Cart Page: Measure paint timing', async ({ page }) => {
  await page.goto('/cart');
  const paintMetrics = await page.evaluate(() => performance.getEntriesByType('paint'));
  console.log('Paint Metrics:', paintMetrics);
});