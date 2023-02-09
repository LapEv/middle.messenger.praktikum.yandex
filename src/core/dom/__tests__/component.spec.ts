import Component from "../сomponent";

type TestComponentProps = {};

class TestComponent extends Component<TestComponentProps> {
  static componentName: "TestComponent";

  render() {
    // template=hbs
    return `
      <div class="text-component">
        <div class="text-component__inner">
          {{text}}
        </div>
      </div>
    `;
  }
}

const getComponent = () => new TestComponent({ text: "Test" });

describe("Test component", () => {
  test("Render elements", () => {
    expect(getComponent().element).not.toBeNull();
  });

  test("Render inner elements", () => {
    const componentInnerElement = getComponent().element?.querySelector(
      ".text-component__inner"
    );
    expect(componentInnerElement).not.toBeNull();
  });

  test("Render correct text", () => {
    const componentInnerElement = getComponent().element?.querySelector(
      ".text-component__inner"
    );
    expect(componentInnerElement?.textContent).toContain("Test");
  });
});
