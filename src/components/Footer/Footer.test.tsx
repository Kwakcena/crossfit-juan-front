import { screen, render } from "@testing-library/react";

import Footer from "./Footer";

describe('Footer', () => {
  it('만든이를 볼 수 있다', () => {
    render(<Footer />);

    expect(screen.getByText('Made by. Kwakcena')).toBeInTheDocument();
  });
});
