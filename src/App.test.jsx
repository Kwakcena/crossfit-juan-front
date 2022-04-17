import App from './App';

import { render } from '@testing-library/react';

describe('App', () => {
  const renderApp = () => render(
    <App />,
  )

  it('render App', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent('Hello world');
  })
})