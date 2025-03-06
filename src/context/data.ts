import { createContext } from "react"
export type Entry = {
    pos: string,
    sense: string[],
    example?: string[],
    synonyms?: string[],
}
export type WordData = {
    word: string,
    pronounce: string,
    entry: Entry[],
    source: string,
}
export type WordDataContext = {
    activeEntryId: number,
    data: WordData[],
}

export const mockData: WordData[] = [
    {
        word: 'keyboard',
        pronounce: `/ˈkiːbɔːd/`,
        source: `https://en.wiktionary.org/wiki/keyboard`,
        entry: [
            {
                pos: 'noun',
                sense: [
                    `(etc.) A set of keys used to operate a typewriter, computer etc.`,
                    `A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.`,
                    `A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.`,
                ],
                synonyms: [`electronic keyboard`]
            },
            {
                pos: 'verb',
                sense: [
                    `To type on a computer keyboard`
                ],
                example: [
                    `Keyboarding is the part of this job I hate the most.`
                ]
            }
        ]
    },
    {
        word: 'run',
        pronounce: `/rən/`,
        source: `https://www.google.com/search?client=firefox-b-1-d&q=run+definition`,
        entry: [
            {
                pos: 'verb',
                sense: [
                    `move at a speed faster than a walk, never having both or all the feet on the ground at the same time`,
                    `pass or cause to pass quickly or smoothly in a particular direction`,
                    `A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.`,
                ],
                synonyms: [`race`],
                example: [`the dog ran across the road`]
            },
            {
                pos: 'noun',
                sense: [
                    `an act or spell of running`,
                    `a journey accomplished or route taken by a vehicle, aircraft, or boat, especially on a regular basis.`,
                ],
                example: [
                    `I usually go for a run in the morning.`
                ]
            }
        ]
    },
    {
        word: 'race',
        pronounce: `/rās/`,
        source: `https://www.google.com/search?client=firefox-b-1-d&sca_esv=71fa22d63362fc25&sxsrf=AHTn8zqmrdDcGuVssC8IwnQ6oiBAq2yOzQ:1741106706562&q=define+race&si=APYL9buwICigXnQQU1DnwuEtdOixRNogJfhUGr7k34OK6YecjIqNaq0onPUNJ0IVyzokboo_2uk9xkDumx7uOrWHIa-u3P3QPw%3D%3D&expnd=1`,
        entry: [
            {
                pos: 'noun',
                sense: [
                    `a competition between runners, horses, vehicles, boats, etc., to see which is the fastest in covering a set course.`,
                    `a strong or rapid current flowing through a narrow channel in the sea or a river.`,
                ],
                example: [`I won the first 50-lap race`],
                synonyms: [`run`]
            },
            {
                pos: 'verb',
                sense: [
                    `compete with another or others to see who is fastest at covering a set course or achieving an objective.`,
                    `move or progress swiftly or at full speed.`
                ],
                example: [
                    `I raced to the house.`
                ],
            }
        ]
    }
]

const DataContext = createContext<WordDataContext>({
    activeEntryId: 0,
    data: [],
})
export default DataContext