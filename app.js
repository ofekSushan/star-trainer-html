// var percentage = 50;
// var root = document.documentElement;
// root.style.cssText = '--percentage : ' + percentage;

// function loadPercentage(){
//   document.getElementById("percentage").innerHTML = percentage;
// }

// async function downloadpdf(){
//   const texts=document.querySelectorAll('#text')
//   texts.forEach(text=>{
//   text.innerHTML = text.innerText.replace(/\s/g,"\u00a0")
//   })
//   var css = document.getElementById("id-css");
//   var element = document.getElementById("document")
//   var body = document.getElementById('id-body');
//   var loading = document.getElementById('loading');
//   opt = {
//     filename: document.title + '.pdf',
//     image: {type: 'jpeg',quality: 1},
//     html2canvas:  { scale: 2 , useCORS: true, dpi: 76, logging: true },
//     jsPDF: {unit: 'in', format: 'a4', orientation: 'portrait'},
//     pagebreak: {avoid: 'tr'}
//   }
  
//   loading.style.display = 'block'
//   setTimeout(() => {
//     css.setAttribute("href", "css/pdf.css");
//     html2pdf().set(opt).from(element).then(function(){
//       setTimeout(Loading, 10)
      
//     }).save()

//   },1000)

//   function Loading(){
//     css.setAttribute("href", "css/html.css");
//     setTimeout(stopLoading,0)

//   }
//   function stopLoading(){
//     loading.style.display = 'none';
//   }
// }


