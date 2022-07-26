(() => {
  const refs = {
    openModalBtn: document.querySelector("[read-more-open]"),
    closeModalBtn: document.querySelector("[read-more-close]"),
    modal: document.querySelector("[read-more]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();