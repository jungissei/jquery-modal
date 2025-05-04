import { test, expect } from "@playwright/test";
import { AxeBuilder } from "@axe-core/playwright";
import { createHtmlReport } from "axe-html-reporter";

test("accessibility test", async ({ page }) => {
  await page.goto("http://localhost:3001/basic/index.html");

  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "bestpractice"])
    .analyze();

  if (results.violations.length > 0) {
    createHtmlReport({ results });
  }

  expect(results.violations.length).toBe(0);
});
