const phrases = [
  {
    term: 'Filho da puta',
    description: 'Literally "son of a bitch." Can be used as a heavy insult or playfully between close friends.',
  },
  {
    term: 'Arrombado',
    description: 'A very vulgar term meaning "arsehole" or "motherfucker". Literally someone who has had their anus breached — used to call someone incompetent or a terrible person.',
  },
  {
    term: 'Vagabundo',
    description: 'Usually translates to "lazy bum," "thug," or "good-for-nothing." It can be very insulting depending on context.',
  },
  {
    term: 'Cuzão',
    description: 'Translates roughly to "big arsehole" or "coward." Comes from the word cu (anus).',
  },
  {
    term: 'Porra',
    description: 'One of the most common swear words in Brazil. Literally means "cum," but used exactly like "shit!" or "damn!" in English.',
  },
  {
    term: 'Caralho',
    description: 'Literally means "dick" but mostly used as an exclamation of frustration or amazement — e.g. "Caralho! I can\'t believe it!"',
  },
  {
    term: 'Merda',
    description: 'Direct translation of "shit." Used the same way — to describe something bad or express anger.',
  },
  {
    term: 'Puta que pariu',
    description: 'Literally "where the whore gave birth." The Brazilian equivalent of "holy shit" or "what the fuck".',
  },
  {
    term: 'Vai tomar no cu',
    description: 'Literally "go take it in the arse." A harsh way of saying "go fuck yourself" or "fuck off".',
  },
  {
    term: 'Vá se foder',
    description: 'Literally "go fuck yourself."',
  },
  {
    term: 'Cala a boca',
    description: 'Technically "close your mouth," but with the right tone it becomes "shut the fuck up."',
  },
  {
    term: 'Babaca',
    description: '"Arsehole," "jerk," or "idiot." Milder than arrombado.',
  },
  {
    term: 'Otário',
    description: 'Means "sucker" or "idiot." Frequently used when someone has been easily fooled.',
  },
  {
    term: 'Pela-saco',
    description: 'Literally "something that pulls the hair off your balls." Used to describe a very annoying, arrogant, or boring person.',
  },
  {
    term: 'Corno',
    description: 'Translates to "cuckold." A very common and classic insult in Brazilian banter.',
  },
  {
    term: 'Foda-se',
    description: 'Means "fuck it" — e.g. Eu não ligo, foda-se ("I don\'t care, fuck it").',
  },
  {
    term: 'É foda',
    description: 'Means "that\'s tough" or "that\'s fucking hard."',
  },
  {
    term: 'Do caralho',
    description: 'Used as an amplifier meaning "fucking awesome" or "insane" — e.g. O show foi do caralho ("The show was fucking great").',
  },
]

export default function Page() {
  return (
    <main>
      <h1>Quick Reference Sheet</h1>
      <div className="list">
        {phrases.map((p) => (
          <div key={p.term} className="phrase-row">
            <div className="term">{p.term}</div>
            <div className="description">{p.description}</div>
          </div>
        ))}
      </div>
    </main>
  )
}
