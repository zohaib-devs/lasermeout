import { expect, test } from "@playwright/test";

const viewports = [
  { width: 375, height: 812 },
  { width: 768, height: 900 },
  { width: 1152, height: 900 },
  { width: 1440, height: 900 },
];

for (const viewport of viewports) {
  test(`fuzz-free section stays usable at ${viewport.width}px`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto("http://127.0.0.1:3000", { waitUntil: "networkidle" });

    const section = page.locator("[aria-labelledby='fuzz-free-title']");
    const viewportOverflow = await section.evaluate((element) =>
      getComputedStyle(element.parentElement.parentElement).overflowX,
    );

    expect(viewportOverflow).toBe("hidden");

    if (viewport.width < 992) {
      await section.evaluate((element) => element.scrollIntoView({ block: "start" }));
      const [titleBox, navigationBox] = await Promise.all([
        page.locator("#fuzz-free-title").boundingBox(),
        page.locator("[aria-label='Primary navigation']").boundingBox(),
      ]);

      expect(titleBox.y).toBeGreaterThanOrEqual(navigationBox.y + navigationBox.height);
    }
  });
}
