import repeat from 'lodash.repeat';

const reducer = (state = { value: '', depth: 0 }, char) => {
  const isClosing = char === ')';
  const isCorrected = isClosing && state.depth < 1;

  return {
    value: `${isCorrected ? '(' : ''}${state.value}${char}`,
    depth: state.depth + (isCorrected ? 0 : (isClosing ? -1 : 1))
  };
};

export default string => {
  const result = string.split('').reduce(reducer, undefined);
  return `${result.value}${repeat(')', result.depth)}`;
};
