"use client"

import styled from '@emotion/styled'
import React from 'react'
import { useRouter } from 'next/navigation'; // Правильный импорт

const BreadCrums = ({ links }) => {

    const router = useRouter();

    return (
        <Wrapper>
            {
                links?.map((item, i) => (
                    <span key={i}>
                        <p onClick={item?.url ? () => router.push(item?.url) : () => { }}>{item?.label}</p>
                        {
                            i < links?.length - 1 && <span>{">"}</span>
                        }
                    </span>
                ))
            }
        </Wrapper>
    )
}

export default BreadCrums

const Wrapper = styled("div")`
  width: 100%;
  display: flex;
  gap: 8px;
  span {
    display: flex;
    gap: 5px;
    cursor: pointer;
    color: rgba(77, 81, 90, 1);
    font-size: 15px;
    line-height: 22px;
    font-weight: 400;
    p:hover {
        color: #24A758;
        cursor: pointer;
    }
  }
`;
