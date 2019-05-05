import React, { useRef, useState, useEffect, useMemo } from 'react';
import styled from 'styled-components/macro';

const chars = [
  'A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z',
];

function DecoderText(props) {
  const { text, start, offset = 100, className, style, fps = 24 } = props;
  const [position, setPosition] = useState(0);
  const [started, setStarted] = useState(false);
  const [output, setOutput] = useState([{ type: 'code', value: '' }]);
  const content = useRef(text.split(''));
  const startTime = useRef(0);
  const elapsedTime = useRef(0);
  const running = useRef(false);
  const timeout = useRef();

  useEffect(() => {
    if (start && !started) startTimeout();

    return function cleanUp() {
      cancelAnimationFrame(animate);
      clearTimeout(timeout.current);
      stop();
    };
  }, [start]);

  useEffect(() => {
    if (position > content.current.length) {
      running.current = false;
      const finalArray = setValue(content.current);
      setOutput(finalArray);
      return;
    }

    requestAnimationFrame(animate);

    const textArray = shuffle(content.current, chars, position);
    setOutput(textArray);
  }, [position]);

  const startTimeout = useMemo(() => () => {
    timeout.current = setTimeout(startAnim, 300);
  }, []);

  const startAnim = useMemo(() => () => {
    startTime.current = Date.now();
    elapsedTime.current = 0;
    running.current = true;
    setStarted(true);
    animate();
  }, []);

  const stop = useMemo(() => () => {
    running.current = false;
  }, []);

  const animate = useMemo(() => () => {
    const elapsed = Date.now() - startTime.current;
    const deltaTime = elapsed - elapsedTime.current;
    const needsUpdate = 1000 / fps <= deltaTime;

    if (!running.current) return;

    if (!needsUpdate) {
      requestAnimationFrame(animate);
      return;
    }

    elapsedTime.current = elapsed;
    setPosition(elapsedTime.current / offset);
  }, [startTime, elapsedTime, running]);

  const setValue = useMemo(() => value => {
    const val = value.map(value => ({
      type: 'actual',
      value,
    }));
    return val;
  }, []);

  const shuffle = useMemo(() => (content, chars, position) => {
    return content.map((value, index) => {
      if (index < position) {
        return { type: 'actual', value };
      }

      return {
        type: 'code',
        value: getRandCharacter(chars),
      };
    });
  }, []);

  const getRandCharacter = useMemo(() => chars => {
    const randNum = Math.floor(Math.random() * chars.length);
    const lowChoice = - .5 + Math.random();
    const picketCharacter = chars[randNum];
    const chosen = lowChoice < 0 ? picketCharacter.toLowerCase() : picketCharacter;
    return chosen;
  }, []);

  return (
    <DecoderSpan className={className} style={style}>
      {output.map((item, index) => {
        if (item.type === 'actual') {
          return (<span key={`${item.value}_${index}`}>{item.value}</span>);
        }
        return (
          <DecoderCode
            key={`${item.value}_${index}`}
            aria-hidden="true"
          >
            {item.value}
          </DecoderCode>
        );
      })}
    </DecoderSpan>
  );
};

const DecoderSpan = styled.span`
  &:after {
    content: '_';
    opacity: 0;
    visibility: hidden;
  }
`;

const DecoderCode = styled.span`
  opacity: 0.8;
  font-weight: 400;
  font-family: 'Hiragino Sans', sans-serif;
  line-height: 0;
`;

export default React.memo(DecoderText);