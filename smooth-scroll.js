(() => {
  if (typeof Lenis === 'undefined') return;

  new Lenis({
    autoRaf: true,
    smoothWheel: true,
    lerp: 0.14,
    wheelMultiplier: 0.9,
    syncTouch: false,
    anchors: true,
    respectReducedMotion: true,
  });
})();
