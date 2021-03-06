describe("Test the browser", () => {
  it("should render in the browser", () => {
    const d = <div title="Welcome to Jest">text content</div>;
    expect(d.textContent).toBe("text content");
  })
})