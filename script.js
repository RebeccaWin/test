document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.querySelector(".backtotop-button");

  backToTopButton.addEventListener("click", function (e) {
    e.preventDefault();

    function smoothScroll() {
      const scrollPosition = window.scrollY;

      const targetPosition = 0;

      const distance = (targetPosition - scrollPosition) / 20; // You can adjust this value for smoothness

      window.scrollTo(0, scrollPosition + distance);

      if (scrollPosition !== targetPosition) {
        requestAnimationFrame(smoothScroll);
      }
    }

    smoothScroll();
  });
});
