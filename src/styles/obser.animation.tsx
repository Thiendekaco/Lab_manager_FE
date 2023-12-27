
export interface OptionInterface {
  cb ?: (el : Element)=> void ;
  rootMargin ?: string;
}


export function scrollTrigger(selector : string, options: OptionInterface){
  let els = document.querySelectorAll(selector)
  const els_ = Array.from(els)
  els_.forEach(el => {
    addObserver(el, options)
  })
}

function addObserver(el : Element, options : OptionInterface){
  let observer = new IntersectionObserver((entries, observer) => { //this takes a callback function which receives two arguments: the elemts list and the observer instance
    entries.forEach(entry => {
      if(entry.isIntersecting){
        if(options.cb){
          options.cb(el)
        }else{
          entry.target.classList.add('active')
        }
        observer.unobserve(entry.target)
      }
    })
  }, options)
  observer.observe(el)
}

