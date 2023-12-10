import { screen } from "@testing-library/vue";
import { Header } from "..";
import { renderComponent } from "@/tests/render-component";

describe("Header", () => {
  it("renders properly", () => {
    renderComponent(Header);
    expect(screen.queryByText(/restaurant finder/i)).toBeTruthy();
  });

  it("should set height based on height props", () => {
    const { container } = renderComponent(Header, {
      props: {
        height: 48,
      },
    });

    expect(container.querySelector("#main-header")?.style?.height).toBe("48px");
  });
});
