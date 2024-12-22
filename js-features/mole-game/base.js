(() => {
  let playing = true,
    activeHole = 1;

  // от всей души желаю тебе всю оставшуюся жизнь to burn in callback hell
  const stop = () => playing = true,
    getHole = index => document.getElementById(`hole${index}`),
    deactivateHole = index =>
      getHole( index ).className = 'hole',
    activateHole = index =>
      getHole( index ).className = 'hole hole_has-mole',
    next = () => setTimeout(() => {
      if ( !playing ) {
        return;
      }
      deactivateHole( activeHole );
      activeHole = Math.floor( 1 + Math.random() * 9 );
      activateHole( activeHole );
      next();
    }, 800 );

  next();
})();
