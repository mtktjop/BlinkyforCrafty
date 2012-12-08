/*
 * Blinky
 * Version 1.0
 *
 * Copyright 2012, Michael Kruger (Cybe)
 * Dual licensed under the MIT or GPL licenses.
 *
 * Blink or fade text
 * .blink(text,fade (0/1),speed)
 */

Crafty.c("Blinky", {
  init : function() {
		this._toggle = 1;
		this._delayExpired=1;
		this._fade=0;
		this._fadeValue=100;
		this.addComponent("Delay");
		this.addComponent("Text");
	},

	blink : function(sentence, fade, time) {
		this.bind("EnterFrame", this._enterFrame);
		this._sentence=sentence;
		this._fade=fade;
		this._time=time;	
		},

	_enterFrame: function () {
		if(this._delayExpired==1)
		{
			this.delay(function() {
				  if(this._fade==0)
				  {
                                        if(this._toggle==1){this._toggle=0;this._fadeValue=100;}else{this._toggle=1;this._fadeValue=0;}
				  }else
				  {
					if(this._toggle==1){this._fadeValue-=5;if(this._fadeValue<=0){this._fadeValue=0;this._toggle=0;}}
					else{this._fadeValue+=5;if(this._fadeValue>=100){this._fadeValue=100;this._toggle=1;}}
                                  }
				  this.text("<span style=\"opacity:"+(this._fadeValue/100)+"\">"+this._sentence+"</span>");

				
				this._delayExpired=1
			}, (this._fade==0?this._time:this._time/20));
		this._delayExpired=0;
		}	
	}
});