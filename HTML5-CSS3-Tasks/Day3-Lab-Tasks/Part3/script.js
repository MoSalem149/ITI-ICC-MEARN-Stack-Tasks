// Filter Logic
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    document.querySelectorAll(".card").forEach((card) => {
      card.classList.toggle(
        "hidden",
        filter !== "all" && card.dataset.category !== filter,
      );
    });
  });
});

// Like Toggle Logic
document.querySelectorAll(".likes").forEach((likeEl) => {
  likeEl.addEventListener("click", () => {
    const countEl = likeEl.querySelector(".like-count");
    const liked = likeEl.dataset.liked === "true";

    likeEl.dataset.liked = !liked;
    countEl.textContent = +countEl.textContent + (liked ? -1 : 1);
  });
});
