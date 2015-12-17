//http://codepen.io/chriscoyier/pen/FwJux.scss
//SVG

@mixin svgGlitch($name, $intensity, $fillColor, $background, $fillHighlight1, $fillHighlight2, $width, $height, $top, $left) {
  
  $steps: $intensity;
  
  // Ensure the @keyframes are generated at the root level
  @at-root {
    // We need two different ones
    @for $i from 1 through 2 {
      @keyframes #{$name}-anim-#{$i} {
        @for $i from 0 through $steps {
          #{percentage($i*(1/$steps))} {
            clip: rect(
              (random($height)-20)+px,
              $width+px,
              (random($height)+20)+px,
              0
            );
          }
        }
      }
    }
  }
  
  svg {
    position: absolute;
    top: $top+px;
    left: $left+px;
    fill: $fillColor;
    background: $background;
    width: $width+px;
    height: $height+px;
  }
  svg:nth-child(2),
  svg:nth-child(3) {
    clip: rect(0, 0, 0, 0); 
  }
  svg:nth-child(2) {
    fill: $fillHighlight1;
    left: ($left - 2) + px;
    animation: #{$name}-anim-1 2s infinite linear alternate-reverse;
  }
  svg:nth-child(3) {
    fill: $fillHighlight2;
    left: ($left + 2) + px;
    animation: #{$name}-anim-2 3s infinite linear alternate-reverse;
  }
}
