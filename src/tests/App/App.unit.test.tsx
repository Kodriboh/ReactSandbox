import { render, screen } from '@testing-library/react';
import App from 'src/App/App';

test('Renders a div with the role of application.', () => {
    render(<App />);

    const applicationContainer = screen.getByRole('application');

    expect(applicationContainer).toBeInTheDocument();
});