import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Async from './Async'

describe('async component', () => {
    test('renders post if request succeeds', async () => {
        //Arrange
        render(<Async />);

        //Act

        //Assert
        const linkElement = await screen.findAllByRole('listitem');
        expect(linkElement).not.toHaveLength(0)
    });
})