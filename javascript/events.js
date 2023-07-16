var parent = document.querySelector(".card-container")
const dialogEdit = document.querySelector(".dialog-edit")
const cancel = document.querySelector("#cancel-button")
const canceledit = document.querySelector("#cancel-button-edit")
const dialog = document.querySelector(".dialog-add")
const memadd = document.querySelector(".memory-add")
const saveEdit = document.querySelector(".savebuttonedit")
const previewimageEdit = document.querySelector(".preview-edit")
const inputimageedit = document.querySelector(".input-image-edit")
const previewtitleEdit = document.querySelector(".title-input-edit")
const edithidden = document.querySelector(".edithidden")



cancel.addEventListener('click',e=>{
    console.log("cancel button clicked")
    previewtarget.src = "insert.png";

    dialog.close()
})

canceledit.addEventListener('click',e=>{
    console.log("cancel button clicked")
    dialogEdit.close()
})

const deleteMemory = async (id,title)=>{
console.log(id)
const value = confirm("Are You Sure To Delete This Memory");
const res = value && await axios.delete('https://memorybackend-hfgz.onrender.com/deletememory', {
    params: {
      id: id,
      title:title
    }
  });
alert(res.data.message)
window.location.reload();
}



memadd.addEventListener('click',e=>{
    dialog.showModal()
})

saveEdit?.addEventListener('click',async(e)=>{
    console.log("Save edit")
    const id = edithidden.textContent
    const imageUrl = previewimageEdit.src
    const title  = previewtitleEdit.value
    console.log(id,imageUrl,title)
    editMemory(id,title,imageUrl)

})


const getsinglememory = async(id)=>{
    console.log(id)
    const res = await axios.get(`https://memorybackend-hfgz.onrender.com/getsinglememory/${id}`)
    console.log(res.data)
    arr= res.data.data
    previewimageEdit.src =  await res.data.data.memoryimageUrl
    previewtitleEdit.value = await res.data.data.memoryTitle
    edithidden.textContent = res.data.data._id

}



