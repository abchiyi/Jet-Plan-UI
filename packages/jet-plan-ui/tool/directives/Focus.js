export default {
  name: "focus",
  created(el, binding) {
    const documentHandler = function (e) {
      if (!el.contains(e.target)) {
        binding.value();
      }
    };
    el["$$func"] = {
      documentHandler,
    };

    document.addEventListener("click", documentHandler);
  },
  unmounted(el) {
    document.removeEventListener("click", el["$$func"].documentHandler);
  },
};
