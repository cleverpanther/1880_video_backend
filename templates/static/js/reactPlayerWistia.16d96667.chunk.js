(this.webpackJsonp1880towntour=this.webpackJsonp1880towntour||[]).push([[12],{461:function(e,t,a){var n,o=Object.create,l=Object.defineProperty,s=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,r=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,p=(e,t,a,n)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let o of i(t))u.call(e,o)||o===a||l(e,o,{get:()=>t[o],enumerable:!(n=s(t,o))||n.enumerable});return e},c=(e,t,a)=>(((e,t,a)=>{t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a})(e,"symbol"!==typeof t?t+"":t,a),a),h={};((e,t)=>{for(var a in t)l(e,a,{get:t[a],enumerable:!0})})(h,{default:()=>P}),e.exports=(n=h,p(l({},"__esModule",{value:!0}),n));var y=((e,t,a)=>(a=null!=e?o(r(e)):{},p(!t&&e&&e.__esModule?a:l(a,"default",{value:e,enumerable:!0}),e)))(a(2)),d=a(115),b=a(257);class P extends y.Component{constructor(){var e;super(...arguments),e=this,c(this,"callPlayer",d.callPlayer),c(this,"playerID",this.props.config.playerId||"".concat("wistia-player-").concat((0,d.randomString)())),c(this,"onPlay",(function(){return e.props.onPlay(...arguments)})),c(this,"onPause",(function(){return e.props.onPause(...arguments)})),c(this,"onSeek",(function(){return e.props.onSeek(...arguments)})),c(this,"onEnded",(function(){return e.props.onEnded(...arguments)})),c(this,"onPlaybackRateChange",(function(){return e.props.onPlaybackRateChange(...arguments)})),c(this,"mute",(()=>{this.callPlayer("mute")})),c(this,"unmute",(()=>{this.callPlayer("unmute")}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){const{playing:t,muted:a,controls:n,onReady:o,config:l,onError:s}=this.props;(0,d.getSDK)("https://fast.wistia.com/assets/external/E-v1.js","Wistia").then((e=>{l.customControls&&l.customControls.forEach((t=>e.defineControl(t))),window._wq=window._wq||[],window._wq.push({id:this.playerID,options:{autoPlay:t,silentAutoPlay:"allow",muted:a,controlsVisibleOnLoad:n,fullscreenButton:n,playbar:n,playbackRateControl:n,qualityControl:n,volumeControl:n,settingsControl:n,smallPlayButton:n,...l.options},onReady:e=>{this.player=e,this.unbind(),this.player.bind("play",this.onPlay),this.player.bind("pause",this.onPause),this.player.bind("seek",this.onSeek),this.player.bind("end",this.onEnded),this.player.bind("playbackratechange",this.onPlaybackRateChange),o()}})}),s)}unbind(){this.player.unbind("play",this.onPlay),this.player.unbind("pause",this.onPause),this.player.unbind("seek",this.onSeek),this.player.unbind("end",this.onEnded),this.player.unbind("playbackratechange",this.onPlaybackRateChange)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){this.unbind(),this.callPlayer("remove")}seekTo(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("time",e),t||this.pause()}setVolume(e){this.callPlayer("volume",e)}setPlaybackRate(e){this.callPlayer("playbackRate",e)}getDuration(){return this.callPlayer("duration")}getCurrentTime(){return this.callPlayer("time")}getSecondsLoaded(){return null}render(){const{url:e}=this.props,t=e&&e.match(b.MATCH_URL_WISTIA)[1],a="wistia_embed wistia_async_".concat(t);return y.default.createElement("div",{id:this.playerID,key:t,className:a,style:{width:"100%",height:"100%"}})}}c(P,"displayName","Wistia"),c(P,"canPlay",b.canPlay.wistia),c(P,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerWistia.16d96667.chunk.js.map