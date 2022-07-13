
import { css } from 'lit';
import type { CSSResultGroup } from 'lit';

export const sharedStyles: CSSResultGroup = css`
  .ProseMirror {
  width: auto;
  padding: 0 10px 20px 10px;
  word-wrap: break-word;
  white-space: pre-wrap;
  min-height: 446px;
  z-index: 1;
  margin-top: 0;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-variant: tabular-nums;
  line-height: 1.5715;
  background-color: #fff;
  font-feature-settings: 'tnum', 'tnum';
}
.ProseMirror-focused {
  outline: none;
}

.ProseMirror ul,
.ProseMirror ol {
  padding: 0 1rem;
}
.ProseMirror li {
  display: list-item;
  text-align: -webkit-match-parent;
  list-style-image: inherit;
  list-style-position: outside;
  list-style-type: inherit;
  line-height: 1.575;
}

.ProseMirror h1,
.ProseMirror h2,
.ProseMirror h3,
.ProseMirror h4,
.ProseMirror h5,
.ProseMirror h6 {
  line-height: 1.1;
}
.ProseMirror h1 {
  font-size: 2em;
}
.ProseMirror h2 {
  font-size: 1.5em;
}
.ProseMirror code {
  background-color: rgba(#616161, 0.1);
  color: #616161;
}

.ProseMirror pre {
  background: #0d0d0d;
  color: #fff;
  font-family: 'JetBrainsMono', monospace;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
}

.ProseMirror pre code {
  color: inherit;
  padding: 0;
  background: none;
  font-size: 0.8rem;
}

.ProseMirror img {
  max-width: 641px;
  height: auto;
}

.ProseMirror blockquote {
  padding-left: 1rem !important;
  border-left: 2px solid rgba(#0d0d0d, 0.1) !important;
}

.ProseMirror hr {
  border: none;
  border-top: 1px solid #ddd;
  margin: 2rem 0;
}
/*
 gapcursor
*/
.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
}

.ProseMirror-gapcursor:after {
  content: '';
  display: block;
  position: absolute;
  top: -2px;
  width: 1px;
  border-top: 1px solid #000;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}
.ProseMirror p {
  word-break: break-all;
  line-height: 16px;
  margin-top: 16px;
}
.ProseMirror p.empty {
  background-color: #fbfbfb;
}
.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-gapcursor:after {
  content: '';
  display: block;
  position: absolute;
  top: -2px;
  width: 1px !important;
  border-top: 15px solid black !important;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}`;