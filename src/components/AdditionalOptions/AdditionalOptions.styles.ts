import { Icon } from '@iconify/react'
import styled from 'styled-components'

export const AdditionalOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media (max-width: 600px) {
    display: none;
  }
`

export const SocialsContainer = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 800px) {
    display: none;
  }
`

export const LanguageContainer = styled.div`
  padding: 0 8px;
  border: 1px solid transparent;
  border-color: transparent #c8c8c8;
  cursor: pointer;
`

export const Mobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`

export const Language = styled(Icon)`
  font-size: 3rem;
  color: #c8c8c8;
  cursor: pointer;
`

export const Socials = styled(Icon)`
  font-size: 3rem;
  color: #c8c8c8;
  cursor: pointer;
`

export const BurgerMenu = styled(Icon)`
  font-size: 3rem;
  color: #c8c8c8;
`
