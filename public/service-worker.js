self.addEventListener('activate', function (e) {
    e.waitUntil(
      caches.keys().then(function (keyList) {
        let cacheKeepList = keyList.filter(function (key) {
          return key.indexOf(APP_PREFIX);
        });
