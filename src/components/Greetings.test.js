import { render, screen } from '@testing-library/react';
import Greetings from './Greetings'

describe('Greetings Component', () => {
    test('renders hello world as text', () => {
        //Arrange
        render(<Greetings />);

        //Act
        //...nothing

        //Assert
        const linkElement = screen.getByText(/hello world/i);
        expect(linkElement).toBeInTheDocument();
    });
})
