import React, { useState, useRef } from 'react'

const MadlibSlotMachine = () => {
  const [verb,setVerb] = useState("G");
  const [adjective,setAdjective] = useState("A");
  const [noun,setNoun] = useState("Y");
  const [rolling,setRolling] = useState(false);
  let slotRef = [useRef(null), useRef(null), useRef(null)];

  const verbs = [
    "Validating",
    "Summoning",
    "Queering",
    "Giving",
    "Repelling",
    "Healing",
    "Demystifying",
    "Inviting",
    "Softening",
    "Critiquing",
    "Eradicating",
    "Dividing",
    "Testing",
    "Withstanding",
    "Punishing",
    "Trying",
    "Violating",
    "Cancelling",
    "Embracing"
    ]

    const adjectives = [
      "Rhinestone",
      "Butch",
      "Femme",
      "Lipstick",
      "Masc",
      "Metropolitan",
      "Rural",
      "Literary",
      "Indigo",
      "Bootleg",
      "Abdominal",
      "Discount",
      "Second Wave",
      "Hypnotic",
      "Classical",
      "Subcultural",
      "Superstitious",
      "Bicoastal",
      "Choatic"
    ]

    const nouns = [
      "Cowgirls",
      "Cowboys",
      "They/Thems",
      "She/Theys",
      "Babies",
      "Horses",
      "Lesbians",
      "Cabinetry",
      "Theories",
      "Hypotheses",
      "Politics",
      "Sportscars",
      "Poetry",
      "Erasure",
      "Music",
      "Waters",
      "Boundaries",
      "Dissertations",
      "Rave Kids"
    ]
  
  // to trigger roolling and maintain state
  const roll = () => {
    setRolling(true);
    setTimeout(() => {
      setRolling(false);
    }, 700);

    // looping through all 3 slots to start rolling
    slotRef.forEach((slot, i) => {
      // this will trigger rolling effect
      const selected = triggerSlotRotation(slot.current);
      if(i+1 == 1)
        setVerb(selected);
      else if(i+1 == 2)
        setAdjective(selected);
      else 
        setNoun(selected);
     });
  };
  
  // this will create a rolling effect and return random selected option
  const triggerSlotRotation = ref => {
    function setTop(top) {
      ref.style.top = `${top}px`;
    }
    let options = ref.children;
    let randomOption = Math.floor(
      Math.random() * verbs.length
    );
    
    let chosenOption = options[randomOption];
    setTop(-chosenOption.offsetTop + 2);
    return verbs[randomOption];
  };

  return (
      <div className="SlotMachine">
        <div className="slot">
          <section>
            <div className="container" ref={slotRef[0]}>
              {verbs.map((verb, i) => (
                <div key={i}>
                  <span>{verb}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="slot">
          <section>
            <div className="container" ref={slotRef[1]}>
              {adjectives.map(adjective => (
                <div>
                  <span>{adjective}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="slot">
          <section>
            <div className="container" ref={slotRef[2]}>
              {nouns.map(noun => (
                <div>
                  <span>{noun}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div
          className={!rolling ? "roll rolling" : "roll"}
          onClick={!rolling && roll}
          disabled={rolling}>
          {rolling ? "Rolling..." : "ROLL"}
        </div>
      </div>
    ); 
};

export default MadlibSlotMachine