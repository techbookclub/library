var viewportHeight;
var documentHeight;
var footerHeight;

var FOOTER_DELTA = 80;

function onBodyResize() {
  viewportHeight = window.innerHeight;
  documentHeight = document.body.scrollHeight;



  //console.log(documentHeight);
}

function onBodyScroll() {

  var scrollTop = document.body.scrollTop;

  // 896 vs. 1050 = 154
  // 776 vs. 1050

  //console.log(scrollTop, document.body.scrollHeight - viewportHeight);

  console.log(documentHeight + footerHeight - FOOTER_DELTA, scrollTop + viewportHeight);

  if (documentHeight + footerHeight - FOOTER_DELTA > scrollTop + viewportHeight) {
    document.querySelector('header').classList.add('floating');

    //console.log('.');
  } else {
    document.querySelector('header').classList.remove('floating');
    //console.log('+');
  }
}

function main() {
  document.querySelector('header').classList.add('floating');

/*  window.addEventListener('resize', onBodyResize, false);
  window.addEventListener('scroll', onBodyScroll, false);

  footerHeight = document.querySelector('header').offsetHeight;

  onBodyResize();*/
}