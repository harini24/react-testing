import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Async from './Async'

describe('async component', () => {
    test('renders post if request succeeds', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: "p1", title: 'mock post' }]
        })
        //Arrange
        render(<Async />);

        //Act

        //Assert
        const linkElement = await screen.findAllByRole('listitem');
        expect(linkElement).not.toHaveLength(0)
    });
})