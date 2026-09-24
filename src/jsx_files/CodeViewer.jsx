/* ==================================================
   CODE VIEWER
   Scrollable source code with line numbers,
   simple syntax colours and a copy button.
================================================== */

import { useEffect, useMemo, useState } from 'react'

const KEYWORDS = new Set([
  'int', 'long', 'char', 'bool', 'void', 'string', 'float', 'double',
  'class', 'public', 'private', 'return', 'if', 'else', 'for', 'while',
  'do', 'switch', 'case', 'break', 'default', 'const', 'true', 'false',
  'using', 'namespace', 'struct', 'new', 'delete', 'static',
])

/* 1 = comment, 2 = string or char, 3 = number, 4 = word */
const TOKEN_PATTERN =
  /(\/\/.*$)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|(\b\d+\b)|(\b[A-Za-z_]\w*\b)/g

/*
  Turns one line of code into text and coloured pieces.
  <span> is the right element here: a token has no
  meaning of its own, it only needs a colour.
*/
function highlightLine(line) {
  if (line.trimStart().startsWith('#')) {
    return [
      <span key="pre" className="token-preprocessor">
        {line}
      </span>,
    ]
  }

  const pieces = []
  let lastIndex = 0
  let key = 0

  for (const match of line.matchAll(TOKEN_PATTERN)) {
    const [text, comment, string, number, word] = match

    if (match.index > lastIndex) {
      pieces.push(line.slice(lastIndex, match.index))
    }

    let className = null

    if (comment) {
      className = 'token-comment'
    } else if (string) {
      className = 'token-string'
    } else if (number) {
      className = 'token-number'
    } else if (word && KEYWORDS.has(word)) {
      className = 'token-keyword'
    }

    if (className) {
      pieces.push(
        <span key={key} className={className}>
          {text}
        </span>
      )
      key += 1
    } else {
      pieces.push(text)
    }

    lastIndex = match.index + text.length
  }

  if (lastIndex < line.length) {
    pieces.push(line.slice(lastIndex))
  }

  return pieces
}

function CodeViewer({ fileName, source }) {
  const [copied, setCopied] = useState(false)

  /* Runs again only when the source text changes */
  const lines = useMemo(
    () => source.replace(/\s+$/, '').split(/\r?\n/).map(highlightLine),
    [source]
  )

  /* Goes back to "Copy code" two seconds after copying */
  useEffect(() => {
    if (!copied) {
      return undefined
    }

    const timer = setTimeout(() => setCopied(false), 2000)

    return () => clearTimeout(timer)
  }, [copied])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(source)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="code-viewer details-reveal" aria-label="Source code">
      <header className="code-viewer-bar">
        <h2>Source code</h2>

        <p className="code-file">
          {fileName} &middot; {lines.length} lines
        </p>

        <button type="button" className="code-copy" onClick={handleCopy}>
          {copied ? 'Copied' : 'Copy code'}
        </button>
      </header>

      <p className="visually-hidden" role="status">
        {copied ? 'Code copied to the clipboard' : ''}
      </p>

      {/* Scrollable region: focusable so keyboard users can scroll it */}
      <section
        className="code-scroll"
        tabIndex={0}
        role="region"
        aria-label={`${fileName} source code`}
      >
        <ol className="code-lines">
          {lines.map((pieces, index) => (
            <li key={index}>{pieces}</li>
          ))}
        </ol>
      </section>
    </section>
  )
}

export default CodeViewer