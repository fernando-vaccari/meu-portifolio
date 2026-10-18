import { test, expect } from '@playwright/test';

test('portfólio: projetos, contato real, filtros e tema persistente', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Seu negócio.');
  await expect(page.locator('.project-card:visible')).toHaveCount(3);
  await expect(page.getByRole('link', { name: 'Pedir orçamento no WhatsApp' })).toHaveAttribute('href', /wa\.me\/5547988987373/);
  await expect(page.getByRole('link', { name: 'E-mail', exact: true })).toHaveAttribute('href', 'mailto:pickhardtfernando@gmail.com');
  await page.getByRole('button', { name: 'Saúde', exact: true }).click();
  await expect(page.locator('.project-card:visible')).toHaveCount(1);
  await expect(page.locator('.project-card:visible')).toContainText('Sorriso');
  await page.getByRole('button', { name: /Todos/ }).click();
  await expect(page.locator('.project-card:visible')).toHaveCount(3);
  const before = await page.locator('html').getAttribute('data-theme');
  await page.getByRole('button', { name: /Ativar tema/ }).click();
  const after = before === 'dark' ? 'light' : 'dark';
  await expect(page.locator('html')).toHaveAttribute('data-theme', after);
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', after);
});

for (const demo of ['sorriso', 'brasa', 'vertice']) {
  test(`${demo}: imagens, navegação e solicitação simulada`, async ({ page }) => {
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(`/demos/${demo}/`);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.getByText('SITE DEMONSTRATIVO', { exact: false }).first()).toBeVisible();
    for (const image of await page.locator('img').all()) {
      await image.scrollIntoViewIfNeeded();
      await expect(image).toHaveJSProperty('complete', true);
      await expect.poll(() => image.evaluate(img => img.naturalWidth)).toBeGreaterThan(0);
    }
    const broken = await page.locator('img').evaluateAll(images => images.filter(i => i.complete && i.naturalWidth === 0).map(i => i.src));
    expect(broken).toEqual([]);
    if (demo === 'brasa') {
      await page.getByRole('button', { name: 'Sobremesas', exact: true }).click();
      await expect(page.locator('.menu-item')).toHaveCount(2);
      await expect(page.getByText('Chocolate & afeto', { exact: true })).toBeVisible();
    } else {
      await page.locator('.service-select').first().click();
      await expect(page.locator('#service-select')).toHaveValue(demo === 'sorriso' ? 'Prevenção & limpeza' : 'Corte personalizado — R$ 55');
    }
    await page.getByLabel('Seu nome', { exact: true }).fill('Cliente de teste');
    const date = new Date();
    date.setDate(date.getDate() + 1);
    while (date.getDay() !== 2) date.setDate(date.getDate() + 1);
    const value = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    await page.getByLabel('Dia de preferência').fill(value);
    await page.getByRole('button', { name: /Simular/ }).click();
    await expect(page.locator('#booking-result')).toBeVisible();
    await expect(page.locator('#booking-result')).toContainText('Simulação concluída, Cliente de teste!');
    await expect(page.locator('#booking-result')).toContainText('Nenhum dado foi enviado');
    await page.locator('details').first().locator('summary').click();
    await expect(page.locator('details').first()).toHaveAttribute('open', '');
    await page.getByRole('link', { name: 'Portfólio de Fernando' }).click();
    await expect(page).toHaveURL(/\/#projetos$/);
    expect(errors).toEqual([]);
  });
}

test('menu móvel e ausência de rolagem horizontal nas quatro páginas', async ({ page }, testInfo) => {
  for (const route of ['/', '/demos/sorriso/', '/demos/brasa/', '/demos/vertice/']) {
    await page.goto(route);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    expect(overflow, `Rolagem horizontal em ${route}`).toBe(false);
    if (testInfo.project.name === 'mobile') {
      await page.getByRole('button', { name: 'Abrir menu', exact: true }).click();
      await expect(page.locator('#mobile-nav')).toBeVisible();
      await page.locator('#mobile-nav a').first().click();
      await expect(page.locator('#mobile-nav')).toBeHidden();
    }
  }
});
