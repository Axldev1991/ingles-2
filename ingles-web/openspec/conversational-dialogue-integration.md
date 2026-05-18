# Specification: Conversational Dialogue Integration ("El Lado Humano")

## Goal
Enrich all modular academic topics across Units 1, 2, and 3 with real-world conversational examples ("El Lado Humano: Slack & Daily Standups") to teach professional communication skills alongside formal grammar prep.

## Delivery Strategy
- **Mode:** Automatic
- **Artifact Store:** Hybrid (Engram + OpenSpec)
- **Review Workload:** Small-sized changes applied topic by topic using reactive modular files.

## Content Map

### Unit 1: Technology & Specs
- **compilers.js:** Professional clarification: *"Sorry, I didn't catch that. Could you explain it in lay terms?"*
- **reading.js:** Technology opinions: *"In my opinion, we should go with Python because it has a rich library ecosystem."*
- **infinitive.js:** Explaining intent with infinitives and causatives: *"I'm going to refactor the auth module. Let me know if you need anything."*
- **ing_form.js:** Tasks in progress vs. process names: *"I am currently debugging the connection pool."* vs. *"Coding in Go is satisfying."*
- **modals.js:** Prioritization & friendly reviews in PRs: *"We should refactor this..."* (soft) vs. *"We must patch this SQL injection..."* (hard).
- **relative_clauses.js:** Explaining specific bugs: *"The library that we imported yesterday is causing a memory leak."*
- **revision_capstone.js:** Peer praise and milestone completion: *"Great job on the deployment! You made it look easy."*

### Unit 2: Game Development & AI Support
- **game_genres.js:** Expressing performance issues: *"We are experiencing a lot of lag in the staging environment."*
- **perfect_tenses.js:** Expressing standup progress: *"I have been working on this PR all day. By Friday, I will have deployed the dashboard."*
- **reading.js:** Diplomatic customer service: *"I managed to pacify the client by promising a hotfix by tomorrow noon."*
- **language_work.js:** Status reports: *"I have already migrated the database, and now I have been configuring variables."*
- **active_passive.js:** Telemetry and system notifications: *"The critical vulnerability has been patched successfully."*
- **grammar.js:** Blameless infrastructure upgrades: *"The staging servers have been upgraded to Node 20."* (Voz pasiva blameless).
- **word_building.js:** Semantic precision in code review: *"The main difference is that this library is highly efficient."*
- **revision_capstone.js:** End of sprint optimism: *"Everything has been resolved successfully. We are ready for launch!"*

### Unit 3: History of UTN FRA
- **history.js:** Tech-heritage explanations: *"This codebase was originally written in 2018 when the company relied on monoliths."*
- **passive_voice.js:** Blameless post-mortem incident report: *"The backup server was shut down due to high CPU temperature."*
- **reading.js:** Sharing professional academic background: *"I graduated from UTN FRA, which was founded in 1955."*
- **passive_voice_lw.js:** System logging / Slack alerts: *"A new pull request was opened by @axldev."*
- **past_perfect.js:** Root-cause post-mortem analysis: *"The database crashed because a developer had dropped the index before the migration ran."*
- **past_perfect_lw.js:** Chronicling a failed deploy: *"We had already completed the testing phase when the production API went down."*
- **revision_capstone.js:** Closing a Slack channel / project wrap-up: *"All deliverables were met on time. Thanks to everyone who had contributed before the deadline!"*

## Tasks
1. Update `src/data/units/unit1/*.js`
2. Update `src/data/units/unit2/*.js`
3. Update `src/data/units/unit3/*.js`
4. Verify Vite server compilation & execution.
