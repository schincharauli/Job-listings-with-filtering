import data from "./data.json" assert { type: "json" };

const jobCard = document.querySelector(".card-section");
const filterCard = document.querySelector(".filter-card");
const choosenSection = document.querySelector(".chosen-section");

const elementCreator = (tag, className, src, text, event, eventFc) => {
  const element = document.createElement(tag);
  element.classList.add(className);
  
  if (src) {
    element.src = src;
  }
  
  if (text) {
    element.textContent = text;
  }
  
  if (event) {
    element[event] = () => {
      eventFc();
    };
  }
  return element;
};



let myArray = [];



for (let i = 0; i < data.length; i++) {
  const {
    company,
    logo,
    statusNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools
  } = data[i];

  const vacancyCard = elementCreator("div", "job-card");

  const innerCardOne = elementCreator("div", "inner-card-one", null);
  const innerCardTwo = elementCreator("div", "inner-card-two", null);

  const imgContainer = elementCreator("div", "image-container");
  const logoElement = elementCreator("img", "image", logo);

  const companyName = elementCreator("div", "company-name");
  const companyTitle = elementCreator("h2", "company-title", null, company);

  const positionDiv = elementCreator("div", "position-div", null);
  const positionTitle = elementCreator("p", "position-name", null, position);

  const timeNlocation = elementCreator("div", "time-and-location");
  const postedTime = elementCreator("p", "posted-time", null, postedAt);
  const contractType = elementCreator("li", "contract-type", null, contract);
  const jobLocation = elementCreator("li", "job-location", null, location);

  const horizonalLine = elementCreator("div", "horizonal-line", null);

  const additionalFeatures = elementCreator("div", "additional-features", null);
  const roleRangeings = elementCreator("p", "role-rangeings", null, role);
  const positionLevel = elementCreator("p", "position-level", null, level);

  const proggramingLanguages = elementCreator(
    "div",
    "proggraming-languages",
    null
  );

  for (let j = 0; j < data[i].languages.length; j++) {
    let programmingLangEl = elementCreator(
      "p",
      "programming-lang-el",
      null,
      languages
    );
    proggramingLanguages.append(programmingLangEl);

    programmingLangEl.textContent = data[i].languages[j];
  }

  for (let j = 0; j < data[i].tools.length; j++) {
    let additionalTools = elementCreator("p", "additional-tools", null, tools);
    proggramingLanguages.append(additionalTools);

    additionalTools.textContent = data[i].tools[j];
  }

  const newlyAded = elementCreator("p", "new", null, statusNew);
  newlyAded.textContent = "NEW!";

  const feature = elementCreator("p", "featured", null, featured);
  feature.textContent = "FEATURED";

  vacancyCard.append(imgContainer, innerCardOne, innerCardTwo);
  innerCardOne.append(
    companyName,
    positionDiv,
    timeNlocation,
    horizonalLine,
    additionalFeatures
  );

  positionDiv.append(positionTitle);
  companyName.append(companyTitle);
  jobCard.append(vacancyCard);

  timeNlocation.append(postedTime, contractType, jobLocation);
  imgContainer.append(logoElement);

  innerCardTwo.append(additionalFeatures);
  additionalFeatures.append(roleRangeings, positionLevel, proggramingLanguages);

  if (statusNew) {
    companyName.append(newlyAded);
  }

  if (featured) {
    companyName.append(feature);
  }


}





let vacanyRole = document.querySelectorAll('.role-rangeings');

let position = document.querySelectorAll('.position-level');


vacanyRole.forEach(function(e) {
  e.addEventListener('click', function() {
  
    
    if(!myArray.includes(e.textContent) ){
      myArray.push(e.textContent);
    }


  
    position.forEach(function(val) {
      val.addEventListener('click', function() {

        console.log(position);

        if(!myArray.includes(val.textContent) ){
          myArray.push(val.textContent);  
          console.log(myArray) 
      }
    })
    

    

    choosenSection.innerHTML = "";

    for(let i = 0; i < myArray.length; i++){


      
      const filterRole = elementCreator('div', 'role', null);
    

      const filterChoosenRole = elementCreator('div', 'choosen-role', null);
      const filterRoleName = elementCreator('span', 'role-name', null);
      filterRoleName.textContent = myArray[i];
      const filterSpan = elementCreator('span', 'filter-span');
      const removeIcon = elementCreator('img', 'icon-remove', "./images/icon-remove.svg");

      

      const clearBtn = elementCreator('div', 'clear-btn', null);
      const button = elementCreator('button', 'button', null);
      choosenSection.append(filterRole);
      clearBtn.append(button);
      filterRole.append(filterChoosenRole,clearBtn);
      filterChoosenRole.append(filterRoleName,filterSpan);
      filterSpan.append(removeIcon);

    }
    
    return myArray
  
  });
  
})

})
