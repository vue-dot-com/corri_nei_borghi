function resizeHeaderLogo() {
  // Check window size
  if (window.innerWidth <= 1200) {
    // Avoid running the function if window size is 1200px or smaller
    return;
  }
  // Get the image element
  var logoImage = document.querySelector(".logo-small");
  // Add scroll event listener
  window.addEventListener("scroll", function () {
    // Calculate the new width based on scroll position
    if (this.window.scrollY > 20) {
      var newWidth = 35; // Adjust the factor as needed
    } else {
      newWidth = 60;
    }

    // Set the new width for the image
    logoImage.style.width = newWidth + "%";
  });
}

function setActivePage(page) {
  // Remove 'active' class from all anchor tags
  const anchorTags = document.querySelectorAll("#navbar .nav-link");
  anchorTags.forEach((tag) => {
    tag.classList.remove("active");
  });

  // Add 'active' class to the anchor tag with the corresponding id
  const activeTag = document.getElementById(page);
  if (activeTag) {
    activeTag.classList.add("active");
  }
}

async function fetchAndInsertNavbar(page) {
  try {
    let response;
    // Function to fetch and insert navbar HTML content
    const insertNavbar = async () => {
      response =
        window.innerWidth > 1200
          ? await fetch("src/components/header.html")
          : await fetch("src/components/offcanvas_header.html");

      const html = await response.text();
      // Insert the HTML content into the navbar container
      document.getElementById("navbar").innerHTML = html;
    };

    // Call the function initially to set up the correct navbar
    await insertNavbar();

    // Add event listener for window resize
    window.addEventListener("resize", insertNavbar);

    // Wait for a short delay before querying for .logo-small
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    // Call the function to resize logo dinamycally
    resizeHeaderLogo();
    // Call the function to set active nav link
    setActivePage(`${page}-nav-link`);
  } catch (error) {
    console.error("Error fetching and inserting navbar:", error);
  }
}

async function fetchAndInsertComponent(componentFilePath, componentId) {
  try {
    // Fetch HTML content
    const response = await fetch(componentFilePath);
    const html = await response.text();

    // Insert HTML content into the DOM
    document.getElementById(componentId).innerHTML = html;

    // Resolve promise (maybe unneeded)
    // await new Promise((resolve) => setTimeout(resolve, 1000));
  } catch (error) {
    console.error("Error fetching and inserting component:", error);
  }
}

function generateClassificheHTML(tappe, componentsIds) {
  const { yearId, tableId, trophyId } = componentsIds;
  // Function to generate HTML for the classifiche data
  let html_year = "";
  let html_table = "";
  let html_trophy = "";

  // Iterate over each year
  tappe.forEach((yearData) => {
    html_year += `<h2>${yearData.year}</h2>`;

    // Create table for each year
    html_table += "<table class='classifiche-table'>";
    html_table +=
      "<thead><tr><th colspan='3' class='location-header'>Location</th><th colspan='2' class='non-competitiva-header'>Non Competitiva</th><th colspan='2' class='competitiva-header'>Competitiva</th></tr></thead>";
    html_table += "<tbody>";

    // Iterate over each location
    yearData.gare.forEach((gara) => {
      html_table += "<tr>";
      html_table += `<td colspan='3' class='location-cell'><b>${gara.location}</b></td>`;
      html_table += `<td class='non-competitiva-f-cell'><a href="${gara.nonCompetitiva.f}" target="_blank">Non Comp. Femminile</a></td>`;
      html_table += `<td class='non-competitiva-m-cell'><a href="${gara.nonCompetitiva.m}" target="_blank">Non Comp. Maschile</a></td>`;
      html_table += `<td class='competitiva-f-cell'><a href="${gara.competitiva.f}" target="_blank">Comp. Femminile</a></td>`;
      html_table += `<td class='competitiva-m-cell'><a href="${gara.competitiva.m}" target="_blank">Comp. Maschile</a></td>`;
      html_table += "</tr>";
    });

    html_table += "</tbody>";
    html_table += "</table>";

    // Add trofeo information
    html_trophy += `<p><a href="${yearData.trofeo.individuale}" target="_blank">Trofeo Individuale</a> (Competitiva e Non Competitiva)</p>`;
    html_trophy += `<p><a href="${yearData.trofeo.squadre}" target="_blank">Trofeo Squadre</a></p>`;
  });

  // Insert HTML content into the DOM
  document.getElementById(yearId).innerHTML = html_year;
  document.getElementById(tableId).innerHTML = html_table;
  document.getElementById(trophyId).innerHTML = html_trophy;
}

function validateFormAndSend(formClass) {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(formClass);

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          sendEmail();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
}

function sendEmail() {
  // Get form data
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  // Construct mailto URL with form data
  var mailtoLink =
    "mailto:" +
    atob("cG9zdG1hc3RlckBjb3JyaW5laWJvcmdoaS5pdA0K") +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(
      `Nome e Cognome: ${name}
      Email: ${email}
      ==========
      ${message}
      ==========
      `
    );

  // Open mailto link in a new window
  window.open(mailtoLink, "_blank");
}

// Function to dynamically change data-bs-target and id attribute
function setElementAttibutes(element, attributes = {}) {
  for (const property in attributes) {
    element.setAttribute(property, attributes[property]);
  }
}

async function generateTappeCards(tappe, year, componentId) {
  const tappeFilteredOnYear = tappe.filter((elem) => elem.year === year)[0];

  // Get the container element for the cards
  const cardContainer = document.getElementById(componentId);

  // Loop through each location and load card.html, then populate and append it
  // Array to store promises for fetching HTML content, in this way tappe cards are ordered by appearance.
  const fetchPromises = tappeFilteredOnYear.gare.map(async (gara) => {
    // Fetch card.html content
    const response = await fetch("src/components/card.html");
    const html = await response.text();

    // Create a temporary element to parse the HTML string
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html.trim();

    // Populate card with data
    tempElement.querySelector(
      "#card-tappa-image"
    ).innerHTML = `<img src="${gara.imgCopertina}" class="card-img-top" alt="${gara.name} copertina" />`;
    tempElement.querySelector("#card-tappa-information").innerHTML = `
      <h5 class="card-title" style="color: #7f2b2b"><b>${gara.location}</b></h5>
      <h6 class="card-subtitle">${gara.date}</h6>
      <p class="card-text">${gara.description}</p>
    `;

    // Dynamically set external link for the Iscriviti button
    const iscrivitiButton = tempElement.querySelector("#button-iscriviti");

    setElementAttibutes(iscrivitiButton, {
      id: `button-iscriviti-${gara.location.toLowerCase()}`,
      onclick: `window.open('${gara.links.iscrizioni}', '_blank');`,
    });

    // Replace modal buttons to point to the correct programma/percorso/regolamento
    // Get all radio buttons with class 'btn-check' and related labels
    const radioButtons = tempElement.querySelectorAll(".btn-check");
    const labelsForRadioButtons = tempElement.querySelectorAll(
      "label.btn.btn-outline-primary"
    );

    // Dynamically changing data-bs-target for each radio button
    setElementAttibutes(radioButtons[0], {
      "data-bs-target": `#modal-programma-${gara.location.toLowerCase()}`,
      id: `btnradio1-${gara.location.toLowerCase()}`,
    });
    setElementAttibutes(radioButtons[1], {
      "data-bs-target": `#modal-percorso-${gara.location.toLowerCase()}`,
      id: `btnradio2-${gara.location.toLowerCase()}`,
    });
    setElementAttibutes(radioButtons[2], {
      "data-bs-target": `#modal-regolamento-${gara.location.toLowerCase()}`,
      id: `btnradio3-${gara.location.toLowerCase()}`,
    });
    setElementAttibutes(radioButtons[3], {
      "data-bs-target": `#modal-classifica-${gara.location.toLowerCase()}`,
      id: `btnradio4-${gara.location.toLowerCase()}`,
    });
    setElementAttibutes(labelsForRadioButtons[0], {
      for: `btnradio1-${gara.location.toLowerCase()}`,
    });
    setElementAttibutes(labelsForRadioButtons[1], {
      for: `btnradio2-${gara.location.toLowerCase()}`,
    });
    setElementAttibutes(labelsForRadioButtons[2], {
      for: `btnradio3-${gara.location.toLowerCase()}`,
    });
    setElementAttibutes(labelsForRadioButtons[3], {
      for: `btnradio4-${gara.location.toLowerCase()}`,
    });

    // Replace the modal divs with the location
    const modals = tempElement.querySelectorAll('[id^="modal-"]');
    modals.forEach(
      (modal) => (modal.id = `${modal.id}-${gara.location.toLowerCase()}`)
    );

    return tempElement.querySelector("#card-tappe");
  });

  // Wait for all fetch and population operations to complete
  const cards = await Promise.all(fetchPromises);

  // Append all cards to the card container in the correct order
  cards.forEach((card) => cardContainer.appendChild(card));

  // Add event listener to change button group class depending on screen size
  const resizeButtonGroup = () => {
    let buttonGroup = document.querySelectorAll("#btn-group-modals");
    buttonGroup.forEach((button) => {
      if (window.innerWidth < 420) {
        setElementAttibutes(button, {
          class: "btn-group-vertical btn-group-sm",
        });
      } else {
        setElementAttibutes(button, { class: "btn-group btn-group-sm" });
      }
    });
  };

  // Trigger resize on first load
  resizeButtonGroup();

  // Add event listener for window resize
  window.addEventListener("resize", resizeButtonGroup);
}

async function generateModalsForCards(tappe, year, componentName) {
  const tappeFilteredOnYear = tappe.filter((elem) => elem.year === year)[0];

  // Loop through each location and load card.html, then populate and append it
  tappeFilteredOnYear.gare.forEach(async (gara) => {
    // Fetch card.html content
    const response = await fetch(`src/components/${componentName}.html`);
    const html = await response.text();

    // Create a temporary element to parse the HTML string
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html.trim();

    // Replace modal id
    tempElement
      .querySelector(`#${componentName}`)
      .setAttribute(
        "id",
        `modal-${componentName}-${gara.location.toLowerCase()}`
      );

    // Replace modal content
    const modalBody = tempElement.querySelector(".modal-body");
    let modalBodyContent;
    if (componentName === "programma") {
      modalBodyContent = generateProgrammaModalBodyContent(gara);
    }
    if (componentName === "percorso") {
      modalBodyContent = generatePercorsoModalBodyContent(gara);
    }
    if (componentName === "regolamento") {
      modalBodyContent = generateRegolamentoModalBodyContent(gara);
    }
    if (componentName === "classifica") {
      modalBodyContent = generateClassificaModalBodyContent(gara);
    }

    modalBody.innerHTML += modalBodyContent;

    // Replace the existing modal in the document with the new HTML

    const existingModal = document.getElementById(
      `modal-${componentName}-${gara.location.toLowerCase()}`
    );

    existingModal.parentNode.replaceChild(
      tempElement.querySelector(
        `#modal-${componentName}-${gara.location.toLowerCase()}`
      ),
      existingModal
    );
  });
}

// Function to generate modal body content for each tappa
function generateProgrammaModalBodyContent(tappa) {
  const { programma } = tappa;
  return `
      <p><strong>Partenza Baby:</strong> ${programma.partenzaBaby}</p>
      <p><strong>Partenza Non Competitiva:</strong> ${programma.partenzaNonCompetitiva}</p>
      <p><strong>Partenza Competitiva:</strong> <ul><li>Femminile: ${programma.partenzaCompetitiva.f}</li><li>Maschile: ${programma.partenzaCompetitiva.m}</li></ul></p>
      <p><strong>Ritrovo:</strong> ${programma.ritrovo}</p>
      <p><strong>Parcheggi:</strong> ${programma.parcheggi}</p>
      <p><strong>Docce:</strong> ${programma.docce}</p>
      <p><strong>Ristoro:</strong> ${programma.ristoro}</p>
      <p><strong>Altro:</strong> ${programma.altro}</p>
  `;
}

function generatePercorsoModalBodyContent(tappa) {
  const { percorso } = tappa;
  const { baby, nonCompetitiva, competitiva } = percorso;
  const percorsoArray = [baby, nonCompetitiva, competitiva];
  let html = "";

  percorsoArray.map((e, index) => {
    let compLength;
    let compDisl;
    if (index === 2) {
      compLength = `<ul><li>Femminile: ${e.f.km}</li><li>Maschile: ${e.m.km}</li></ul>`;
      compDisl = `<ul><li>Femminile: ${e.f.dislivello}</li><li>Maschile: ${e.m.dislivello}</li></ul>`;
    }
    html += `<h4 class="modal-titles">
    ${index === 0 ? "Baby" : index === 1 ? "Non competitiva" : "Competitiva"}
    </h4>
    <ul>
    <li><strong>Lunghezza:</strong> ${index === 2 ? compLength : e.km}</li>
    ${
      e.dislivello || compDisl
        ? `<li><strong>Dislivello:</strong> ${
            index === 2 ? compDisl : e.dislivello
          }</li>`
        : ""
    }
    ${e.gpx ? `<li><strong>Gpx file:</strong> ${e.gpx}</li>` : ""}
    ${
      e.img
        ? `<li><strong>Immagine percorso:</strong> <img src="${e.img}" class="img-fluid"/></li>`
        : ""
    }
    </ul>
    `;
  });
  return html;
}

function generateRegolamentoModalBodyContent(tappa) {
  return `
      <p><a href="${tappa.regolamento}">Regolamento ${tappa.name}</a></p>
  `;
}

function generateClassificaModalBodyContent(tappa) {
  // TODO: Include baby run?
  // Links are disabled if no classifica has been added
  const { nonCompetitiva, competitiva } = tappa;
  const classificaArray = [nonCompetitiva, competitiva];
  let html = "";
  classificaArray.map((e, index) => {
    html += `<h4 class="modal-titles">
    ${index === 0 ? "Non competitiva" : "Competitiva"}
    </h4>
    <ul>
    <li><strong>Maschile: </strong><a href="${e.m}" style="${
      !e.m ? "pointer-events: none; cursor: default;" : ""
    }">Classifica finale</a></li>
    <li><strong>Femminile: </strong><a href="${e.m}" style="${
      !e.m ? "pointer-events: none; cursor: default;" : ""
    }">Classifica finale</a></li>
    </ul>
    `;
  });
  return html;
}

function generateTappePageContent(tappe, year, componentsIds) {
  // We use then and not async await in order to support old mobile browsers like my Safari on iPhone 6
  generateTappeCards(tappe, year, componentsIds.cardContainerId)
    .then(() => {
      componentsIds.modals.forEach((modal) => {
        generateModalsForCards(tappe, year, modal);
      });
    })
    .catch((error) => {
      console.error("An error occurred during the process:", error);
    });
}

function enablePopovers() {
  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
  );
  const popoverList = [...popoverTriggerList].map(
    (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
  );
}

function convertDates(tappe, year) {
  const tappeFilteredOnYear = tappe.filter((elem) => elem.year === year)[0];
  const dates = tappeFilteredOnYear.gare.map((gara) => {
    let tmpDate = gara.date.split(" ");
    if (tmpDate[1] === "Luglio") {
      tmpDate[1] = "07" - 1;
    } else {
      tmpDate[1] = "08" - 1;
    }
    tmpDate.push(year);
    const newDate = new Date(Date.UTC(tmpDate[2], tmpDate[1], tmpDate[0]));
    const newTimeStamp = newDate.getTime();
    return newTimeStamp;
  });
  return dates;
}

function startTimer(tappe, year, componentName) {
  const tappeFilteredOnYear = tappe.filter((elem) => elem.year === year)[0];
  let start = new Date(parseInt(Date.now()));
  // Delay start date by one day so that we can show we are in the event day
  start.setHours(start.getHours() + 24);
  const convertedDates = convertDates(tappe, year);
  let nextDates = convertedDates.filter((date) => date > start);

  if (nextDates.length > 0) {
    const tappaName =
      tappeFilteredOnYear.gare[
        tappeFilteredOnYear.gare.length - nextDates.length
      ].location;
    const nextDate = nextDates[0];
    const intervalId = setInterval(() => {
      const now = Date.now();
      let difference = nextDate - now;

      if (difference <= 0) {
        clearInterval(intervalId);
        // Optionally handle the case when the countdown ends
        document
          .getElementById(componentName)
          .getElementsByClassName(
            "countdown-content"
          )[0].innerText = `Ci vediamo questa sera a ${tappaName}!`;
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      difference -= days * 1000 * 60 * 60 * 24;

      const hours = Math.floor(difference / (1000 * 60 * 60));
      difference -= hours * 1000 * 60 * 60;

      const minutes = Math.floor(difference / (1000 * 60));
      difference -= minutes * 1000 * 60;

      const seconds = Math.floor(difference / 1000);

      const countdownString = `${days}d ${hours}h ${minutes}m ${seconds}s`;

      // Update the UI component with the countdown string
      document
        .getElementById(componentName)
        .getElementsByClassName("countdown-content")[0].innerText =
        countdownString;
    }, 1000);
  } else {
    // Optionally handle the case when there are no upcoming dates
    document
      .getElementById(componentName)
      .getElementsByClassName("countdown-content")[0].innerText =
      "Ci vediamo l'anno prossimo! Grazie a tutti...";
  }
}

// Function to show/hide text in the first page, specifically designed for mobile website
function showMoreText() {
  const textElement = document.querySelectorAll("#lead-text .card-body")[0];
  const button = document.getElementById("show-more-btn");
  if (window.innerWidth < 1200) {
    if (textElement.style["max-height"]) {
      textElement.style.maxHeight = null;
      button.innerHTML = `
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
              />
            </svg>
      `;
    } else {
      textElement.style.maxHeight = textElement.scrollHeight + "px";
      button.innerHTML = `
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-chevron-up"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
              />
            </svg>
      `;
    }
  }
}

// Function to count news inside news accordion in index page and update badge
function countNews() {
  const news = document.getElementById("news");
  const newsAccordion = news.querySelector("#news-accordion-flush");
  const newsArray = newsAccordion.getElementsByClassName("accordion-item");
  const nNews = newsArray.length;
  const badge = news.querySelector("#news-count");
  badge.textContent = nNews;
}
