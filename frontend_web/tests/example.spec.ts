import { expect, test } from "@playwright/test";

test.describe("example", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("about");
  });

  test("about page has title", async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Xtreme Xmas Code - About/);
  });

  test("logo links to homepage", async ({ page }) => {
    // create a locator
    const anchor = page.locator("a.logo");

    // Expect an attribute "to be strictly equal" to the value.
    await expect(anchor).toHaveAttribute("href", "/");
  });
});
