import assert from 'node:assert/strict'
import { dossierMeta, heroFacts, profile, work } from '../src/data/content.js'

assert.equal(profile.currentRole, 'IT Security Analyst, Risk & Compliance')
assert.equal(profile.currentOrg, 'Texas Instruments')
assert.equal(profile.currentSince, 'July 2026')
assert.equal(profile.location, 'Dallas, TX')
assert.equal(profile.school, 'Purdue University, graduated May 2026')
assert.equal(profile.nextOrg, undefined)
assert.deepEqual(heroFacts.at(0), { label: 'Current role', value: 'Texas Instruments' })
assert.deepEqual(heroFacts.at(1), { label: 'Graduated', value: 'Purdue · May ’26' })
assert.deepEqual(dossierMeta.at(2), {
  label: 'Education',
  value: 'Purdue University · Graduated 05/2026'
})
assert.deepEqual(dossierMeta.at(4), {
  label: 'Current role',
  value: 'Texas Instruments · 07/2026–Present'
})

const currentRole = work.at(0)
assert.equal(currentRole.role, 'IT Security Analyst, Risk & Compliance')
assert.equal(currentRole.period, '07/2026 — Present')
assert.equal(currentRole.incoming, undefined)

const projectByOrganization = (organization) =>
  work.find((item) => item.organization === organization)

const pepsico = projectByOrganization('PepsiCo')
assert.ok(pepsico, 'PepsiCo project is present')
assert.equal(pepsico.context, undefined)
assert.doesNotMatch(pepsico.points.join(' '), /prediction accuracy by 25%/i)
assert.deepEqual(pepsico.evidence, [
  {
    label: 'Official project page',
    url: 'https://datamine.purdue.edu/pepsico/'
  },
  {
    label: '2025 symposium poster',
    url: 'https://datamine.purdue.edu/posters/TDM_Symposium2025_Poster_PepsiCo_EnvironmentalRisks.pdf'
  }
])

const johnDeere = projectByOrganization('John Deere')
assert.ok(johnDeere, 'John Deere project is present')
assert.equal(johnDeere.context, undefined)
assert.equal(
  johnDeere.evidence.at(-1)?.url,
  'https://datamine.purdue.edu/wp-content/uploads/2024/07/TDM_Symposium2024_Poster_JohnDeere_Soil_Moisture.pdf'
)

console.log('Corporate-partner project evidence is accurate and linked.')
