# Kormilo

Static source for [kormilo.io](https://kormilo.io), deployed through Netlify.

## Deployment

Netlify builds the site from `main` using the settings in `netlify.toml`:

```text
Build command: npm run build
Publish directory: dist
```

The build copies the static HTML, CSS, images, and Netlify form markup into `dist/`.

## Fleet application routes

Applications may remain in independent repositories and deployments while appearing beneath the Kormilo domain. Netlify proxy rewrites in `netlify.toml` map the public path to each application's Netlify site.

| Public path | Application deployment | Repository |
| --- | --- | --- |
| `/fleet/nautilus` | `kormilo-nautilus.netlify.app` | `mcamaj/Nautilus` |

## Mycelium OAuth callback

`/fleet/mycelium/oauth/callback/` is a static, same-origin bridge used by the
Mycelium Obsidian plugin. It accepts Google's OAuth `code`, `state`, and error
parameters, removes them from the browser address bar, and forwards them to
`obsidian://mycelium-oauth`.

The bridge does not exchange tokens, persist parameters, load third-party
resources, or send analytics. Mycelium keeps the PKCE verifier on the device.

The upstream application must use relative asset URLs or a compatible base path so assets continue to work through the proxy.
