// Process -> center text <-

'use strict';

module.exports = function synapse_heading_plugin(md) {

  function synapse_heading(state, startLine, endLine, silent) {
    var token,
        level,
        pos = state.bMarks[startLine] + state.tShift[startLine],
        max = state.eMarks[startLine],
        ch = state.src.charCodeAt(pos);
    if (silent) { return false; }
    if (ch !== 0x23/* # */) { return false; }

    // count heading level
    level = 1;
    ch = state.src.charCodeAt(++pos);
    while (ch === 0x23/* # */ && pos < max && level <= 6) {
      level++;
      ch = state.src.charCodeAt(++pos);
    }
    if (level > 6) { return false; }

    state.line = startLine + 1;

    token        = state.push('synapse_heading_open', 'h' + String(level), 1);
    token.markup = '########'.slice(0, level);
    token.map    = [ startLine, state.line ];
    if (ch !== 0x21/* ! */) {
      token.attrs = [ [ 'toc', 'true' ] ];
    } else {
      token.markup += ch;
      pos++;
    }


    token          = state.push('inline', '', 0);
    token.content  = state.src.slice(pos, max).trim();
    token.map      = [ startLine, state.line ];
    token.children = [];

    token        = state.push('synapse_heading_close', 'h' + String(level), -1);
    token.markup = '########'.slice(0, level);

    return true;
  }

  md.block.ruler.before('reference', 'synapse_heading', synapse_heading);
};
