/**
 * @jest-environment jsdom
 */

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextField from '../form/TextField';

describe('TextField component', () => {
    it('renders correctly', () => {
        const { getByLabelText } = render(<TextField id="myInput">Test Input</TextField>);
        const inputElement = getByLabelText('Test Input');
        expect(inputElement).toBeInTheDocument();
    });

    it('calls onChange handler when input value changes', () => {
        const mockOnChange = jest.fn();
        const { getByLabelText } = render(<TextField id="myInput" onChange={mockOnChange}>Test Input</TextField>);

        const inputElement = getByLabelText('Test Input');
        fireEvent.change(inputElement, { target: { value: 'Hello, world!' } });

        expect(mockOnChange).toHaveBeenCalledWith('Hello, world!');
    });

    // Add more test cases as needed
});
