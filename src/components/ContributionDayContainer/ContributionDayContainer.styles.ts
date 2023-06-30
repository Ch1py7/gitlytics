import styled from 'styled-components'

export const ContributionDayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  height: 9rem;
  gap: 5px;
  padding: 0 2rem;
  background-color: #1e1e1e;
  border: 1px solid #8e8e8e;
  border-radius: 1.8rem;
`

export const ContributionDay = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 4rem;
`

export const ContributionDayText = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
`
