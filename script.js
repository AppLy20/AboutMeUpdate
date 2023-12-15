function showPopupAndRedirect(event) {
    event.preventDefault(); // Oprire acțiunea implicită a link-ului
    var userDecision = confirm("Ești sigur de această decizie?");
    if (userDecision) {
      alert("Decizia ta este confirmată!");
      // Redirecționează utilizatorul către site-ul dorit
      window.location.href = event.target.href;
    } else {
      alert("Ai renunțat la decizie.");
    }
  }

  // Obține elementul cu clasa "socialmedia"
  var socialMediaElement = document.querySelector('.socialmedia');

  // Adaugă un eveniment de click pe link
  socialMediaElement.addEventListener('click', function(event) {
    showPopupAndRedirect(event);
  });