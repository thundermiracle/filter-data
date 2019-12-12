import { compose } from '../../src/lib/utils';

const func1 = (name: string): string => `My name is ${name}`;
const func2 = (name: string): string => `[NOTE]${name}`;

test('without null funcionts', () => {
  const myName = 'HelloWorld';
  const nameModifier = compose(func2, func1);

  const result = nameModifier(myName);
  const expected = '[NOTE]My name is HelloWorld';

  expect(result).toEqual(expected);
});
