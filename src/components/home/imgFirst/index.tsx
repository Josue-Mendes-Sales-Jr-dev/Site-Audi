import Image from "next/image"
import Img from '../../../assets/img/RS e-tron GT.jpg'

import { Container } from "./styled"
export const ImgFirst=()=>{
    return(
        <Container>
        <Image src={Img} alt="audi"/>
        </Container>
    )
}