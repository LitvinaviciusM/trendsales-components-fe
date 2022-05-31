import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './Button';

test('children matches text content', () => {
	const { container } = render(<Button variant="primary">Primary</Button>);
	const buttonElement = container.querySelector('button');
	expect(buttonElement).not.toBeNull();
	expect(buttonElement.textContent).toEqual('Primary');
});
