document.getElementById("json-file").addEventListener ("change" ,(event) => {
    const file = event.target.files[0]
    console.log(file)

    const reader = new FileReader();
    reader.onload = function(e) {
        data = JSON.parse(e.target.result);
        console.log(data)

        if(data.fields){
            data.fields.forEach(element => {
                const label = document.createElement("label");
                let input;
                if (Object.values(element.input).some(value => Array.isArray(value))){
                    input = document.createElement("select");
                    if (element.input.multiple === true) {
                        input.multiple = true;
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
                if (element.input.filetype) {
                    input.filetype = element.input.filetype
                        .map(item => item.startsWith('.') ? item : '.' + item)
                        .join(',');
                }

                document.body.appendChild(label);
                document.body.appendChild(input);
            });
        }
        
    }
    reader.readAsText(file);
})
