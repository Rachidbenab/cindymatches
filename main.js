// if using synchronous loading, will be called once the DOM is ready
turnstile.ready(function () {
  turnstile.render("#myWidget", {
    sitekey: "0x4AAAAAABAFkyMgwHZrDaJC",
    callback: function (token) {
      console.log(`Challenge Success ${token}`);
    },
  });
});