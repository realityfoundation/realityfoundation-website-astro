# Careers copy pack — realityfoundation.eu

Everything Claude Code inserts. Use verbatim.

**Two rules for whoever edits this file:** the string "RealityCheck" appears nowhere, ever. And every `<<PLACEHOLDER>>` is a decision you owe, not a typo.

---

## /careers — index page intro

> ### Come and build the proof layer.
>
> We are a small non-profit in Brussels working on a problem that gets harder every month we don't solve it.
>
> Everything below is real: real budget, real scope, real salary band. If none of it fits, the last one is for you.

---

## Shared block — appears as section (a) in all five posts

Put this in **one** component. Do not paste it five times.

> ## About RealityFoundation
>
> RealityFoundation is a non-profit, based in Brussels, building the authenticity layer for digital media.
>
> We certify photos and videos at the moment of capture. The raw media and its metadata are hashed, signed, and anchored to a public blockchain before anything can touch them — so a media record can be **proven** authentic, not merely believed. Our work is open source, built on the C2PA standard, and runs on infrastructure Europe controls.
>
> We do this because the alternative is already arriving. Once synthetic media is indistinguishable from real media, everything unproven becomes deniable — insurance claims, court evidence, journalism, public accountability. Detection is a losing race: it will always be one model behind. Provenance at the origin is the only thing that holds.
>
> We are small, early, and public about our work. The people who join now decide what this becomes.

---

## Shared block — section (d), "What we offer"

Role-specific salary is injected from frontmatter. Everything else is shared.

**Variant 1 — non-profit, no equity (default):**

> ## What we offer
>
> - **{{salary}}**, gross, on a Belgian permanent contract. We publish the band because you shouldn't have to negotiate blind, and because we'd rather spend the interview talking about the work.
> - **Brussels, or remote.** Our home is Brussels and we'd love to see you there — but we hire from anywhere we can legally employ you <<CONFIRM: Belgium only / EU via EOR / other>>. We get everyone in the same room <<X>> times a year and we pay for it.
> - Belgian statutory benefits, plus <<meal vouchers, hospitalisation insurance, group insurance, home-working allowance, mobility budget or full public transport, eco-cheques>>. <<CONFIRM against your joint committee — see prompt file, Decision 4>>
> - <<25>> days off plus Belgian public holidays, and we notice if you don't take them.
> - A real budget for equipment, training, and the conferences that matter — not a token gesture.
> - **Your work is public.** What you build here stays in the open, under your name, and you keep it when you leave.
> - We are a non-profit. There is no cap table and no exit. What we offer instead is that the thing gets built, it stays open, and it stays European. For some people that is worth more than options. If it isn't for you, that's a fair answer and we'd rather know now.

**Variant 2 — if a commercial entity exists (swap the last bullet):**

> - **<<Equity / phantom shares>>** in <<entity>>. We'll show you the numbers — strike price, current valuation, vesting, what happens if you leave — before you sign, not after. <<CONFIRM the structure. If you can't explain it in one paragraph, don't put it on a careers page.>>

---

## Shared block — section (e), "The selection process"

The working session in step 3 changes per role. Everything else is shared.

> ## The selection process
>
> Four steps, about three weeks. You will know where you stand at every one of them.
>
> **1. Application review.** A person reads it — no model screens you out. You hear back within <<10>> working days either way.
>
> **2. Intro call, 30 minutes.** With <<NAME>>. What you want, what we're building, whether the shapes match.
>
> **3. {{working session}}** Paid at <<€X>>. We don't do unpaid take-homes and we don't do puzzle interviews.
>
> **4. The team, 2 × 45 minutes.** With the people you'd actually work with. Then two references.
>
> Decision within <<5>> working days of the last step. If it's a no, we tell you why. We know that's rare. It shouldn't be.

---

# 1. Senior Backend Engineer

```yaml
---
title: "Senior Backend Engineer — Provenance Infrastructure"
summary: "Own the pipeline that turns a photograph into a proof."
kind: role
team: Engineering
status: open
order: 1
locations: ["Brussels", "Remote"]
workMode: hybrid
employmentType: "Full-time, permanent"
salaryMin: 70000
salaryMax: 90000
salaryCurrency: EUR
salaryPeriod: year
applyMode: form
websiteFields: ["linkedin", "github", "scholar", "x"]
datePosted: <<YYYY-MM-DD>>
validThrough: <<YYYY-MM-DD>>
---
```

**[About RealityFoundation — shared block]**

> ## Your responsibilities
>
> - **Own the certification pipeline, end to end.** Ingest the raw capture and its metadata, canonicalise it, hash it, sign it, anchor it. If it is slow or wrong, it is yours.
> - **Design the anchoring layer.** Batching, Merkle trees, chain selection, and the honest trade-off between cost, latency, and finality. There is no free lunch here and we'd rather you say so out loud.
> - **Build and run our IPFS layer.** Pinning strategy, redundancy, retrieval guarantees — and a real answer for what happens when a node disappears.
> - **Make our certificates emit valid C2PA Content Credentials natively**, and keep us aligned with the spec as it moves under us.
> - **Ship the verification API** that insurers wire into their claims systems. It has to be boring, fast, and never wrong.
> - **Make it operable.** Observability, SLOs, and an on-call rotation that doesn't ruin anyone's weekend.
> - **Work in the open.** The repository is the product. Write code that survives being read by strangers who are hoping to find a flaw.
>
> ## What we look for
>
> - 5+ years building backend systems that other people depended on, with real ownership — not just tickets.
> - Strong in Go, Rust, TypeScript, or Python, and pragmatic about the rest.
> - You have worked with cryptographic primitives — hashing, signatures, key handling — and you know where the sharp edges are.
> - Distributed-systems instincts: idempotency, failure modes, replay, and a clear-eyed view of what "immutable" actually costs.
> - You think in threat models, not just happy paths.
> - You can explain a design decision to someone who will never read the code.
>
> **Useful, not required:** C2PA or content credentials, IPFS or content-addressed storage, on-chain anchoring at scale, enterprise or claims-system integration, open-source maintainership.

**[What we offer — shared block]**

**[Selection process — shared block, with:]**

> **3. A working session.** Ninety minutes pairing on a real problem from our pipeline, or a four-hour take-home — your choice, and we mean that. Paid either way. No whiteboard algorithms, no reversing a linked list.

---

# 2. Security Engineer

```yaml
---
title: "Security Engineer — Applied Cryptography"
summary: "If our certificate can be forged, nothing else we do matters."
kind: role
team: Security
status: open
order: 2
locations: ["Brussels", "Remote"]
workMode: hybrid
employmentType: "Full-time, permanent"
salaryMin: 75000
salaryMax: 95000
salaryCurrency: EUR
salaryPeriod: year
applyMode: form
websiteFields: ["linkedin", "github", "scholar", "x"]
datePosted: <<YYYY-MM-DD>>
validThrough: <<YYYY-MM-DD>>
---
```

**[About RealityFoundation — shared block]**

> ## Your responsibilities
>
> - **Own the trust model.** Every claim we make about a media record rests on it. This is the job.
> - **Design key management and signing.** Device attestation, hardware-backed keys, rotation, revocation, HSM and KMS.
> - **Threat-model the capture path, end to end.** Rooted devices, emulators, injected camera feeds, replay, re-photography, screen capture. Then break it yourself, before someone with a motive does.
> - **Build the adversarial test suite** that attacks our own pipeline continuously, and keep it in CI where it can fail a build.
> - **Take us through the assurance our buyers demand** — <<ISO 27001 / SOC 2>>, plus the NIS2- and DORA-shaped diligence that arrives with every insurance contract.
> - **Run coordinated disclosure and external audits.** In public, with the findings published.
> - **Show up where the standards are still being written** — C2PA, and the eIDAS trust frameworks around it. Better to shape the rule than to comply with it.
>
> ## What we look for
>
> - 4+ years in security engineering, appsec, or applied cryptography.
> - Hands-on with PKI, signing infrastructure, key management, secure enclaves, or mobile attestation (Play Integrity, App Attest).
> - You have threat-modelled a system with a funded, motivated adversary — and explained the model to a non-technical decision-maker without losing them.
> - You can read a specification and find what it doesn't say.
> - You are comfortable with a security model that has to survive publication. Obscurity is not available to us and we wouldn't want it.
>
> **Useful, not required:** mobile or camera-pipeline security, C2PA, published research or CVEs, ISO 27001 / SOC 2 audit experience, familiarity with NIS2, DORA, or eIDAS.

**[What we offer — shared block]**

**[Selection process — shared block, with:]**

> **3. A working session.** We hand you our capture-to-certificate flow and three hours. You tell us how you would defeat it. Paid, and we act on what you find — whether or not we hire you.

---

# 3. Account Executive, Insurance

```yaml
---
title: "Account Executive — Insurance (Europe)"
summary: "First commercial hire. Six heads of claims already told us they want this. Go and sell it."
kind: role
team: Commercial
status: open
order: 3
locations: ["Brussels", "Remote"]
workMode: hybrid
employmentType: "Full-time, permanent"
salaryMin: 55000
salaryMax: 70000
salaryCurrency: EUR
salaryPeriod: year
salaryNote: "base, plus uncapped variable — OTE <<€85,000 – €110,000>>"
applyMode: form
websiteFields: ["linkedin", "x"]
datePosted: <<YYYY-MM-DD>>
validThrough: <<YYYY-MM-DD>>
---
```

**[About RealityFoundation — shared block]**

> ## Your responsibilities
>
> - **Own the insurance pipeline, cold to closed.** European non-life insurers, and the claims, fraud, and SIU teams inside them.
> - **Run discovery that finds the actual pain.** How many image-heavy claims a year. What the current fraud review costs, in headcount and in days. Where altered evidence is already getting through, and what that is worth.
> - **Navigate the buying committee.** Claims operations, fraud, IT, security, procurement, and the data protection officer can all say no. Only one of them can say yes.
> - **Turn design partners into paying customers**, and paying customers into references we are allowed to name.
> - **Bring the objections home.** You will hear them months before engineering does. That intelligence is half the job.
> - **Write the playbook.** You are the first commercial hire. Whatever you write down becomes how we sell.
>
> ## What we look for
>
> - 4+ years closing complex B2B deals into insurance, financial services, or another regulated enterprise buyer.
> - You are honest about cycle length, and you forecast like it.
> - You can explain a cryptographic guarantee to a head of claims without hiding behind the word "blockchain".
> - You survive a security review with the CISO in the room.
> - Fluent English. A second European language — French, Dutch, German, Italian, Spanish — is a genuine advantage in this market, not a box to tick.
> - **You are comfortable selling something early.** You will be asked for a reference customer before we have ten. If that prospect makes you uneasy rather than interested, this isn't the seat.
>
> **Useful, not required:** claims fraud or SIU domain knowledge, InsurTech, prior first-AE experience, an existing network in European non-life.

**[What we offer — shared block]**

**[Selection process — shared block, with:]**

> **3. A working session.** A live discovery call: we play a regional head of claims at a European non-life insurer, and you run the meeting. Sixty minutes, paid. Then a one-page territory plan we talk through together — we are not marking you on the formatting.

---

# 4. Strategy Lead

```yaml
---
title: "Strategy Lead"
summary: "Turn the European rulebook into a plan, and a market into a number that survives scrutiny."
kind: role
team: Strategy
status: open
order: 4
locations: ["Brussels", "Remote"]
workMode: hybrid
employmentType: "Full-time, permanent"
salaryMin: 70000
salaryMax: 90000
salaryCurrency: EUR
salaryPeriod: year
applyMode: form
websiteFields: ["linkedin", "x", "scholar"]
datePosted: <<YYYY-MM-DD>>
validThrough: <<YYYY-MM-DD>>
---
```

**[About RealityFoundation — shared block]**

> ## Your responsibilities
>
> - **Own the "why now".** Keep the market model, the competitive map, and the regulatory thesis sharp enough to survive a hostile question from a sceptical investor — or a sceptical regulator.
> - **Translate the rulebook into strategy.** EU AI Act Article 50, eIDAS, EMFA, DSA, NIS2, DORA. Tell us which doors each one opens, and when, and which are noise.
> - **Build and defend the sizing.** Top-down and bottom-up, reconciled, every assumption visible, every soft number labelled as soft. We would rather have a defensible €2bn than an indefensible €20bn.
> - **Represent us where the standard is still being decided** — C2PA, the EU institutions, standards bodies, industry coalitions. Being in the room early is worth more than being right late.
> - **Support fundraising.** The narrative, the materials, the diligence.
> - **Choose the vertical after insurance.** Make the case with numbers, and be willing to be wrong about it in front of everyone.
>
> ## What we look for
>
> - 4+ years in strategy consulting, corporate strategy, EU policy, or an operating strategy role at an early-stage company.
> - You build models from primary sources, not from a competitor's press release.
> - You know how the EU regulatory machine actually works — or you can get there fast, and you say plainly what you don't know yet.
> - Your writing is short, structured, and honest about uncertainty.
> - **You are comfortable being the person who says the number is wrong**, including when it is our number, and including when it is in a deck that has already been shown to someone important.
>
> **Useful, not required:** insurance or financial services, digital and AI policy, standards bodies, prior start-up experience, a second European language.

**[What we offer — shared block]**

**[Selection process — shared block, with:]**

> **3. A working session.** A one-page memo: *which non-insurance vertical should we enter in 2027, and what would have to be true for that to be a mistake?* No template, no deck, no appendix. One page. Paid. We discuss it with you rather than marking it, and you should expect to be argued with — that is the exercise, not a hazing ritual.

---

# 5. Expression of Interest

> **Note:** `applyMode: email`. This one has **no apply button** and **no questionnaire page** — deliberately. It isn't a vacancy, and dressing it up as one is how a "we're always hiring" page turns into the place applications go to die. No salary chip, no JSON-LD, no `/apply` route. A mailto, and a real promise to reply.

```yaml
---
title: "Expression of Interest"
summary: "None of the above? Tell us what we're missing."
kind: open
team: Open
status: open
order: 5
locations: ["Brussels", "Remote"]
workMode: hybrid
employmentType: "Open"
applyMode: email
applyEmail: "<<careers@realityfoundation.eu>>"
datePosted: <<YYYY-MM-DD>>
---
```

> ## We are always looking for people who are unreasonably good at something we need.
>
> The roles above are the ones we already know how to describe. They are not the only ones we need. If none of them is yours, this is the door.
>
> We would especially like to hear from:
>
> - **mobile engineers** who have lived inside a camera pipeline, on iOS or Android
> - **designers** who can make cryptography feel trustworthy without lying about what it does
> - **policy and standards people** who know how a norm actually gets written
> - **media-forensics and ML researchers**
> - **open-source and community maintainers**, because our repository is our product
> - and people whose job title we haven't thought of yet
>
> ### What to send
>
> Email **<<careers@realityfoundation.eu>>**. No form, no portal, no account to create.
>
> - Who you are, in your own words. Not a cover letter — we can tell.
> - What you would want to own here, and why it matters.
> - Something you made. Code, writing, a product, a paper, a campaign. Anything with your fingerprints on it.
>
> ### What happens next
>
> We read everything. We reply to everything within <<15>> working days, including when the answer is no.
>
> If the fit is now, we will say so. If the fit is later, we will tell you that too — and we will come back to you when it's true.
>
> <small>We keep what you send for <<X>> months, then delete it. [How we handle your data](<<link to the privacy notice>>).</small>

---
---

# Application form copy

## Page

**H1:** `{{ job.title }}` *(the role name — not "Apply", not "Application form")*

---

## Section — Personal information

> ### Personal information

| Field | Label | Required | Notes |
|---|---|---|---|
| name | Name | ✓ | |
| email | Email | ✓ | validated |
| phone | Phone | | |
| resume | Resume | ✓ | file upload |
| location | Current location | | |
| title | Current title | | |
| company | Current company | | |

**Upload zone copy:**
> **Upload file**
> or drag and drop here
>
> <small>PDF, DOC, or DOCX. Up to <<10>> MB.</small>

---

## Section — Websites

> ### Websites
>
> All optional. Send us what's actually worth looking at, and skip the rest.

`LinkedIn` · `X / Twitter` · `GitHub` · `Google Scholar` · `Design portfolio`

*(Render only the fields listed in the role's `websiteFields`.)*

---

## Section — Open question

> ### Anything you would like to share with us?
>
> Optional. There is no right answer and no length we're looking for.

---

## Section — Privacy notice + consent

Sits directly above the submit button. Every placeholder is yours to fill.

> ### How we handle your application
>
> <<RealityFoundation ASBL/AISBL, address, 1000 Brussels, Belgium>> is the controller of the personal data you submit here.
>
> **Why we process it.** To assess your application — GDPR Art. 6(1)(b), steps taken at your request before entering a contract. And, if you tick the second box below, to consider you for future roles — Art. 6(1)(a), consent.
>
> **How long we keep it.** <<X>> months after we reach a decision, then we delete it. If you join our talent pool: <<24>> months, and you can withdraw at any moment without giving a reason.
>
> **Where it lives.** In the EU, on infrastructure we control. <<CONFIRM once the backend is chosen — and if the answer turns out to be a US-hosted ATS, change the backend, not this sentence.>>
>
> **No automated screening.** A person reads your application. No model decides whether you move forward.
>
> **Your rights.** Access, correction, deletion, portability, objection: <<privacy@realityfoundation.eu>>. You can also lodge a complaint with the Belgian Data Protection Authority (Gegevensbeschermingsautoriteit / Autorité de protection des données).

**Checkboxes** — both unticked by default:

- `[ ]` **I've read the above and I'm applying on that basis.** *(required)*
- `[ ]` Keep my application on file for future roles. *(optional)*

---

## Section — Diversity survey

> **Read the note at the bottom of this file before shipping either variant.**

### Intro copy (both variants)

> ### Diversity survey
>
> Optional, and separate from your application.
>
> This is not shown to anyone deciding on your application. It is not linked to your name, your email, or anything else you submitted. Skipping it changes nothing, and we will never know that you skipped it.
>
> We ask because we want to know whether our hiring is actually reaching the people we think it's reaching. The answers are only ever looked at in aggregate.
>
> `[ Skip this survey ]`

### Variant A — `eu-minimal` (default, recommended)

**1. What is your current age?**
- Under 30
- 30–39
- 40–49
- 50–59
- 60 or older
- I prefer not to answer

**2. What is your gender identity?**
- Woman
- Man
- Another gender identity
- I prefer not to answer

**3. Were you the first person in your family to attend university?**
- Yes
- No
- Not applicable
- I prefer not to answer

*(Question 3 is a socio-economic diversity signal. It is not a GDPR Art. 9 special category, which is the whole point of it being there instead of an ethnicity question.)*

### Variant B — `us-style` (your original set, hardened)

Only ship this after a Belgian employment lawyer has signed it off. If you do:

**Additional consent gate, shown before the questions:**

> The next question asks about ethnic origin. Under the GDPR this is a special category of personal data, and we cannot process it without your explicit, separate consent. You can answer the other questions without answering this one, and you can skip the survey entirely.
>
> `[ ]` I explicitly consent to RealityFoundation processing my response to the ethnicity question for aggregate diversity monitoring only.

**1. What is your current age?** — as Variant A

**2. What is your gender identity?**
- Man
- Woman
- Another gender identity
- I prefer not to answer

**3. Which ethnicity(ies) do you identify with? Please select all that apply.**
- Asian or Asian American
- Black or African American
- Caucasian
- Hispanic or Latine
- Indigenous or Native American
- Native Hawaiian or Other Pacific Islander
- Other
- I prefer not to answer

---
---

# Note on the diversity survey — read this

I have built you both, but I want to be direct about why the default is Variant A.

The question set you pasted is a US EEOC-style survey. It comes from an American applicant tracking system, and it carries American assumptions with it. Two problems in Brussels:

**The categories don't mean anything here.** "Caucasian" and "Native Hawaiian or Other Pacific Islander" are US Census constructs. A Belgian, French, or Italian applicant will read those options and conclude, reasonably, that you copy-pasted your careers page from a US template. For a foundation whose entire pitch is European sovereignty and doing things the European way, that is an unforced own goal on the one page where candidates are specifically judging whether you're serious.

**And ethnic origin is a GDPR Art. 9 special category.** Processing it is prohibited by default. Explicit consent is a lawful basis in principle — but in an employment context, regulators have long taken the view that consent is rarely "freely given", because the applicant is not in a position to say no to a prospective employer. Belgium is not a jurisdiction that treats ethnic monitoring as routine the way the UK does under the Equality Act.

So: Variant A by default. If you want the ethnicity data badly enough — for a funder, or for benchmarking — ship Variant B, but only with the explicit consent gate, only with genuinely decoupled submission, and only after a lawyer has looked at it.

Two things that must be true either way, or the survey is worse than not having one:

1. **The decoupling has to be real.** Separate endpoint, separate request, no application ID, no email, no name, no shared token, no timestamp precise enough to join on. If the survey rides along in the same payload as the CV, your notice is a false statement, and a false statement in a GDPR notice is a worse problem than no survey.
2. **You have to actually look at the data.** If nobody ever runs the aggregate, you have collected special-category personal data for nothing, which is exactly the thing the regulation exists to prevent.

I'm not a lawyer and this isn't legal advice — get a Belgian employment lawyer to review this page before it goes live, along with the salary bands and the joint-committee question.
