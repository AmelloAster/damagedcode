import type { FCC } from '@#/react';
import styled from '@emotion/styled';

const Paragraph: FCC = ({ children }) => (
  <p className="text-justify indent-[1em]">{children}</p>
);

export default Paragraph;
