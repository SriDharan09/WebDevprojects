let jsonData;
document.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      jsonData = data;

      const container = document.getElementById("dataContainer");

      data.forEach((item, index) => {
        const div = document.createElement("div");
        div.classList.add("data");
        div.classList.add("color" + ((index % 4) + 1));
        const textcolor = [
          "hsl(0, 100%, 67%)",
          "hsl(39, 100%, 56%)",
          "hsl(166, 100%, 37%)",
          "hsl(234, 85%, 45%)",
        ][index % 4];

        // Add class to specify color
        div.innerHTML = `
               
                    <div class= "img-text"> <img class="row" src=${item.icon} alt=${item.category}>
                    <p class="row"  style="color: ${textcolor};">${item.category}</p> </div>
                   <div class ="bar-grade"> 
                    <p class="row stats grey bold">${item.score} <span style="color:grey;"> &nbsp / 100 </span>  </p> 
                     </div>
              
                `;
        container.appendChild(div);
      });
    })
    .catch((error) => console.error("Error fetching JSON data:", error));
});
