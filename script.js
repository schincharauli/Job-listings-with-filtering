import data from "./data.json" assert{type: "json"};

const jobCard = document.querySelector('.card-section');



const elementCreator = (tag, className, src, text, event, eventFc) => {
    const element = document.createElement(tag);
    element.classList.add(className);


    if(src){
        element.src = src;
    }

    if(text){
        element.textContent = text;
    }

    if(event){
        element[event] = () =>{
            eventFc();
        }
    }
    return element;
    
}

for(let i = 0; i < data.length; i++) {

    const {company, logo, statusNew, featured, position,role, level, postedAt,contract,location,languages, tools} = data[i];

    const vacancyCard = elementCreator('div', 'job-card');

    const companyName = elementCreator('div', 'company-name');
    const companyTitle = elementCreator('h2', 'company-title', null, company);

    // const newlyAded = elementCreator('h2', 'new', null, statusNew);


    
    const logoElement = elementCreator('img', 'image', logo);

 


    companyName.append( companyTitle);
    vacancyCard.append(companyName);
    jobCard.append(vacancyCard);
    jobCard.append(logoElement);


}