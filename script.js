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

    const {company, logo, statusNew, featured, position, role, level, postedAt,contract,location,languages, tools} = data[i];

    const vacancyCard = elementCreator('div', 'job-card');

    const innerCardOne = elementCreator('div', 'inner-card-one', null);
    const innerCardTwo = elementCreator('div', 'inner-card-two', null);


    const imgContainer = elementCreator('div', 'image-container');
    const logoElement = elementCreator('img', 'image', logo);

    const companyName = elementCreator('div', 'company-name');
    const companyTitle = elementCreator('h2', 'company-title', null, company);


    const positionDiv = elementCreator('div', 'position-div', null);
    const positionTitle = elementCreator('p', 'position-name', null, position);
    
    const timeNlocation = elementCreator('div','time-and-location' )
    const postedTime = elementCreator('p', 'posted-time', null, postedAt)
    const contractType = elementCreator('li', 'contract-type', null, contract)
    const jobLocation = elementCreator('li', 'job-location', null, location);
     

    const horizonalLine = elementCreator('div', 'horizonal-line', null);


    const additionalFeatures = elementCreator('div', 'additional-features', null);
    const roleRangeings = elementCreator('p', 'role-rangeings', null, role );
    const positionLevel = elementCreator('p', 'position-level', null, level)
    const proggramingLanguages = elementCreator('p', 'proggraming-languages',null, languages);
    const additionalTools = elementCreator('p', 'additional-tools', null, tools);

    console.log(typeof proggramingLanguages);

    // const newlyAded = elementCreator('h2', 'new', null, statusNew);
    // const feature = elementCreator('h2', 'featured', null, featured);
    
    // write above two elements as append child elements
    
    
    // function myFun(){
    //     for(let i = 0; i < proggramingLanguages.length; proggramingLanguages++){
    //         let output = proggramingLanguages[i] + ',';
    //         console.log(output);
    //         document.querySelector('.proggraming-languages').innerHTML += output;
    //         console.log(output);
    //     }
    // }

    // myFun();
   
    // let pro = proggramingLanguages;
    // const myArray = proggramingLanguages.split(",");
``

    
    // let text = "How are you doing today?";
    // const myArray = text.split("");
    
    // document.querySelector(".proggraming-languages").innerHTML = myArray;


    
    vacancyCard.append(imgContainer, innerCardOne, innerCardTwo );
    innerCardOne.append(companyName, positionDiv,timeNlocation, horizonalLine,additionalFeatures);
    

    positionDiv.append(positionTitle)
    companyName.append(companyTitle);
    jobCard.append(vacancyCard);

    timeNlocation.append(postedTime, contractType, jobLocation);
    imgContainer.append(logoElement);

    innerCardTwo.append(additionalFeatures);
    additionalFeatures.append(roleRangeings,positionLevel,proggramingLanguages,additionalTools);

}