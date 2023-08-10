import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from '@/pages';

describe('Home', () => {
  it('Heading component on home page should render', () => {
    render(<Home />);
    const testHeading = screen.getByRole('heading', {
        name: "Proserus Dashboard",
    });
    expect(testHeading).toBeInTheDocument();
  })
});