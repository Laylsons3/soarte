function Home() {
    return (
<div>



<header>
    <section className="cabecalho">
        <div className="menu-e-logo">

            <div>
                    <nav>
                <label for="drop" class="toggle">Menu</label>
                <input type="checkbox" id="drop" />
                    <ul class="menu">
                        <li><a href="/">início</a></li>
                        <li><a href="/galeria">galeria</a></li>
                        <li><a href="#cursos">cursos</a></li>
                        <li><a href="#quem-somos">quem somos</a></li>
                        <li><a href="#apoie">apoie</a></li>
                        <li><a style={{backgroundColor:'green',padding:'2px 10px',borderRadius:'15px'}} href="#contato">contato</a></li>
            </ul>
        </nav>
            </div>

            <div>
                <img className="logo" src='/images/logo-soarte.svg' alt="Logo Soarte"/>
            </div>
        </div>
    </section>
</header>

</div>
    )
}

export default Home