import Link from 'next/link';

function Home() {
    return (
<div>

    <section className="galeria" id="galeria">

    <p class="heading">GALERIA</p>
  <div class="gallery-image">
    <div class="img-box">
      <img src="images/galeria/img1.jpg" alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>Recital de Natal</p>
          <p class="opacity-low">2017</p>
        </div>
      </div> 
    </div>
    <div class="img-box">
      <img src="images/galeria/img2.jpg" alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>APRESENTAÇÃO</p>
          <p class="opacity-low"></p>
        </div>
      </div>
    </div>
    <div class="img-box">
      <img src="images/galeria/img3.jpg" alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>APRESENTAÇÃO</p>
          <p class="opacity-low"></p>
        </div>
      </div>
    </div>
    <div class="img-box">
      <img src="images/galeria/img4.jpg" alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>BANDA DE MÚSICA SONS DA ARATANHA</p>
          <p class="opacity-low"></p>
        </div>
      </div> 
    </div>
    <div class="img-box">
      <img src="images/galeria/img5.jpg" alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>APRESENTAÇÃO</p>
          <p class="opacity-low"></p>
        </div>
      </div> 
    </div>
    <div class="img-box">
      <img src="images/galeria/img6.jpg" alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>LOCAL.EVENT</p>
          <p class="opacity-low"></p>
        </div>
      </div> 
    </div>
  </div>
        

        <div>
            <Link href="/galeria">
            <a className="button-ver-mais-galeria">Ver mais</a>
            </Link>
        </div>



    </section>

</div>
    )
}

export default Home