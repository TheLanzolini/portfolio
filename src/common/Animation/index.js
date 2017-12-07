import { keyframes } from 'styled-components'

export const fadeInLeft = keyframes`
  0% {
    opacity: 0.0;
    transform: translateX(-5%);
  }
  100% {
    opacity: 1.0;
    transform: translateX(0%);
  }
`

export const fadeInLeftDelay = keyframes`
  0% {
    opacity: 0.0;
    transform: translateX(-5%);
  }
  50% {
    opacity: 0.0;
    transform: translateX(-5%);
  }
  100% {
    opacity: 1.0;
    transform: translateX(0%);
  }
`

export const fadeInRight = keyframes`
  0% {
    opacity: 0.0;
    transform: translateX(5%);
  }
  100% {
    opacity: 1.0;
    transform: translateX(0%);
  }
`

export const fadeInRightDelay = keyframes`
  0% {
    opacity: 0.0;
    transform: translateX(5%);
  }
  50% {
    opacity: 0.0;
    transform: translateX(5%);
  }
  100% {
    opacity: 1.0;
    transform: translateX(0%);
  }
`

export const fadeInTop = keyframes`
  0% {
    opacity: 0.0;
    transform: translateY(-5%);
  }
  100% {
    opacity: 1.0;
    transform: translateY(0%);
  }
`

export const fadeInTopDelay = keyframes`
  0% {
    opacity: 0.0;
    transform: translateY(-5%);
  }
  50% {
    opacity: 0.0;
    transform: translateY(-5%);
  }
  100% {
    opacity: 1.0;
    transform: translateY(0%);
  }
`
