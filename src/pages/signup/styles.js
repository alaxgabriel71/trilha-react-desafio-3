import styled from 'styled-components'

export const Container = styled.main`
    width: 100%;
    height: 100%;
    margin-top: 120px;

    display: flex;
    justify-content: space-between;
`
export const Column = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Row = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Text = styled.p`
    width: 388px;
    height: 308px;
    font-family: 'Open Sans';
    font-size: 32px;
`
export const Title = styled.h2`
    font-family: 'Open Sans';
    font-size: 32px;
`
export const Subtitle = styled.p`
    font-family: 'Open Sans';
    font-size: 18px;
`
export const Form = styled.form`
    margin-top: 20px;
    width: 100%;
    max-width: 300px;
`

export const NameInput = styled.input`
    display: flex;
    `
export const EmailInput = styled.input`
    display: flex;
`
export const PasswordInput = styled.input`
    display: flex;
`