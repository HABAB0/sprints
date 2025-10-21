document.getElementById("json-file").addEventListener ("change" ,(event) => {
    const file = event.target.files[0]
    const form = document.getElementById("forms-container");

    const reader = new FileReader();
    reader.onload = function(e) {
        data = JSON.parse(e.target.result);
        console.log(data)

        if(data.fields){
            data.fields.forEach(element => {
                const label = document.createElement("label");
                label.classList.add('file-upload__label');
                let input;

                if (element.label) {
                    label.textContent = element.label;
                }

                if (Object.values(element.input).some(value => Array.isArray(value))){
                    input = document.createElement("select");
                    if (element.input.multiple === true) {
                        input.multiple = true;
                    }
                    let values = [];
                        for (const key in element.input) {
                            if (Array.isArray(element.input[key])) {
                                values = element.input[key];
                                break;
                            }
                        }
                        values.forEach(item => {
                            const option = document.createElement("option");
                            option.classList.add('file-upload__option')
                            option.value = item;
                            option.textContent = item;
                            input.appendChild(option);
                        });
                }else {
                    input = document.createElement("input");
                    input.type = element.input.type; 
                }

                if (element.input.required === true) {
                    input.required = true;
                }
                if (element.input.mask) {
                    input.placeholder = element.input.mask;
                }
                if (element.input.placeholder) {
                    input.placeholder = element.input.placeholder;
                }
                if (element.input.filetype) {
                    input.filetype = element.input.filetype
                        .map(item => item.startsWith('.') ? item : '.' + item)
                        .join(',');
                }
                input.classList.add('file-upload__input')
                label.appendChild(input);
                form.appendChild(label);
            });
        }

        if(data.references){
            data.references.forEach(element => {
                if(element.input){
                    let input = document.createElement("input");
                    input.type = element.input.type; 
                    if (element.input.required === true) {
                        input.required = true;
                    }
                    form.appendChild(input)
                } else if (element["text without ref"] || element.text || element.ref){
                    let refText = document.createElement("p");
                    refText.appendChild(document.createTextNode(element["text without ref"] + " "));
                    let link = document.createElement("a");
                    link.appendChild(document.createTextNode(element.text));
                    link.href = "#" + element.ref; 
                    refText.appendChild(link);
                    form.appendChild(refText);
                }
            })
        }

        if(data.buttons){
            data.buttons.forEach(element => {
                if(element.text){
                    let button = document.createElement("button");
                    button.textContent = element.text;
                    form.appendChild(button);
                }
            })
        }
        
    }
    reader.readAsText(file);
})
