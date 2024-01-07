// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ThemeProps } from "../../types";
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

type Props = ThemeProps & {
  percent: number;
  backgroundColor?: string;
}

const Component = ({ className, percent }: Props) => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    requestAnimationFrame(() => {
      setWidth(percent);
    });
  }, [percent]);

  return (
    <div
      className={className}
    >
      <div
        className='__progress-value'
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

export const ProgressBar = styled(Component)<Props>(({ theme: { token }, backgroundColor }: Props) => {
  return {
    display: 'flex',
    borderRadius: 40,
    width: '100%',
    height: 15,
    backgroundColor:  token.colorBgInput,

    '.__progress-value': {
      transition: 'all 0.9s',
      borderRadius: 40,
      backgroundColor: backgroundColor ||token.colorBgGreen,
      cursor: 'pointer',


      '&:hover': {
        opacity: '0.5'
      }
    },
  };
});


