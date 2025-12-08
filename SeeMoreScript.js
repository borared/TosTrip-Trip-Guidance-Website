const btn = document.getElementById("seeMoreText");
const arrow = document.getElementById("seeMoreArrow");
const extraDiv = document.getElementById("extraContent");

const extraCardsHTML = `
<div style="display: flex; gap: 7px; margin-bottom: 7px;">
    <div class="carousel-card card-1" style="flex:1;">
        <img src="https://res.cloudinary.com/dicrvjstp/image/upload/v1764507611/Screenshot_2025-11-30_183739_jhngeb.png" style="width: 100%;">
        <div class="card-overlay">
            <div class="card-title" style="color: white; font-size: 1.5rem;">Toul Eiffel - Rating: 4.6</div>
            <div class="card-description" style="margin-top: 5px; font-size: 18px;">France</div>
        </div>
    </div>
    <div class="carousel-card card-1" style="flex:1;">
        <img src="https://res.cloudinary.com/dicrvjstp/image/upload/v1764508312/_methode_times_prod_web_bin_a4a67f98-49b4-49df-91e9-6767273a8720_ofo1o6.jpg" style="width: 100%;">
        <div class="card-overlay">
            <div class="card-title" style="color: white; font-size: 1.5rem;">Kinkaku-ji - Rating: 4.5</div>
            <div class="card-description" style="margin-top: 5px; font-size: 18px;">Japan</div>
        </div>
    </div>
</div>

<div style="display: flex; gap: 7px; margin-bottom: 7px;">
    <div class="carousel-card card-1" style="flex:1;">
        <img src="https://res.cloudinary.com/dicrvjstp/image/upload/v1764508604/unnamed_lhjjiy.webp" style="width: 100%;">
        <div class="card-overlay">
            <div class="card-title" style="color: white; font-size: 1.5rem;">Fortifications of Xi - Rating: 4.6</div>
            <div class="card-description" style="margin-top: 5px; font-size: 18px;">China</div>
        </div>
    </div>
    <div class="carousel-card card-1" style="flex:1;">
        <img src="https://res.cloudinary.com/dicrvjstp/image/upload/v1764508740/323101_pykx7u.jpg" style="width: 100%;">
        <div class="card-overlay">
            <div class="card-title" style="color: white; font-size: 1.5rem;">New York City</div>
            <div class="card-description" style="margin-top: 5px; font-size: 18px;">United States</div>
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
