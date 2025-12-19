const btn = document.getElementById("seeMoreText");
const arrow = document.getElementById("seeMoreArrow");
const extraDiv = document.getElementById("extraContent");

const extraCardsHTML = `
<div class="property-grid" style="margin-top: 10px">
    

    <div class="right-column">
        <div class="iconic iconic-small">
            <div class="iconic-image" style="background-image: url('https://res.cloudinary.com/dicrvjstp/image/upload/v1766070036/2019-Top-Travel-Destinations-Sydney_mmeh3n.jpg');"></div>
            <div class="iconic-info">
                <h3>Fazendas Boi Gordo</h3>
                <p>Conceição do Araguaia (PA)</p>
            </div>

        </div>

        <div class="bottom-right-grid">
            <div class="iconic iconic-x-small">
                <div class="iconic-image" style="background-image: url('https://res.cloudinary.com/dicrvjstp/image/upload/v1766085568/the-everygirl-best-places-for-first-international-trip-feature_cmed79.jpg');">

                </div>
                <div class="iconic-info">
                    <h3>Fazenda Olavo Simões</h3>
                </div>

            </div>

            <div class="iconic iconic-x-small">
                <div class="iconic-image" style="background-image: url('https://res.cloudinary.com/dicrvjstp/image/upload/v1765696029/image-32_pilvv2.png');">

                </div>
                <div class="iconic-info">
                    <h3>Beautiful House</h3>
                </div>

            </div>
        </div>
    </div>
    <div class="iconic iconic-large">
        <div class="iconic-image" style="background-image: url('https://res.cloudinary.com/dicrvjstp/image/upload/v1765884275/most-visited-tourist-attraction-world-hollywood-magical-kingdom_ewhjmh.png');">

        </div>
        <div class="iconic-info">
            <h3>Fazenda Cristal</h3>
            <p>Cabreúva do Arraiados (PR)</p>
            <div class="iconic-price">R$ 250.000,00</div>
        </div>

    </div>
</div>
`;

btn.addEventListener("click", (e) => {
    e.preventDefault();

    // If no content or hidden → show
    if (extraDiv.style.display === "none" || extraDiv.style.display === "") {
        extraDiv.innerHTML = extraCardsHTML;
        extraDiv.style.display = "block";
        btn.textContent = "See Less";
        arrow.style.transform = "rotate(180deg)";
    } 
    // If visible → hide
    else {
        extraDiv.style.display = "none";
        extraDiv.innerHTML = "";
        btn.textContent = "See More";
        arrow.style.transform = "rotate(0deg)";
    }
});
