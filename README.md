# `<youtube-vimeo-embed>` Custom Element

A custom element to embed either a YouTube or Vimeo video into your page.

## Features

* Retains a useful link in case of script failure.
* Privacy benefit of not loading all the trackers immediately.
* Uses `youtube-nocookie.com` domain.
* Accessible (WCAG 2.2 Level AA minimum) default. This only calls out specific SCs where someone might have a question:
    * 1.1.1: The SVG is marked decorative.
    * 1.4.1: Play button does not rely on color alone.
    * 1.4.11: Play button has contrast within itself and uses white and black edges to ensure contrast against whatever poster image.
    * 2.1.1: Play button is keyboard operable.
    * 2.4.3: Play button is in focus order by being the only thing in the iframe.
    * 2.4.4: Visually-hidden link text is "Play", offering sufficient context.
    * 2.4.7: Focus is visible.
    * 2.4.11: Centered in the iframe to avoid obscured focus.
    * 2.5.3: While this passes because there is no tex, the visually-hidden "Play" is guessable and more likely to auto-translate.
    * 2.5.8: Definitely meets target size (and the Level AAA 2.5.5).
    * 4.1.2: The iframe has an accessible name from the author-provided link.


## Installation

Copy the script into your own page or script file, I guess?

## Usage

It requires a specific HTML structure.

The unique ID, the _slug_, at the end of both the YouTube and Vimeo URLs is what I use to grab the poster image and build the embedded frame.

The HTML within the custom element is retained, helping ensure if the embed itself is broken or blocked, even after the script successfully runs, the user will still have a valid link and context.

### `data-` Attributes

Add `data-ratio` to the `<youtube-vimeo-embed>` to pass in your own value `aspect-ratio` value for the property. The script sets `aspect-ratio:16/9` by default.

Add `data-poster` to provide your own URL for a poster image (video thumbnail). This means no calls to YouTube or Vimeo. Otherwise it pulls the image provided by YouTube or Vimeo.

## Examples

The following:
```
<youtube-vimeo-embed>
  <p>
    YouTube: <a href="https://youtu.be/dQw4w9WgXcQ">Rick Astley, "Never Gonna Give You Up"</a>, 3:32
  </p>
</youtube-vimeo-embed>
```

Results in:
```
<youtube-vimeo-embed>
  <p>
    YouTube: <a href="https://youtu.be/dQw4w9WgXcQ">Rick Astley, "Never Gonna Give You Up"</a>, 3:32
  </p>
<iframe title="Rick Astley, &quot;Never Gonna Give You Up&quot;" allow="autoplay" allowfullscreen="" loading="lazy" src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ" style="aspect-ratio:16/9;width:100%;" srcdoc="<style>body{background-image:url(https://i3.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg);background-repeat:no-repeat;background-size:cover;background-position:center center;display:grid;place-items:center;min-height:97dvh;overflow:hidden;}a{display:block;width:96px;height:96px;overflow:hidden;}a:focus{outline:none;}a:focus circle,a:hover circle{fill:#000;}a:focus circle:first-child + circle,a:hover circle:first-child + circle{stroke-dasharray:.4,.4;}a:focus polygon,a:hover polygon{stroke:#fff;stroke-width:.75;}</style><a href=&quot;https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&quot;><svg viewBox=&quot;0 0 16 16&quot; width=&quot;96&quot; height=&quot;96&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; aria-hidden=&quot;true&quot;><circle cx=&quot;50%&quot; cy=&quot;50%&quot; r=&quot;7.75&quot; fill=&quot;none&quot; stroke=&quot;#000&quot; stroke-width=&quot;.5&quot;/><circle cx=&quot;50%&quot; cy=&quot;50%&quot; r=&quot;7.25&quot; fill=&quot;none&quot; stroke=&quot;#fff&quot; stroke-width=&quot;.5&quot;/><circle cx=&quot;50%&quot; cy=&quot;50%&quot; r=&quot;7&quot; fill=&quot;#0009&quot;/><polygon points=&quot;12, 8 6, 4.5 6, 11.5&quot; fill=&quot;#fff&quot; stroke-linejoin=&quot;round&quot;></polygon></svg>Play</a>"></iframe></youtube-vimeo-embed>
```

This example uses `data-ratio="1/1"` to set the aspect ratio   :
```
<youtube-vimeo-embed data-ratio="1/1">
  <p>
    Vimeo: <a href="https://vimeo.com/31817442">No Undo - Christophe Dillinger</a>, 2:14
  </p>
</youtube-vimeo-embed>
```

It results in:
```
<youtube-vimeo-embed data-ratio="1/1">
  <p>
    Vimeo: <a href="https://vimeo.com/31817442">No Undo – Christophe Dillinger</a>, 2:14
  </p>
<iframe title="No Undo – Christophe Dillinger" allow="autoplay" allowfullscreen="" loading="lazy" src="https://vimeo.com/31817442" style="aspect-ratio:1/1;width:100%;" srcdoc="<style>body{background-image:url(https://vumbnail.com/31817442.jpg);background-repeat:no-repeat;background-size:cover;background-position:center center;display:grid;place-items:center;min-height:97dvh;overflow:hidden;}a{display:block;width:96px;height:96px;overflow:hidden;}a:focus{outline:none;}a:focus circle,a:hover circle{fill:#000;}a:focus circle:first-child + circle,a:hover circle:first-child + circle{stroke-dasharray:.4,.4;}a:focus polygon,a:hover polygon{stroke:#fff;stroke-width:.75;}</style><a href=&quot;https://player.vimeo.com/video/31817442?autoplay=1&amp;dnt=1&quot;><svg viewBox=&quot;0 0 16 16&quot; width=&quot;96&quot; height=&quot;96&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; aria-hidden=&quot;true&quot;><circle cx=&quot;50%&quot; cy=&quot;50%&quot; r=&quot;7.75&quot; fill=&quot;none&quot; stroke=&quot;#000&quot; stroke-width=&quot;.5&quot;/><circle cx=&quot;50%&quot; cy=&quot;50%&quot; r=&quot;7.25&quot; fill=&quot;none&quot; stroke=&quot;#fff&quot; stroke-width=&quot;.5&quot;/><circle cx=&quot;50%&quot; cy=&quot;50%&quot; r=&quot;7&quot; fill=&quot;#0009&quot;/><polygon points=&quot;12, 8 6, 4.5 6, 11.5&quot; fill=&quot;#fff&quot; stroke-linejoin=&quot;round&quot;></polygon></svg>Play</a>"></iframe></youtube-vimeo-embed>
```

This example starts 31 seconds into the video thanks to `start=31` in the query string:
```
<youtube-vimeo-embed>
  <p>
    YouTube: <a href="https://youtu.be/PLXAuxZKKjs?start=31">Overlays Underwhelm at WordPress Accessibility Day</a>, 46:48
  </p>
</youtube-vimeo-embed>
```

Resulting in:
```
<youtube-vimeo-embed>
  <p>
    YouTube: <a href="https://youtu.be/PLXAuxZKKjs?start=31">Overlays Underwhelm at WordPress Accessibility Day</a>, 46:48
  </p>
<iframe title="Overlays Underwhelm at WordPress Accessibility Day" allow="autoplay" allowfullscreen="" loading="lazy" src="https://www.youtube-nocookie.com/embed/PLXAuxZKKjs" style="aspect-ratio:16/9;width:100%;" srcdoc="<style>body{background-image:url(https://i3.ytimg.com/vi/PLXAuxZKKjs/hqdefault.jpg);background-repeat:no-repeat;background-size:cover;background-position:center center;display:grid;place-items:center;min-height:97dvh;overflow:hidden;}a{display:block;width:96px;height:96px;overflow:hidden;}a:focus{outline:none;}a:focus circle,a:hover circle{fill:#000;}a:focus circle:first-child + circle,a:hover circle:first-child + circle{stroke-dasharray:.4,.4;}a:focus polygon,a:hover polygon{stroke:#fff;stroke-width:.75;}</style><a href=&quot;https://www.youtube-nocookie.com/embed/PLXAuxZKKjs?autoplay=1&amp;start=31&quot;><svg viewBox=&quot;0 0 16 16&quot; width=&quot;96&quot; height=&quot;96&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; aria-hidden=&quot;true&quot;><circle cx=&quot;50%&quot; cy=&quot;50%&quot; r=&quot;7.75&quot; fill=&quot;none&quot; stroke=&quot;#000&quot; stroke-width=&quot;.5&quot;/><circle cx=&quot;50%&quot; cy=&quot;50%&quot; r=&quot;7.25&quot; fill=&quot;none&quot; stroke=&quot;#fff&quot; stroke-width=&quot;.5&quot;/><circle cx=&quot;50%&quot; cy=&quot;50%&quot; r=&quot;7&quot; fill=&quot;#0009&quot;/><polygon points=&quot;12, 8 6, 4.5 6, 11.5&quot; fill=&quot;#fff&quot; stroke-linejoin=&quot;round&quot;></polygon></svg>Play</a>"></iframe></youtube-vimeo-embed>
```

## More Information

Links with more info:

* [YouTube and Vimeo Web Component](https://adrianroselli.com/2024/06/youtube-and-vimeo-web-component.html), 10 June 2024.
* [Embed Slides, YouTube Videos, and More](https://adrianroselli.com/2024/01/embed-slides-youtube-videos-and-more.html), 9 January 2024.
