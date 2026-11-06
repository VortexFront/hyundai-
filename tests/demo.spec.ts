import { test, expect } from '@playwright/test';
import { mkdir } from 'node:fs/promises';

for (const width of [1440, 390]) {
  test(`honest local demo, keyboard navigation and assets at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const sent: string[] = [];
    const logs: string[] = [];
    const errors: string[] = [];
    const dialogs: string[] = [];
    page.on('request', request => { if (request.method() !== 'GET' || !request.url().startsWith('http://127.0.0.1:4315/')) sent.push(request.url()); });
    page.on('console', message => logs.push(message.text()));
    page.on('pageerror', error => errors.push(error.message));
    page.on('dialog', dialog => { dialogs.push(dialog.message()); void dialog.dismiss(); });
    await page.goto('./');
    await expect(page.getByRole('heading', { name: 'Hyundai Mufasa' })).toBeVisible();
    await expect(page.locator('html')).toHaveAttribute('lang', 'ru');
    await expect(page).toHaveTitle(/концепт лендинга/);
    await expect(page.locator('body')).not.toContainText(/НОВЫЙ 2025|280|6\.8|AWD|ассистент свяжется/i);
    const photo = page.getByRole('img', { name: 'Hyundai Mufasa', exact: true });
    await expect(photo).toBeVisible();
    await expect.poll(() => photo.evaluate(image => (image as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
    expect(await page.locator('a[href="#"]').count()).toBe(0);
    if (width < 768) {
      const toggle = page.getByRole('button', { name: 'Открыть меню' });
      await toggle.focus(); await page.keyboard.press('Enter');
      await expect(page.getByRole('button', { name: 'Закрыть меню' })).toHaveAttribute('aria-expanded', 'true');
      await page.keyboard.press('Escape');
      await expect(toggle).toHaveAttribute('aria-expanded', 'false');
      await toggle.click();
      await page.getByRole('navigation', { name: 'Мобильная навигация' }).getByRole('link', { name: 'Ассистенты', exact: true }).click();
      await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    } else {
      const link = page.getByRole('navigation', { name: 'Основная навигация' }).getByRole('link', { name: 'Ассистенты', exact: true });
      await link.focus(); await page.keyboard.press('Enter');
    }
    await page.getByRole('button', { name: 'Показать демо-ответ', exact: true }).click();
    await expect(page.getByRole('status')).toContainText('Сообщение никуда не отправлено; AI не подключён');
    await page.getByRole('button', { name: 'Посмотреть демо: Москва', exact: true }).click();
    await expect(page.getByLabel('Демо-салон', { exact: true })).toHaveValue('Москва');
    await page.getByRole('button', { name: 'Проверить демо-сценарий' }).click();
    await expect(page.getByRole('status').filter({ hasText: 'Запись не создана' })).toBeVisible();
    await page.getByRole('button', { name: 'Закрыть пример' }).click();
    await page.getByRole('button', { name: 'Посмотреть демо: Казань', exact: true }).click();
    await expect(page.getByLabel('Демо-салон', { exact: true })).toHaveValue('Казань');
    await expect(page.getByRole('status').filter({ hasText: 'Запись не создана' })).toHaveCount(0);
    expect(await page.locator('input:not([readonly]), textarea:not([readonly])').count()).toBe(0);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
    expect(overflow).toBe(false);
    expect(sent).toEqual([]); expect(errors).toEqual([]); expect(dialogs).toEqual([]);
    expect(logs.join('\n')).not.toMatch(/Демо-посетитель|Запись на тест-драйв|Имя:|Телефон:/);
    if (process.env.CAPTURE_SCREENSHOTS) {
      await page.getByRole('button', { name: 'Закрыть пример' }).click();
      for (const section of await page.locator('main > section').all()) { await section.scrollIntoViewIfNeeded(); }
      for (const heading of await page.locator('#характеристики h2').all()) {
        await expect(heading.locator('..')).toHaveCSS('opacity', '1');
      }
      await page.evaluate(() => scrollTo(0, 0));
      await mkdir('docs/screenshots', { recursive: true });
      await page.screenshot({ path: `docs/screenshots/${width < 768 ? 'mobile' : 'desktop'}.png`, fullPage: true });
    }
  });
}
