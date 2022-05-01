import Link from 'next/link';

function Home() {
    return (
<div>

<Link href="/matricula">
    <a className='button-matricula' alt="Botão para acessar a página de matrículas"><span>MATRÍCULA</span></a>
</Link>

</div>
    )
}

export default Home