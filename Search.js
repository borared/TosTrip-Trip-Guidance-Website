const searchPages = [
    {
      keywords: ["siem reap", "angkor", "Siem reap", "Siem Reap"],
      url: "https://tos-trip-trip-guidance-website.vercel.app/Popular/PopularPlace/SiemReap/siemreap.html"
    },
    {
      keywords: ["capella ubud", "hotel bali"],
      url: "https://tos-trip-trip-guidance-website.vercel.app/Destinations/water/Hotel/CapellaUbud/capella.html"
    },
    {
      keywords: ["battambang"],
      url: "battambang.html"
    }
  ];

  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");

  function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    if (!query) return;

    const result = searchPages.find(page =>
      page.keywords.some(keyword => query.includes(keyword))
    );

    if (result) {
      window.location.href = result.url;
    } else {
      alert("No matching page found");
    }
  }

  searchBtn.addEventListener("click", handleSearch);

  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  });
