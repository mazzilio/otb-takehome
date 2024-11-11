import Provider from '../app/provider';
import { render } from '@testing-library/react';
import React from 'react';

export const renderWithTheme = (ui) => {
	const Wrapper = ({ children }) => <Provider>{children}</Provider>;
	return render(ui, { wrapper: Wrapper });
};
