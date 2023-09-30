import { FunctionComponent } from 'react';
import { render } from '@testing-library/react';
import { useDiff } from './use-diff';

interface TestComponentProps {
  primitive: string;
  complex: string[];
}

const TestComponent: FunctionComponent<TestComponentProps> = ({ primitive, complex }) => {
  useDiff([primitive, complex]);
  return <div>Foo!</div>;
};

const consoleSpy = jest.spyOn(console, 'log');

beforeEach(() => {
  consoleSpy.mockClear();
});

it('should not log', () => {
  const primitive = 'foo';
  const complex = ['bar'];
  render(<TestComponent primitive={primitive} complex={complex} />);

  expect(consoleSpy).not.toHaveBeenCalled();
});

it('should not log if no changes', () => {
  const primitive = 'foo';
  const complex = ['bar'];
  const { rerender } = render(<TestComponent primitive={primitive} complex={complex} />);

  consoleSpy.mockClear();

  rerender(<TestComponent primitive={primitive} complex={complex} />);

  expect(consoleSpy).not.toHaveBeenCalled();
});

it('should log if changes occured', () => {
  const consoleSpy = jest.spyOn(console, 'log');

  const primitive = 'foo';
  const complex = ['bar'];
  const { rerender } = render(<TestComponent primitive={primitive} complex={complex} />);

  expect(consoleSpy).not.toHaveBeenCalled();

  rerender(<TestComponent primitive="foooo" complex={complex} />);

  expect(consoleSpy).toHaveBeenCalled();
});
