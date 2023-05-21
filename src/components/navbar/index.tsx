import {Container, Menu} from './styled'
import Image from 'next/image' 
import Logo from '../../assets/img/Audi-Logo.png'
import {BsSearch} from 'react-icons/bs'
import Link from 'next/link'


export const Navbar=()=>{
    return(
        <>
        <Container>
            <Menu>
                
                <ul>
                    <li className='logo'>
                      <Link href="/">
                      <Image src={Logo} alt='logo' width={100} height={40}/>
                      </Link>
                    </li>
                    <li>
                        <Link href="/">
                          Modelos
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                          Serviços ao cliente
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                          Vendas
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                          Universo Audi
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                          Modelos
                        </Link>
                    </li>
                
                </ul>
                <BsSearch className='search'/>
            </Menu>
        </Container>
        </>
    )
}
