BlinkyforCrafty
===============

A Blink Fader for Crafty.js

Allows you to blink or fade text.

example:

Crafty.init(1000, 600);
Crafty.canvas.init();

Crafty.scene("main", function () {

Crafty.e("2D, DOM, Blinky")
      .attr({ x: 160, y: 200,w:500})
      .blink("fading text",1,250)
      
      
Crafty.e("2D, DOM, Blinky")
      .attr({ x: 160, y: 200,w:500})
      .blink("blinking text",0,250)
});


	Crafty.scene("main");
}
    </script>