import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

    test('greeting good to see you on load and button not clicked', () => {
        render(<Greetings />);
        const linkElement = screen.getByText(/Its good to see you/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('renders "Changed" if button was clicked', () => {
        //Arrange
        render(<Greetings />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        //Assert
        const linkElement = screen.getByText(/Changed/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('not renders "Its good to see you" if button was clicked', () => {
        //Arrange
        render(<Greetings />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        //Assert
        const linkElement = screen.queryAllByText(/Its good to see you/i);
        expect(linkElement).toBeNull();
    });
})
