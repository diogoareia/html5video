(function() {

	videoController = (function() {
		function videoController() {
			this.nativeKeys = Object.keys;
		}
		
		videoController.prototype.init = function() {
			this.video = document.getElementById("video");
			return this.video;
		};
		
		videoController.prototype.events = function() {};
		videoController.prototype.currentTime = function() {
			return this.video.currentTime;
		};
		
		videoController.prototype.setTime = function(time) {
			this.time = time;
			this.video.currentTime = time;
			return this.video.play();
		};
		
		videoController.prototype.playAnimation = function(start, end) {
			var self;
			self = this;
			this.video.currentTime = start;
			this.video.play();
			
			
			var evtHandler = this.video.addEventListener('timeupdate', function () {
				//  Current time  
				if (video.currentTime.toFixed(0) == end){
					video.pause();
					video.currentTime = end + 1;
				}
			}, false);
			
			return true;
		};
		
		videoController.prototype.duration = function() {
			return this.video.duration;
		}
		
		videoController.prototype.play = function() {
			return this.video.play();
		};
		
		videoController.prototype.pause = function() {
			if (!this.video.paused) {
				return this.video.pause();
			}
		};
		
		return videoController;
	})();
	
	window.videoController = new videoController;
}).call(this);
