 function toggle_element_appear(elementTable,className) {

    if (!elementTable  && className) {
        elementTable = document.getElementsByClassName(className)
    }
    
    
      
    for (let i=0; i < elementTable.length; i++){
        let element = elementTable[i]
  
        if (element) {
            if (element) {
                let currentDisplayValue =  window.getComputedStyle(element).getPropertyValue('display');
        
                if (currentDisplayValue != 'none') {
                    element.style.display = 'None';
                } else
                {
                    element.style.display = 'Block';
                }
               
            } else {
                console.error('NEED AN ELEMENT TO TOGGLE')
            }
        }
    }

   
}

function toggle_element_visibility(elementTable,className) {

    if (!elementTable  && className) {
        elementTable = document.getElementsByClassName(className)
    }
    
    
      
    for (let i=0; i < elementTable.length; i++){
        let element = elementTable[i]
  
        if (element) {
            if (element) {
                let currentDisplayValue =  window.getComputedStyle(element).getPropertyValue('visibility');
        
                if (currentDisplayValue != 'hidden') {
                    element.style.visibility = 'Hidden';
                } else
                {
                    element.style.visibility = 'Visible';
                }
               
            } else {
                console.error('NEED AN ELEMENT TO TOGGLE')
            }
        }
    }

   
}


function set_element_property(elementTable,className,propertyName,propertyValue) {
    if (!elementTable  && className) {
        elementTable = document.getElementsByClassName(className)
    }
    
    
      
    for (let i=0; i < elementTable.length; i++){
        let element = elementTable[i]
  
        if (element) {
            if (element) {
                let currentDisplayValue =  window.getComputedStyle(element).getPropertyValue(propertyName);
        
               console.log(currentDisplayValue)
                element.style[{propertyName}] = propertyValue;
              
               
            } else {
                console.error('NEED AN ELEMENT TO TOGGLE')
            }
        }
    }

}

export  {toggle_element_visibility,toggle_element_appear,set_element_property}









