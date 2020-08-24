import React, { useState } from "react"
import Link from 'next/link'
import Autosuggest from 'react-autosuggest'
import fuzzy from 'fuzzy'

import Button from "components/Button"

import Waves from 'assets/waves.svg'

import styles from './index.module.css'
import theme from './autosuggest.module.css'

const suggestionsList = [
  "I want to have an app",
  "I want to have a website",
  "I want to have a bot",
  "I want to have something else",
]

export default () => {
  const [text, setText] = useState("")
  const [suggestions, setSuggestions] = useState(suggestionsList)

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>CONTACT ME</h1>
        <p>Let's have a quick chat!</p>
      </div>
      <div className={styles.form}>
        <h3>
          What do you want to talk about?
        </h3>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={({ value }) => setSuggestions(fuzzy.filter(value, suggestionsList).map(x => x.original))}
          onSuggestionsClearRequested={() => setSuggestions([])}
          getSuggestionValue={x => x}
          renderSuggestion={(suggestion) => <div>{suggestion}</div>}
          inputProps={{
            placeholder: 'I want a...',
            value: text,
            onChange: (e, { newValue }) => setText(newValue)
          }}
          theme={theme}
        />
        <Link href={{ pathname: '/contact-me', query: { about: text } }} passHref>
          <Button>
            Contact
          </Button>
        </Link>
      </div>
      <Waves className={styles.wave} />
    </div>
  )
}
