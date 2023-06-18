window.onload = () => {
    const shareBtn = document.getElementById("shr");
    shareBtn.addEventListener("click", () => {
        if(!shareBtn.classList.contains("actv-bg")){
            shareBtn.classList.add("actv-bg");
        }else{
            shareBtn.classList.remove("actv-bg");
        }
        const shareOpts = document.getElementById("id-opts");
        if(shareOpts.classList.contains("visiblity-hdn")){
            shareOpts.classList.remove("visiblity-hdn");
            shareOpts.classList.add("visiblity-vsbl");
        }else{
            shareOpts.classList.remove("visiblity-vsbl");
            shareOpts.classList.add("visiblity-hdn");
        }
        const shareOpts1 = document.getElementById("id-opts1");
        if(shareOpts1.classList.contains("display-hdn")){
            shareOpts1.classList.remove("display-hdn");
            shareOpts1.classList.add("display-vsbl");
        }else{
            shareOpts1.classList.remove("display-vsbl");
            shareOpts1.classList.add("display-hdn");
        }
    })
}