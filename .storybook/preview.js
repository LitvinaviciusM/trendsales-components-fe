/*
 * More on Storybook global parameters at:
 * https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
 */
export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	// Storybook a11y addon configuration
	a11y: {
		// the target DOM element
		element: '#root',
		// sets the execution mode for the addon
		manual: false,
	},
};
