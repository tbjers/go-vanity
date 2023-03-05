import { Hono } from "hono";
import { Bindings } from "./bindings";
import { PackagePage } from "./pages/package";

const app = new Hono<{ Bindings: Bindings }>();

app.notFound((c) => c.json({ message: "Not Found", ok: false }, 404));

app.get("/:packageName{[0-9a-zA-Z._-]+}", (c) => {
  const packageName = c.req.param("packageName");
  return c.html(<PackagePage name={packageName} />);
});

app.fire();

export default app;
