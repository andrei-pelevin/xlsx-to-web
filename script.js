console.log('пока норм')



const handleFiles = (e) => {
    console.log(e.target.files)
    files = Array.from(e.target.files)
    //let reader = new FileReader()
    const reader = new FileReader()
    reader.onload = ev => {
        console.log(ev.target.result)
        let workbook = XLSX.read(ev.target.result, {type: 'binary'});
        console.log(workbook)
    }
    reader.readAsDataURL(files[0])


}

const input = document.querySelector('#file')
input.addEventListener("change",  handleFiles)
