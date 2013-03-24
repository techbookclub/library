function hideHeader() {
  document.querySelector('header').classList.remove('force-hovering');  
}

function main() {
  document.querySelector('header').classList.add('floating');
  document.querySelector('header').classList.add('force-hovering');

  window.setTimeout(hideHeader, 2500);
}