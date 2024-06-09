class YouTubeVimeoEmbed extends HTMLElement {
	// https://github.com/aardrian/youtube-vimeo-embed
	constructor() {
		super();
	}
	connectedCallback() {
		var iframe = document.createElement('iframe');
		var theLink = this.querySelector('a');
		var vidSlug;
		var vidPreSlug = theLink.getAttribute('href').split('/')[3];
		var vidQueryString = '';
		var vidQueryCheck = vidPreSlug.indexOf('?');
		if (vidQueryCheck == -1) {
			vidSlug = vidPreSlug;
		} else {
			vidSlug = vidPreSlug.substring(0,vidQueryCheck);
			vidQueryString = '&'+vidPreSlug.substring(vidQueryCheck+1);
		}
		if (theLink.getAttribute('href').substring(8,13) == 'youtu') {
			var isYouTube = 1;
		} else {
			var isYouTube = 0;
		}
		iframe.setAttribute('title',theLink.textContent);
		iframe.setAttribute('allow','autoplay');
		iframe.setAttribute('allowfullscreen','');
		iframe.setAttribute('loading','lazy');
		if (isYouTube) {
			iframe.setAttribute('src','https://www.youtube-nocookie.com/embed/'+vidSlug);
			var bgImg = 'https://i3.ytimg.com/vi/'+vidSlug+'/hqdefault.jpg';
			var vidLink = 'https://www.youtube-nocookie.com/embed/'+vidSlug+'?autoplay=1'+vidQueryString;
		} else {
			iframe.setAttribute('src','https://vimeo.com/'+vidSlug);
			var bgImg = 'https://vumbnail.com/'+vidSlug+'.jpg';
			var vidLink = 'https://player.vimeo.com/video/'+vidSlug+'?autoplay=1&dnt=1'+vidQueryString;
		}
		if (this.getAttribute('data-ratio')) {
			iframe.setAttribute('style','aspect-ratio:'+this.getAttribute('data-ratio')+';width:100%;');
		} else {
			iframe.setAttribute('style','aspect-ratio:16/9;width:100%;');
		}
		iframe.setAttribute('srcdoc','<style>body{background-image:url('+bgImg+');background-repeat:no-repeat;background-size:cover;background-position:center center;display:grid;place-items:center;min-height:97dvh;overflow:hidden;}a{display:block;width:96px;height:96px;overflow:hidden;}a:focus{outline:none;}a:focus circle,a:hover circle{fill:#000;}a:focus circle:first-child + circle,a:hover circle:first-child + circle{stroke-dasharray:.4,.4;}a:focus polygon,a:hover polygon{stroke:#fff;stroke-width:.75;}</style><a href="'+vidLink+'"><svg viewBox="0 0 16 16" width="96" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="50%" cy="50%" r="7.75" fill="none" stroke="#000" stroke-width=".5"/><circle cx="50%" cy="50%" r="7.25" fill="none" stroke="#fff" stroke-width=".5"/><circle cx="50%" cy="50%" r="7" fill="#0009"/><polygon points="12, 8 6, 4.5 6, 11.5" fill="#fff" stroke-linejoin="round"></polygon></svg>Play</a>');
		this.appendChild(iframe);
	}
}
customElements.define('youtube-vimeo-embed', YouTubeVimeoEmbed);