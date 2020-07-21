const { generateUniqueId } = require("../../src/utils");

describe("Generate unique ID", () => {
  const id = generateUniqueId();
  it("Should have 8 characters", () => {
    expect(id).toHaveLength(8);
  });
  it("should be unique", () => {
    expect(id).not.toBe(generateUniqueId());
  });
});
