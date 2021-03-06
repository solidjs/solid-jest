import { renderToString } from "solid-js/web"

describe("Test the server", () => {
  it("should render in the server", () => {
    const d = renderToString(() => <div title="Welcome to Jest">text content</div>);
    expect(d.html).toBe(`<div data-hk="0" title="Welcome to Jest">text content</div>`);
  })
})