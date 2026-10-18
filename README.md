# Fernando Vaccari — Sites para negócios locais

Portfólio comercial e três sites demonstrativos completos para apresentar a empresas encontradas no Google Maps.

| Página | Caminho | Recursos |
| --- | --- | --- |
| Portfólio | `/` | Projetos por segmento, tema claro/escuro, WhatsApp e e-mail |
| Sorriso — clínica | `/demos/sorriso/` | Serviços, dúvidas e simulação de avaliação |
| Mesa & Brasa — restaurante | `/demos/brasa/` | Cardápio por categoria e simulação de reserva |
| Vértice — barbearia | `/demos/vertice/` | Serviços, preços ilustrativos e simulação de agendamento |

As empresas dos demos são fictícias. Os formulários validam os campos e mostram o resultado da simulação: não enviam dados nem fazem reservas reais. O contato do portfólio abre o WhatsApp ou o e-mail do Fernando.

## Executar

Requer Node.js 22.12+ (validado com Node.js 24).

```bash
cd /workspace/Portif-lio
npm ci --cache /workspace/.cache/npm
npm run dev -- --port 5173 --strictPort
```

Produção e testes:

```bash
npm run build
npm test
npm run preview -- --port 4173 --strictPort
```

Na nuvem, os testes usam `/usr/bin/chromium`. Em outra máquina, execute `npx playwright install chromium` antes do primeiro teste. São testados desktop, celular, links de contato, filtros, tema, cardápio, imagens e simulações.

## Personalizar

- Nome, apresentação, WhatsApp e e-mail: `src/profile.js`.
- Portfólio: `src/portfolio.js` e `src/style.css`.
- Três sites de negócio: `src/demos.js` e `src/demos.css`.
- Imagens locais: `public/images/`. Não dependem de serviços externos em execução.

Contatos públicos informados pelo proprietário: **+55 47 98898-7373** e **pickhardtfernando@gmail.com**.

## Publicar e enviar aos clientes

O código precisa ser publicado para ter links públicos. A pasta `dist/`, gerada por `npm run build`, pode ser enviada para uma hospedagem estática. Inclui todos os demos e não precisa de banco de dados.

Para GitHub Pages:

1. Envie estes arquivos para a branch `main` do repositório.
2. Em **Settings → Pages → Build and deployment**, selecione **GitHub Actions**.
3. Em **Actions → Publicar portfólio → Run workflow**, execute o workflow.
4. Use o endereço informado pelo próprio GitHub após a publicação.

O workflow é manual: criar os arquivos não publica o site. Ele ajusta o caminho-base automaticamente. Para gerar esse caminho manualmente, execute `npm run build -- --base=/Portif-lio/`.

Antes de enviar aos clientes, confira o WhatsApp no celular e compartilhe o portfólio ou o link do demo mais próximo do segmento deles. Créditos das imagens em `CREDITS.md`.
