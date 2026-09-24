/* ==================================================
   PROJECT DEMOS
   Small interactive versions of each console
   project's idea. They run in JavaScript, they are
   not the C++ programs, and the page says so.
================================================== */

import { Fragment, useState } from 'react'

/* ---------- Shared frame ---------- */

function DemoShell({ title, description, children }) {
  return (
    <section className="details-demo details-reveal" aria-label={title}>
      <header className="demo-header">
        <h2>{title}</h2>
        <p>{description}</p>
      </header>

      {children}
    </section>
  )
}

/* ==================================================
   TIC TAC TOE
================================================== */

const WIN_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
]

function getWinningLine(cells) {
  for (const line of WIN_LINES) {
    const [a, b, c] = line

    if (cells[a] !== '' && cells[a] === cells[b] && cells[a] === cells[c]) {
      return line
    }
  }

  return null
}

function TicTacToeDemo() {
  const [cells, setCells] = useState(Array(9).fill(''))
  const [xTurn, setXTurn] = useState(true)

  const winningLine = getWinningLine(cells)
  const isFull = cells.every((cell) => cell !== '')

  let status = `${xTurn ? 'X' : 'O'} to play`

  if (winningLine) {
    status = `${cells[winningLine[0]]} wins`
  } else if (isFull) {
    status = "It's a tie"
  }

  const play = (index) => {
    if (cells[index] !== '' || winningLine) {
      return
    }

    const nextCells = [...cells]
    nextCells[index] = xTurn ? 'X' : 'O'

    setCells(nextCells)
    setXTurn(!xTurn)
  }

  const reset = () => {
    setCells(Array(9).fill(''))
    setXTurn(true)
  }

  return (
    <DemoShell
      title="Try the idea"
      description="The board is numbered 1 to 9, like the console version. Pick a square to play as X and O in turn."
    >
      <ul className="demo-board">
        {cells.map((cell, index) => {
          const isWinning = winningLine !== null && winningLine.includes(index)

          let className = 'demo-cell'

          if (cell) {
            className += ` mark-${cell.toLowerCase()}`
          }

          if (isWinning) {
            className += ' is-win'
          }

          return (
            <li key={index}>
              <button
                type="button"
                className={className}
                onClick={() => play(index)}
                disabled={cell !== '' || winningLine !== null}
                aria-label={
                  cell ? `Square ${index + 1}, ${cell}` : `Square ${index + 1}`
                }
              >
                {cell || index + 1}
              </button>
            </li>
          )
        })}
      </ul>

      <footer className="demo-footer">
        <p className="demo-status" role="status">
          {status}
        </p>

        <button type="button" className="demo-button" onClick={reset}>
          New game
        </button>
      </footer>
    </DemoShell>
  )
}

/* ==================================================
   NUMBER CONVERSION
================================================== */

const BASES = [
  { name: 'Binary', radix: 2, pattern: /^[01]+$/ },
  { name: 'Octal', radix: 8, pattern: /^[0-7]+$/ },
  { name: 'Decimal', radix: 10, pattern: /^[0-9]+$/ },
  { name: 'Hexadecimal', radix: 16, pattern: /^[0-9a-fA-F]+$/ },
]

function ConversionDemo() {
  const [value, setValue] = useState('45')
  const [radix, setRadix] = useState(10)

  const source = BASES.find((base) => base.radix === radix)
  const trimmed = value.trim()

  const isEmpty = trimmed === ''
  const isValid = !isEmpty && source.pattern.test(trimmed)
  const decimalValue = isValid ? parseInt(trimmed, radix) : null

  return (
    <DemoShell
      title="Try the idea"
      description="Type a number, choose its base, and see it in all four systems. The C++ program follows the same steps in the console."
    >
      <section className="demo-converter">
        <label htmlFor="convert-input">Number</label>

        <input
          type="text"
          id="convert-input"
          value={value}
          maxLength={12}
          autoComplete="off"
          spellCheck="false"
          onChange={(event) => setValue(event.target.value)}
          aria-invalid={!isEmpty && !isValid}
          aria-describedby="convert-error"
        />

        <nav className="demo-bases" aria-label="Base of the number you typed">
          {BASES.map((base) => (
            <button
              type="button"
              key={base.radix}
              className={
                base.radix === radix ? 'demo-base active' : 'demo-base'
              }
              onClick={() => setRadix(base.radix)}
              aria-pressed={base.radix === radix}
            >
              {base.name}
            </button>
          ))}
        </nav>

        <p id="convert-error" className="demo-error" role="alert">
          {!isEmpty && !isValid
            ? `That is not a valid ${source.name.toLowerCase()} number.`
            : ''}
        </p>

        <dl className="demo-results">
          {BASES.map((base) => (
            <Fragment key={base.radix}>
              <dt>{base.name}</dt>
              <dd>
                {isValid
                  ? decimalValue.toString(base.radix).toUpperCase()
                  : '\u2014'}
              </dd>
            </Fragment>
          ))}
        </dl>
      </section>
    </DemoShell>
  )
}

/* ==================================================
   HOSPITAL APPOINTMENTS
================================================== */

function HospitalDemo() {
  const [queue, setQueue] = useState([
    { id: 1, time: '12:00' },
    { id: 2, time: '09:00' },
    { id: 3, time: '10:30' },
  ])
  const [nextId, setNextId] = useState(4)
  const [time, setTime] = useState('11:15')

  /* Earliest time first, like the top of a min-heap */
  const sortedQueue = [...queue].sort((a, b) => a.time.localeCompare(b.time))

  const handleAdd = (event) => {
    event.preventDefault()

    if (time === '') {
      return
    }

    setQueue([...queue, { id: nextId, time }])
    setNextId(nextId + 1)
  }

  const handleServe = () => {
    if (sortedQueue.length === 0) {
      return
    }

    const earliest = sortedQueue[0]

    setQueue(queue.filter((appointment) => appointment.id !== earliest.id))
  }

  return (
    <DemoShell
      title="Try the idea"
      description="These are sample appointments. Add them in any order and the nearest one is always served first. The C++ code uses a min-heap for this, the demo simply sorts."
    >
      <form className="demo-queue-form" onSubmit={handleAdd}>
        <label htmlFor="appointment-time">Appointment time</label>

        <input
          type="time"
          id="appointment-time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />

        <button type="submit" className="demo-button">
          Add appointment
        </button>

        <button
          type="button"
          className="demo-button demo-button-outline"
          onClick={handleServe}
          disabled={sortedQueue.length === 0}
        >
          Serve next
        </button>
      </form>

      {sortedQueue.length > 0 ? (
        <ol className="demo-queue">
          {sortedQueue.map((appointment, index) => (
            <li
              key={appointment.id}
              className={index === 0 ? 'is-next' : ''}
            >
              <strong>{appointment.time}</strong>
              <p>Patient {appointment.id}</p>
              {index === 0 && <small>Next</small>}
            </li>
          ))}
        </ol>
      ) : (
        <p className="demo-empty">
          The queue is empty. Add an appointment above.
        </p>
      )}
    </DemoShell>
  )
}

/* ==================================================
   PICKER
================================================== */

function ProjectDemo({ visual }) {
  switch (visual) {
    case 'tic-tac-toe':
      return <TicTacToeDemo />

    case 'number-conversion':
      return <ConversionDemo />

    case 'hospital':
      return <HospitalDemo />

    default:
      return null
  }
}

export default ProjectDemo