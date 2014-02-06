(function() {

	VideoController = (function() {
		function videoController() {
			this.nativeKeys = Object.keys;
		}
		
		VideoController.prototype.init = function() {
			this.video = document.getElementById("video");
			return this.video;
		};
		
		VideoController.prototype.events = function() {};
		VideoController.prototype.currentTime = function() {
			return this.video.currentTime;
		};
		
		VideoController.prototype.setTime = function(time) {
			this.time = time;
			this.video.currentTime = time;
			return this.video.play();
		};
		
		VideoController.prototype.playAnimation = function(start, end) {
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
		
		VideoController.prototype.duration = function() {
			return this.video.duration;
		}
		
		VideoController.prototype.play = function() {
			return this.video.play();
		};
		
		VideoController.prototype.pause = function() {
			if (!this.video.paused) {
				return this.video.pause();
			}
		};
		
		return VideoController;
	})();
	
	window.videoController = new VideoController;
}).call(this);
