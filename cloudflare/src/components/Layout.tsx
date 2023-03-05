import { html } from "hono/html";

export const Layout = (props: {title: string, children?: any}) => {
  return html`<!DOCTYPE html>
    <html>
      <head>
        <title>${props.title}</title>
      </head>
      <body>${props.children}</body>
    </html>`;
};
