window.onloadTurnstileCallback = function () {
  turnstile.render("#myWidget", {
    sitekey: "0x4AAAAAABAFkyMgwHZrDaJC",
    callback: function (token) {
      console.log(`Challenge Success ${token}`);
	  setTimeout(() => {
		  document.querySelector(".container").Style.display = "flex";
		  document.getElementById(".myWidget").Style.display = "none";
	  },2000);
    },
  });
};