import Image from 'next/image';
import Logo from '@/img/logo-mercado.svg';

export default function Img() {
    return(
        <Image src={Logo} alt="Imagem Logo"/>
    );
}