import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Container, Column, Row, Text, Title, Subtitle, Form, NameInput, EmailInput, PasswordInput } from './styles'
import { FaUser } from 'react-icons/fa'
import { MdEmail } from "react-icons/md"
import { FaLock } from "react-icons/fa"
import { useForm } from 'react-hook-form'

const Signup = () => {
    
    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    })
    
    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Text>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Text>
                </Column>
                <Column>
                    <Title>Comece agora grátis</Title>
                    <Subtitle>Crie sua conta e make the change._</Subtitle>
                    <Form>
                        <Input placeholder='Nome completo' leftIcon={<FaUser />} name='nome' control={control} />
                        {errors.nome && <span>Nome é obrigatório</span>}
                        <Input placeholder='E-mail' leftIcon={<MdEmail />} name='email' control={control} />
                        {errors.email && <span>E-mail é obrigatório</span>}
                        <Input placeholder='Senha' leftIcon={<FaLock />} name='senha' control={control} />
                        {errors.senha && <span>Senha é obrigatório</span>}
                        <Button title='Cadastrar' type='submit' variant='secondary' />
                    </Form>
                </Column>
            </Container>
        </>
    )
}

export { Signup };