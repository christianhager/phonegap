File.prototype.read=function(c,a,b){document.cookie='bb_command={command:8,args:{name:"'+c+'"}}';navigator.file.successCallback=a;navigator.file.errorCallback=b;navigator.file.readTimeout=window.setInterval("navigator.file._readReady()",1000)};File.prototype._readReady=function(){var cookies=document.cookie.split(";");for(var i=0;i<cookies.length;i++){var cookie=cookies[i].split("=");if(cookie[0]=="bb_response"){var obj=eval("("+cookie[1]+")");var file=obj.readfile;if(file!=null){window.clearTimeout(navigator.file.readTimeout);if(file.length>0){successCallback(file)}}}}};File.prototype.write=function(b,a){document.cookie='bb_command={command:9,args:{name:"'+b+'",data:"'+a+'"}}'};Geolocation.prototype.getCurrentPosition=function(a,b,c){document.cookie="bb_command={command:"+phonegap.LOCATION+"}";geoSuccessCallback=a;geoErrorCallback=b;geoOptions=c;locationTimeout=window.setInterval("navigator.geolocation._getCurrentPosition()",1000)};Geolocation.prototype._getCurrentPosition=function(successCallback,errorCallback,options){var cookies=document.cookie.split(";");for(var i=0;i<cookies.length;i++){var cookie=cookies[i].split("=");if(cookie[0]=="bb_response"){var obj=eval("("+cookie[1]+")");var geo=obj.geolocation;if(geo!=null){window.clearTimeout(locationTimeout);if(geo.error!=null){if(typeof geoErrorCallback=="function"){geoErrorCallback(new PositionError(geo.error))}}else{if(typeof geoSuccessCallback=="function"){geoSuccessCallback(new Position(geo.lat,geo.lng))}}break}}}};Geolocation.prototype.showMap=function(b,a){document.cookie="bb_command={command:1,args:{points:[{lat:"+b+",lng:"+a+",label:'Nitobi'}]}}"};Geolocation.prototype.getCurrentPosition=function(a,b,c){this.successCallback=a;this.errorCallback=b;this.options=c;if(Device.available){try{document.location="gap:"+command}catch(d){alert("Error executing command '"+command+"'.")}}};Geolocation.prototype._getCurrentPosition=function(a,b){if(b!=null){this.errorCallback(new PositionError(b))}else{this.successCallback(new Position())}};function Acceleration(a,c,b){this.x=0;this.y=0;this.z=0;this.timestamp=new Date().getTime()}function AccelerationOptions(){this.timeout=10000}function Accelerometer(){this.lastAcceleration=null}Accelerometer.prototype.getCurrentAcceleration=function(a,b,c){};Accelerometer.prototype.watchAcceleration=function(a,b,c){this.getCurrentAccelerometer(a,b,c);return setInterval(function(){navigator.accelerometer.getCurrentAcceleration(a,b,c)},10000)};Accelerometer.prototype.clearWatch=function(a){clearInterval(a)};if(typeof navigaton.accelerometer=="undefined"){navigator.accelerometer=new Accelerometer()}function Camera(){}Camera.prototype.getPicture=function(a,b,c){};if(typeof navigaton.camera=="undefined"){navigator.camera=new Camera()}function Contact(){this.name="";this.phone=[];this.address=[]}Contact.prototype.get=function(a,b,c){};if(typeof navigaton.contact=="undefined"){navigator.contact=new Contact()}function File(){this.data="";this.name=""}File.prototype.read=function(c,a,b){};File.prototype.write=function(a){};if(typeof navigator.file=="undefined"){navigator.file=new File()}function Geolocation(){this.lastPosition=null}Geolocation.prototype.getCurrentPosition=function(a,b,c){};Geolocation.prototype.watchPosition=function(a,b,c){this.getCurrentPosition(a,b,c);return setInterval(function(){navigator.geolocation.getCurrentPosition(a,b,c)},10000)};Geolocation.prototype.clearWatch=function(a){clearInterval(a)};if(typeof navigator.geolocation=="undefined"){navigator.geolocation=new Geolocation()}function Map(){}Map.prototype.show=function(a){};if(typeof navigaton.map=="undefined"){navigator.map=new Map()}function Notification(){}Notification.prototype.blink=function(a,b){};Notification.prototype.vibrate=function(a){};Notification.prototype.beep=function(b,a){};if(typeof navigaton.notification=="undefined"){navigator.notification=new Notification()}function Orientation(){this.lastOrientation=null}Orientation.prototype.getCurrentOrientation=function(a,b){};Orientation.prototype.watchOrientation=function(a,b){this.getCurrentPosition(a,b);return setInterval(function(){navigator.orientation.getCurrentOrientation(a,b)},10000)};Orientation.prototype.clearWatch=function(a){clearInterval(a)};if(typeof navigator.orientation=="undefined"){navigator.orientation=new Orientation()}function Position(g,b,e,f,a,c,d){this.latitude=g;this.longitude=b;this.accuracy=e;this.altitude=f;this.altitudeAccuracy=a;this.heading=c;this.velocity=d;this.timestamp=new Date().getTime()}function PositionOptions(){this.enableHighAccuracy=true;this.timeout=10000}function PositionError(){this.code=null;this.message=""}PositionError.UNKNOWN_ERROR=0;PositionError.PERMISSION_DENIED=1;PositionError.POSITION_UNAVAILABLE=2;PositionError.TIMEOUT=3;function Sms(){}Sms.prototype.send=function(e,d,a,b,c){};if(typeof navigator.sms=="undefined"){navigator.sms=new Sms()}function Telephony(){}Telephony.prototype.call=function(a){};if(typeof navigator.telephony=="undefined"){navigator.telephony=new Telephony()};