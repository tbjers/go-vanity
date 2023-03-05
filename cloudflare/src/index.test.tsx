import app from ".";
import { PackagePage } from "./pages/package";

describe("Worker", () => {
  it("should return 404", async () => {
    const res = await app.request("http://localhost/");
    const data = await res.json();
    expect(res.status).toBe(404);
    expect(res.ok).toEqual(false);
    expect(data).toMatchObject({
      message: "Not Found",
      ok: false
    });
  });

  it("should render a package page", async () => {
    const res = await app.request("http://localhost/pkgname");
    const data = await res.text();
    expect(res.status).toBe(200);
    expect(data).toMatchInlineSnapshot(<PackagePage name="pkgname"/>);
  });
});
