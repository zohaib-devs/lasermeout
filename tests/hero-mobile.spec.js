import { expect, test } from "@playwright/test";

test("mobile hero keeps the model inside the visible hero and over the heading", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("http://127.0.0.1:3000", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(1000);

  const hero = page.locator("main");
  const model = page.locator('img[alt="Woman jumping joyfully"]');
  const title = page.locator("h1");

  await page.screenshot({ path: "test-results/hero-mobile.png", fullPage: false });

  const [heroBox, modelBox, titleBox] = await Promise.all([
    hero.boundingBox(),
    model.boundingBox(),
    title.boundingBox(),
  ]);

  console.log(JSON.stringify({ heroBox, modelBox, titleBox }));

  expect(modelBox.y).toBeGreaterThanOrEqual(heroBox.y);
  expect(modelBox.y + modelBox.height).toBeLessThanOrEqual(heroBox.y + heroBox.height);
  expect(modelBox.y).toBeLessThan(titleBox.y + titleBox.height);
  expect(modelBox.y + modelBox.height).toBeGreaterThan(titleBox.y);
});

test("desktop hero keeps the model below the viewport top", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("http://127.0.0.1:3000", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(1000);

  const model = page.locator('img[alt="Woman jumping joyfully"]');
  await page.screenshot({ path: "test-results/hero-desktop.png", fullPage: false });

  const modelBox = await model.boundingBox();
  console.log(JSON.stringify({ modelBox }));

  expect(modelBox.y).toBeGreaterThanOrEqual(0);
});
