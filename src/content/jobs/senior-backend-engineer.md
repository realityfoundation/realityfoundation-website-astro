---
title: "Senior Backend Engineer — Provenance Infrastructure"
summary: "Own the pipeline that turns a photograph into a proof."
kind: role
team: Engineering
status: closed
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
datePosted: "2026-07-11"
workingSession: "Ninety minutes pairing on a real problem from our pipeline, or a four-hour take-home — your choice, and we mean that. Paid either way. No whiteboard algorithms, no reversing a linked list."
---

## Your responsibilities

- **Own the certification pipeline, end to end.** Ingest the raw capture and its metadata, canonicalise it, hash it, sign it, anchor it. If it is slow or wrong, it is yours.
- **Design the anchoring layer.** Batching, Merkle trees, chain selection, and the honest trade-off between cost, latency, and finality. There is no free lunch here and we'd rather you say so out loud.
- **Build and run our IPFS layer.** Pinning strategy, redundancy, retrieval guarantees — and a real answer for what happens when a node disappears.
- **Make our certificates emit valid C2PA Content Credentials natively**, and keep us aligned with the spec as it moves under us.
- **Ship the verification API** that insurers wire into their claims systems. It has to be boring, fast, and never wrong.
- **Make it operable.** Observability, SLOs, and an on-call rotation that doesn't ruin anyone's weekend.
- **Work in the open.** The repository is the product. Write code that survives being read by strangers who are hoping to find a flaw.

## What we look for

- 5+ years building backend systems that other people depended on, with real ownership — not just tickets.
- Strong in Go, Rust, TypeScript, or Python, and pragmatic about the rest.
- You have worked with cryptographic primitives — hashing, signatures, key handling — and you know where the sharp edges are.
- Distributed-systems instincts: idempotency, failure modes, replay, and a clear-eyed view of what "immutable" actually costs.
- You think in threat models, not just happy paths.
- You can explain a design decision to someone who will never read the code.

**Useful, not required:** C2PA or content credentials, IPFS or content-addressed storage, on-chain anchoring at scale, enterprise or claims-system integration, open-source maintainership.
