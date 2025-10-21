document.getElementById("json-file").addEventListener ("change" ,(event) => {
    const file = event.target.files[0]
    console.log(file)

    const reader = new FileReader();
    reader.onload = function(e) {
        data = JSON.parse(e.target.result);
        console.log(data)
    }
    reader.readAsText(file);
})
