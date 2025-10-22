const form = document.getElementById("forms-container");
const formWrapper = document.getElementById("forms-wrapper");
formWrapper.style.display = "none";
const jsonUploadField = document.getElementById("json-upload-field");
const resetButton = document.getElementById("button--reset");
const mainContainer = document.getElementById("file-upload");



document.getElementById("json-file").addEventListener ("change" ,(event) => {
    const file = event.target.files[0]
    if (file.name.endsWith(".json") || file.name.endsWith(".js") || file.name.endsWith(".JSON")){
        const reader = new FileReader();
        reader.onload = function(e) {
            data = JSON.parse(e.target.result);
            jsonUploadField.style.display = "none";
            resetButton.style.display = "block";
            mainContainer.style.backgroundImage = "none";
            formWrapper.style.display = "block";

            if(data.fields){
                data.fields.forEach(element => {
                    const label = document.createElement("label");
                    label.classList.add('file-upload__form--label');
                    let input;

                    if (element.label) {
                        label.textContent = element.label;
                    }

                    if (Object.values(element.input).some(value => Array.isArray(value))){
                        if (Array.isArray(element.input.filetype)) {
                            input = document.createElement("input");
                            input.type = "file";
                            input.multiple = element.input.multiple === true;

                            const accept = element.input.filetype
                                .map(item => item.startsWith('.') ? item : '.' + item)
                                .join(',');
                            input.accept = accept;

                            input.classList.add('file-upload__form--input');
                        } else {
                        input = document.createElement("select");
                        input.classList.add('file-upload__form--select')
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
                                option.classList.add('file-upload__form--option')
                                option.value = item;
                                option.textContent = item;
                                option.style.backgroundColor = item;
                                input.appendChild(option);
                            });
                        }
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
                    input.classList.add('file-upload__form--input')
                    label.appendChild(input);
                    form.appendChild(label);
                });
            }

            if(data.references){
                const label = document.createElement("label");
                label.classList.add('file-upload__label--references');
                data.references.forEach(element => {
                    if(element.input){
                        let input = document.createElement("input");
                        input.type = element.input.type; 
                        if (element.input.required === true) {
                            input.required = true;
                        }
                        if (element.input.checked === "true") {
                            input.checked = true;
                        }
                        label.appendChild(input);
                    } else if (element["text without ref"] || element.text || element.ref){
                        let refText = document.createElement("p");
                        if (element["text without ref"]){
                            refText.appendChild(document.createTextNode(element["text without ref"] + " "));
                        }
                        let link = document.createElement("a");
                        link.appendChild(document.createTextNode(element.text));
                        link.href = "#" + element.ref; 
                        refText.appendChild(link);
                        label.appendChild(refText);
                    }
                    form.appendChild(label);
                })
            }

            if(data.buttons){
                data.buttons.forEach(element => {
                    if(element.text){
                        let button = document.createElement("button");
                        button.classList.add('file-upload__form--button')
                        button.textContent = element.text;
                        button.type = "submit"
                        form.appendChild(button);
                    }
                })
            }
            
        }
        reader.readAsText(file);
    } else {
        event.target.value = ""
        alert("Фаил не фаил .JSON")
    }
})

if (resetButton && form) {
    resetButton.addEventListener("click", function() {
        form.classList.add("forms-crumpling");
        setTimeout(() => {
            jsonUploadField.style.display = "block";
            resetButton.style.display = "none";
            mainContainer.style.backgroundImage = "url(../img/button-background.png)";
            formWrapper.style.display = "none";
            form.innerHTML = "";
            form.classList.remove("forms-crumpling");
        }, 700);
    });
}
