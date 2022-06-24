export function Price() {
    return (
        <body>
    <h2 id="title">Pricing table - with hover effect </h2> 
    <div class="hover-table-layout">
        <div class="listing-item"  >
            <figure class="image">
                <img src={`${process.env.PUBLIC_URL}/sprinter3.jpg`} alt="image"></img>
                <figcaption>
                  <div class="caption">
                    <h1>Premium</h1>
                    <h1>90.000 ariary</h1>
                    </div>
                </figcaption>
            </figure>
            <div class="listing">
                <h4>Wolkswagen Crafter 4</h4>
                <h4>Sièges haut de gamme</h4>
                <h4>Prises de 220 volts, climatisation..</h4>
                <h4>Wi-Fi illimité.s</h4>
                <h4>En savoir plus</h4>
            </div>
        </div>
        <div class="listing-item" id="mikisaka">
            <figure class="image">
                <img src={`${process.env.PUBLIC_URL}/sprinter2.jpg`} alt="image"></img>
                <figcaption>
                   <div class="caption">
                    <h1>Lite</h1>
                    <h1>50.000 ariary</h1>
                    </div>
                </figcaption>
            </figure>
            <div class="listing">
                <h4>Mercedes Sprinter 4.</h4>
                <h4>Sièges premium avec accoudoir et tablette.</h4>
                <h4>Wi-Fi illimité.</h4>
                <h4>En savoir plus</h4>
            </div>
        </div>
        <div class="listing-item" id="mikisakas">
            <figure class="image">
                <img src={`${process.env.PUBLIC_URL}/sprinter1.jpg`} alt="image"></img>
                <figcaption>
                   <div class="caption">
                    <h1>Classic</h1>
                    <h1>30.000 ariary</h1>
                    </div>
                </figcaption>
            </figure>
            <div class="listing">
                <h4>Mercedes Sprinter 2 ou 3</h4>
                <h4>Un bon rapport Qualité / Prix</h4>
                <h4>Wi-Fi illimitée</h4>
                <h4>En savoir plus</h4>
            </div>
        </div>
    </div>
</body>
    )
}