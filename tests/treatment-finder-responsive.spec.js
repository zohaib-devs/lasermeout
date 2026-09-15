import { expect, test } from "@playwright/test";

const viewports = [
  { width: 375, height: 812 },
  { width: 768, height: 900 },
  { width: 1152, height: 900 },
  { width: 1440, height: 900 },
];

for (const viewport of viewports) {
  test(`hair-removal section remains contained at ${viewport.width}px`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto("http://127.0.0.1:3000", { waitUntil: "networkidle" });

    const section = page.locator("#treatments");
    const overflow = await section.evaluate((element) => element.scrollWidth - element.clientWidth);

    await section.screenshot({
      path: `test-results/treatment-finder-${viewport.width}.png`,
      animations: "disabled",
    });
    expect(overflow).toBeLessThanOrEqual(1);

    if (viewport.width < 992) {
      await section.evaluate((element) => element.scrollIntoView({ block: "start" }));
      const [titleBox, navigationBox] = await Promise.all([
        section.locator("h2").boundingBox(),
        page.locator("[aria-label='Primary navigation']").boundingBox(),
      ]);

      expect(titleBox.y).toBeGreaterThanOrEqual(navigationBox.y + navigationBox.height);
    }
  });
}
