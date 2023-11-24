import { fireEvent, screen } from "@testing-library/vue";
import { ThemeChanger } from "..";
import { themeStore } from "@/stores/theme-store";
import { renderComponent } from "@/tests/render-component";

describe("ThemeChanger", () => {
  it("renders properly", () => {
    renderComponent(ThemeChanger);
    expect(screen.getByTestId("themeChanger")).toBeTruthy();
  });

  it("should render change the theme", async () => {
    renderComponent(ThemeChanger);

    // open themes
    await fireEvent.click(screen.getByTestId("themeChanger"));

    // check light theme is exists
    const light = screen.getByText(/☀️/i);
    expect(light).toBeTruthy();

    // click on the light theme
    await fireEvent.click(light);
    expect(themeStore.selectedTheme.value).toBe("light");
  });
});
