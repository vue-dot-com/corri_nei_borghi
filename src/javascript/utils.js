/**
 * Adjusts the width of the header logo dynamically based on the scroll position of the window.
 * The function only runs if the window width is greater than 1200 pixels.
 *
 * - When the scroll position is greater than 20 pixels, the logo width is set to 35%.
 * - When the scroll position is less than or equal to 20 pixels, the logo width is set to 60%.
 *
 * The function adds a scroll event listener to the window to handle the resizing logic.
 */
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

/**
 * Sets the active page in the navigation bar by adding the 'active' class to the corresponding link.
 * Removes the 'active' class from all other links.
 * @param {string} page - The ID of the page to set as active.
 */
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

/**
 * Fetches and inserts the appropriate navbar HTML content based on the window width.
 * Dynamically adjusts the navbar on window resize and initializes other related functions.
 * @param {string} page - The current page to set as active in the navbar.
 */
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

/**
 * Fetches and inserts a specific HTML component into the DOM.
 * @param {string} componentFilePath - The file path of the component to fetch.
 * @param {string} componentId - The ID of the DOM element to insert the component into.
 */
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

/**
 * Generates the HTML content for the "classifiche" section based on the provided data.
 * Inserts the generated content into the specified DOM elements.
 * @param {Array} tappe - Array of race data.
 * @param {number} year - The year to filter the races.
 * @param {Object} componentsIds - Object containing the IDs of the DOM elements to update.
 */
function generateClassificheHTML(tappe, year, componentsIds) {
  const tappeFilteredOnYear = tappe.filter((elem) => elem.year == year)[0];
  const { yearId, tableId, trophyId } = componentsIds;
  // Function to generate HTML for the classifiche data
  let html_table = "";
  let html_trophy = "";

  // Create table for each year
  html_table += "<table class='classifiche-table'>";
  html_table +=
    "<thead><tr><th colspan='3' class='location-header'>Location</th><th colspan='2' class='non-competitiva-header'>Non Competitiva</th><th colspan='2' class='competitiva-header'>Competitiva</th></tr></thead>";
  html_table += "<tbody>";

  // Iterate over each location and generate table rows
  tappeFilteredOnYear.gare.forEach((gara) => {
    html_table += "<tr>";
    html_table += `<td colspan='3' class='location-cell'><b>${gara.location}</b></td>`;
    html_table += `<td class='non-competitiva-f-cell'><a href="${
      gara.nonCompetitiva.f || gara.links.classifiche
    }" target="_blank">Non Comp. Femminile</a></td>`;
    html_table += `<td class='non-competitiva-m-cell'><a href="${
      gara.nonCompetitiva.m || gara.links.classifiche
    }" target="_blank">Non Comp. Maschile</a></td>`;
    html_table += `<td class='competitiva-f-cell'><a href="${
      gara.competitiva.f || gara.links.classifiche
    }" target="_blank">Comp. Femminile</a></td>`;
    html_table += `<td class='competitiva-m-cell'><a href="${
      gara.competitiva.m || gara.links.classifiche
    }" target="_blank">Comp. Maschile</a></td>`;
    html_table += "</tr>";
  });

  html_table += "</tbody>";
  html_table += "</table>";

  // Add trofeo information
  html_trophy += `<p><a href="${
    tappeFilteredOnYear.trofeo.individuale ||
    tappeFilteredOnYear.trofeo.links.classifiche
  }" target="_blank">Trofeo Individuale</a> (Competitiva e Non Competitiva)</p>`;
  html_trophy += `<p><a href="${
    tappeFilteredOnYear.trofeo.squadre ||
    tappeFilteredOnYear.trofeo.links.classifiche
  }" target="_blank">Trofeo Squadre</a></p>`;

  // Insert HTML content into the DOM
  document.getElementById(yearId).innerHTML = `<h2>${year}</h2>`;
  document.getElementById(tableId).innerHTML = html_table;
  document.getElementById(trophyId).innerHTML = html_trophy;
}

/**
 * Validates a form and sends an email if the form is valid.
 * Applies Bootstrap validation styles to the form.
 * @param {string} formClass - The class of the form to validate.
 */
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

/**
 * Sends an email using the form data by constructing a mailto link.
 */
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

/**
 * Dynamically sets attributes for a given DOM element.
 * @param {HTMLElement} element - The DOM element to update.
 * @param {Object} attributes - An object containing attribute key-value pairs.
 */
function setElementAttibutes(element, attributes = {}) {
  for (const property in attributes) {
    element.setAttribute(property, attributes[property]);
  }
}

/**
 * Generates cards for the "tappe" section based on the provided data.
 * Dynamically populates and appends the cards to the specified container.
 * @param {Array} tappe - Array of race data.
 * @param {number} year - The year to filter the races.
 * @param {string} componentId - The ID of the container element for the cards.
 */
async function generateTappeCards(tappe, year, componentId) {
  const tappeFilteredOnYear = tappe.filter((elem) => elem.year == year)[0];

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

    // Dynamically set external link for the Iscriviti button otherwise set button to disabled
    const iscrivitiButton = tempElement.querySelector("#button-iscriviti");

    if (gara.links.iscrizioni === "") {
      setElementAttibutes(iscrivitiButton, {
        class: "btn btn-primary disabled",
        disabled: true,
      });
    } else {
      setElementAttibutes(iscrivitiButton, {
        id: `button-iscriviti-${gara.location.toLowerCase()}`,
        onclick: `window.open('${gara.links.iscrizioni}', '_blank');`,
      });
    }
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

/**
 * Generates modals for the "tappe" cards based on the provided data.
 * Dynamically populates and replaces the modals in the DOM.
 * @param {Array} tappe - Array of race data.
 * @param {number} year - The year to filter the races.
 * @param {string} componentName - The name of the modal component to generate.
 */
async function generateModalsForCards(tappe, year, componentName) {
  const tappeFilteredOnYear = tappe.filter((elem) => elem.year == year)[0];

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

/**
 * Generates the modal body content for the "programma" section of a race.
 * @param {Object} tappa - The race data for a specific location.
 * @returns {string} - The HTML content for the modal body.
 */
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

/**
 * Generates the modal body content for the "percorso" section of a race.
 * @param {Object} tappa - The race data for a specific location.
 * @returns {string} - The HTML content for the modal body.
 */
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

/**
 * Generates the modal body content for the "regolamento" section of a race.
 * @param {Object} tappa - The race data for a specific location.
 * @returns {string} - The HTML content for the modal body.
 */
function generateRegolamentoModalBodyContent(tappa) {
  return `
      <p><a href="${tappa.regolamento}">Regolamento ${tappa.name}</a></p>
  `;
}

/**
 * Generates the modal body content for the "classifica" section of a race.
 * @param {Object} tappa - The race data for a specific location.
 * @returns {string} - The HTML content for the modal body.
 */
function generateClassificaModalBodyContent(tappa) {
  // TODO: Include baby run?
  // Links are disabled if no Endu link is found
  const { nonCompetitiva, competitiva, links } = tappa;
  const classificaArray = [nonCompetitiva, competitiva];
  let html = "";
  classificaArray.map((e, index) => {
    html += `<h4 class="modal-titles">
    ${index === 0 ? "Non competitiva" : "Competitiva"}
    </h4>
    <ul>
    <li><strong>Maschile: </strong><a href="${
      e.m ? e.m : links.classifiche
    }" target="_blank" style="${
      !links.classifiche ? "pointer-events: none; cursor: default;" : ""
    }">Classifica finale</a></li>
    <li><strong>Femminile: </strong><a href="${
      e.f ? e.f : links.classifiche
    }" target="_blank" style="${
      !links.classifiche ? "pointer-events: none; cursor: default;" : ""
    }">Classifica finale</a></li>
    </ul>
    `;
  });
  return html;
}

/**
 * Generates the content for the "tappe" page, including cards and modals.
 * @param {Array} tappe - Array of race data.
 * @param {number} year - The year to filter the races.
 * @param {Object} componentsIds - Object containing the IDs of the DOM elements to update.
 */
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

/**
 * Enables Bootstrap popovers for elements with the appropriate data attributes.
 */
function enablePopovers() {
  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
  );
  const popoverList = [...popoverTriggerList].map(
    (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
  );
}

/**
 * Converts race dates into timestamps for easier comparison and manipulation.
 * @param {Array} tappe - Array of race data.
 * @param {number} year - The year to filter the races.
 * @returns {Array} - Array of timestamps for the race dates.
 */
function convertDates(tappe, year) {
  const tappeFilteredOnYear = tappe.filter((elem) => elem.year == year)[0];
  const dates = tappeFilteredOnYear.gare.map((gara) => {
    let tmpDate = gara.date.split(" ");
    if (tmpDate[1] === "Luglio") {
      tmpDate[1] = parseInt("07", 10) - 1;
    } else {
      tmpDate[1] = parseInt("08", 10) - 1;
    }
    tmpDate.push(year);
    const newDate = new Date(
      Date.UTC(tmpDate[2], tmpDate[1], tmpDate[0], 0, 0, 0)
    );
    const newTimeStamp = newDate.getTime();
    return newTimeStamp;
  });
  return dates;
}

/**
 * Starts a countdown timer for the next race and updates the UI component with the remaining time.
 * @param {Array} tappe - Array of race data.
 * @param {number} year - The year to filter the races.
 * @param {string} componentName - The ID of the UI component to update.
 */
function startTimer(tappe, year, componentName) {
  const tappeFilteredOnYear = tappe.filter((elem) => elem.year == year)[0];
  // Set start date
  const start = new Date();
  start.setUTCHours(0, 0, 0, 0);
  const convertedDates = convertDates(tappe, year);
  let nextDates = convertedDates.filter((date) => date >= start.getTime());

  if (nextDates.length > 0) {
    const tappaName =
      tappeFilteredOnYear.gare[
        tappeFilteredOnYear.gare.length - nextDates.length
      ].location;
    const nextDate = nextDates[0];
    const intervalId = setInterval(() => {
      const now = new Date();
      let difference = nextDate - now.getTime();

      const targetDate = new Date(nextDate);
      const endOfDay = new Date(
        targetDate.getUTCFullYear(),
        targetDate.getUTCMonth(),
        targetDate.getUTCDate(),
        23,
        59,
        59
      );

      if (start >= targetDate && now <= endOfDay) {
        document
          .getElementById(componentName)
          .getElementsByClassName(
            "countdown-content"
          )[0].innerText = `Ci vediamo questa sera a ${tappaName}!`;
        clearInterval(intervalId); // Clear the interval once the target date is reached
        return;
      }

      if (difference <= 0) {
        difference = 0; // Ensure difference doesn't go negative
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
      "🏃‍♀️🏃‍♂️Stiamo lavorando per la prossima edizione...stay tuned!";
  }
}

/**
 * Toggles the visibility of text on the first page for mobile devices.
 */
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

/**
 * Counts the number of news items in the news accordion and updates the badge with the count.
 */
async function countNews() {
  const news = document.getElementById("news");
  const newsAccordion = news.querySelector("#news-accordion-flush");
  const newsArray = newsAccordion.getElementsByClassName("accordion-item");
  const nNews = newsArray.length;
  const badge = news.querySelector("#news-count");
  badge.textContent = nNews;
}

/**
 * Generates cards for the media page based on the provided data.
 * Dynamically populates and appends the cards to the specified container.
 * @param {Array} tappe - Array of race data.
 * @param {number} year - The year to filter the races.
 * @param {string} componentId - The ID of the container element for the cards.
 */
async function generateMediaCards(tappe, year, componentId) {
  const tappeFilteredOnYear = tappe.filter((elem) => elem.year == year)[0];

  // Get the container element for the cards
  const cardContainer = document.getElementById(componentId);

  // Loop through each location and load card.html, then populate and append it
  // Array to store promises for fetching HTML content, in this way tappe cards are ordered by appearance.
  const fetchPromises = tappeFilteredOnYear.gare.map(async (gara) => {
    if (gara.foto.category[0].link == "") {
      return null;
    }
    // Fetch card.html content
    const response = await fetch("src/components/card_media.html");
    const html = await response.text();

    // Create a temporary element to parse the HTML string
    tempElement = document.createElement("div");
    tempElement.innerHTML = html.trim();

    // Populate card with data
    tempElement.querySelector(
      ".card-tappa-image"
    ).innerHTML = `<img src="${gara.foto.copertina}" class="card-img-top" alt="${gara.name} copertina" />`;
    tempElement.querySelector(".card-title").innerHTML = `${gara.location}`;
    tempElement.querySelector(".card-media-description").innerHTML = `${
      gara.foto.description || "&nbsp;"
    }`;

    // Dynamically set external link for the Foto button or dropdown menu
    if (gara.foto.category.length === 1) {
      let fotoObj = gara.foto.category[0];
      if (fotoObj.link !== "") {
        // Create an anchor element
        let fotoLink = document.createElement("a");
        fotoLink.href = fotoObj.link;
        fotoLink.target = "_blank";
        fotoLink.classList.add("btn", "btn-primary");
        fotoLink.textContent = "Foto";

        // Append it to the desired location
        tempElement.querySelector("#card-media").appendChild(fotoLink);
      }
    } else {
      // Create a button group for multiple categories
      let btnGroup = document.createElement("div");
      btnGroup.classList.add("btn-group");
      btnGroup.setAttribute("role", "group");

      let dropdownBtn = document.createElement("button");
      dropdownBtn.type = "button";
      dropdownBtn.classList.add("btn", "btn-primary", "dropdown-toggle");
      btnGroup.setAttribute("role", "group");
      dropdownBtn.setAttribute("data-bs-toggle", "dropdown");
      dropdownBtn.setAttribute("aria-expanded", "false");
      dropdownBtn.textContent = "Foto";

      let dropdownMenu = document.createElement("ul");
      dropdownMenu.classList.add("dropdown-menu");

      // Loop through categories to create list items
      gara.foto.category.forEach((fotoItem) => {
        let listItem = document.createElement("li");
        let linkItem = document.createElement("a");
        linkItem.classList.add("dropdown-item");
        linkItem.target = "_blank";
        linkItem.href = fotoItem.link;
        linkItem.textContent = fotoItem.name;

        listItem.appendChild(linkItem);
        dropdownMenu.appendChild(listItem);
      });

      btnGroup.appendChild(dropdownBtn);
      btnGroup.appendChild(dropdownMenu);

      // Append the button group to the desired location
      tempElement.querySelector("#card-media").appendChild(btnGroup);
    }

    return tempElement.querySelector("#card-media");
  });

  // Wait for all fetch and population operations to complete
  const cards = await Promise.all(fetchPromises);

  if (cards.length === 0 || cards.every((card) => card === null)) {
    cardContainer.innerHTML = `
    <div
          class="progress mt-5"
          role="progressbar"
          aria-label="Animated striped example"
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            class="progress-bar progress-bar-striped progress-bar-animated"
            style="width: 100%"
          >
            <span style="color: white"
              >Siamo quasi pronti...le foto le caricheremo qui!</span
            >
          </div>
        </div>
    `;
  } else {
    cardContainer.innerHTML = "";
    // Append all cards to the card container in the correct order
    cards.forEach((card) => {
      if (card) {
        cardContainer.appendChild(card);
      }
    });
  }
}

/**
 * Generates accordion items for the news section based on the provided data.
 * Dynamically populates and appends the items to the specified container.
 * @param {Array} news - Array of news data.
 * @param {string} componentId - The ID of the container element for the accordion items.
 */
async function generateNewsAccordionItems(news, componentId) {
  // Get the container element for the cards
  const newsAccordion = document.getElementById(componentId);
  const newsAccordionFlush = newsAccordion.querySelector(
    "#news-accordion-flush"
  );

  // Loop through each news and create an accordion item, then populate and append it
  // Array to store promises for fetching HTML content, in this way news items are ordered by appearance.
  const fetchPromises = news.map(async (item, index) => {
    // Fetch card.html content
    const response = await fetch("src/components/accordion_news_item.html");
    const html = await response.text();

    // Create a temporary element to parse the HTML string
    tempElement = document.createElement("div");
    tempElement.innerHTML = html.trim();

    // Populate card with data

    // Add title and data-bs-target / aria-controls attributes
    button = tempElement.querySelector("button.accordion-button");
    button.innerHTML = `${item.title}`;
    button.setAttribute("data-bs-target", `#flush-collapse-${index}`);
    button.setAttribute("aria-controls", `flush-collapse-${index}`);

    // Set container div id attribute
    collapse = tempElement.querySelector("div.accordion-collapse.collapse");
    collapse.setAttribute("id", `flush-collapse-${index}`);
    // Add body
    const body = document.createElement("div");
    body.innerHTML = item.body;
    tempElement.querySelector(".accordion-body").appendChild(body);

    // Add image
    if (item.image) {
      tempElement.querySelector(
        ".accordion-news-image"
      ).innerHTML = `<img src=${item.image} class="img-thumbnail" />`;
    } else {
      tempElement.querySelector(".accordion-news-image").remove();
    }

    return tempElement.querySelector(".accordion-item");
  });

  // Wait for all fetch and population operations to complete
  const accordionItems = await Promise.all(fetchPromises);

  if (
    accordionItems.length === 0 ||
    accordionItems.every((card) => card === null)
  ) {
    newsAccordionFlush.innerHTML = "";
  } else {
    // Append all accordion items to the news accordion in the correct order
    accordionItems.forEach((item) => {
      if (item) {
        newsAccordionFlush.appendChild(item);
      }
    });
  }
}

/**
 * Generates navigation tabs for years based on the provided data and appends them to a specified component.
 *
 * This function fetches an HTML template for each year, populates it with the year data, and appends the resulting
 * tabs to the navigation container. It also highlights the current year tab as active.
 *
 * @async
 * @function generateYearsNavTabs
 * @param {Array<Object>} tappe - An array of objects representing the data for each year. Each object must have a `year` property.
 * @param {number} curYear - The current year to be highlighted as active in the navigation tabs.
 * @param {string} componentId - The ID of the DOM element where the navigation tabs will be appended.
 * @returns {Promise<void>} A promise that resolves when the navigation tabs have been generated and appended.
 *
 * @throws {Error} Throws an error if the HTML template cannot be fetched or if there is an issue with DOM manipulation.
 */
async function generateYearsNavTabs(tappe, curYear, componentId) {
  const years = tappe.map((tappa) => tappa.year);
  years.sort((a, b) => b - a);
  const navTab = document.getElementById(componentId);

  const fetchPromises = years.map(async (year) => {
    // Fetch year_tab_button.html content
    const response = await fetch("src/components/year_tab_button.html");
    const html = await response.text();

    // Create a temporary element to parse the HTML string
    tempElement = document.createElement("div");
    tempElement.innerHTML = html.trim();

    // Populate button with data

    // Add title and attributes
    button = tempElement.querySelector("button.nav-link");
    button.innerText = year;
    button.setAttribute("id", `nav-home-tab-${year}`);
    if (year == curYear) {
      button.classList.add("active");
    }

    return tempElement.querySelector(".nav-link");
  });

  // Wait for all fetch and population operations to complete
  const buttonTabs = await Promise.all(fetchPromises);

  if (
    buttonTabs.length === 0 ||
    buttonTabs.every((button) => button === null)
  ) {
    navTab.innerHTML = "";
  } else {
    // Merge existing tabs with new tabs
    navTab.childNodes?.forEach((child) => {
      buttonTabs.push(child);
    });
    // Append all year tabs to the nav tabs div in the correct order
    buttonTabs.forEach((tab) => {
      if (tab) {
        navTab.appendChild(tab);
      }
    });
  }
}
