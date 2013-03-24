function hideHeader() {
  document.querySelector('header').classList.remove('fixed-hover');
}

function main() {
  document.querySelector('header').classList.add('floating');
  document.querySelector('header').classList.add('fixed-hover');

  if (!document.body.classList.contains('homepage')){
    window.setTimeout(hideHeader, 2500);
  }
}