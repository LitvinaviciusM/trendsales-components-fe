import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/Button';
import { userEvent, within } from '@storybook/testing-library';

// import { action } from '@storybook/addon-actions';

const meta: Meta = {
	title: 'Button',
	component: Button,
	// argTypes: {
	//   onClick: action('clicked'),
	// }
	parameters: {
		componentSubtitle: 'The mosst beautiful button in the world',
	},
};

export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
	children: 'Click me!',
	variant: 'primary',
	disabled: false,
};

Default.play = async ({ args, canvasElement }) => {
	const canvas = within(canvasElement);
	await userEvent.click(canvas.getByRole('button'));
};
