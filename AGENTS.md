# Lion Park Desk Development Instructions

## Permanent workflow

Follow this workflow for all work in this repository:

**START → BUILD → VERIFY → CHECKPOINT → CONTINUE/RECOVER**

Core loop:

> User decides → ChatGPT inspects/plans → implementation → verify → checkpoint

The user is currently using ChatGPT directly as the technical implementation partner when Codex is unavailable. Do not assume Codex is the implementation agent.

## Roles

- **User** — Product Owner and Final Reviewer
- **ChatGPT** — Technical Navigator and current hands-on implementation partner
- **VS Code** — The user's local development workspace, terminal, file inspection, Git review, and human control layer
- **Git Bash** — The user's terminal shell for project and Git commands in VS Code
- **Git/GitHub** — Checkpoints, source of truth, and recovery

## Golden rule

> Unexpected result = STOP → inspect reality → then act.

## Development rules

1. Inspect the actual repository before making changes.
2. Never assume previous work is complete.
3. Work in small, deliberate phases.
4. Do not make unrelated changes.
5. Preserve approved product and visual decisions unless the Product Owner explicitly changes them.
6. After meaningful implementation, verify the result.
7. Only after successful verification create a meaningful Git checkpoint commit.
8. Never commit secrets, credentials, `.env` files, Firebase admin keys, customer data, or other sensitive information.
9. Before pushing, verify the remote and branch.
10. Never push to the original AdminHub repository.
11. When a local Git operation cannot be performed safely, stop and provide the exact Git Bash command for the user.
12. Do not repeatedly attempt the same denied Git operation.
13. Git commands provided to the user must be Git Bash commands.
14. When recovering from another session, inspect Git, files, project structure, and current state before continuing.
15. Do not redesign an approved page merely because an implementation alternative exists.

## Git safety

- `origin` → `https://github.com/gatshaayanda/lion-park-desk.git`
- `adminhub-global` → `https://github.com/gatshaayanda/adminhub-global.git`
- `main` should track `origin/main`.
- `adminhub-global` is the preserved original AdminHub repository.
- Never push Lion Park work to `adminhub-global`.
- The user remains the human control layer for Git operations when local filesystem permissions require it.

## Checkpoint procedure

1. Implement the phase.
2. Verify the result.
3. Review the intended changed files.
4. Ensure no secrets or unrelated changes are included.
5. Commit with a meaningful message.
6. Push to `origin/main` when the user authorizes the checkpoint.
7. Verify the resulting GitHub state.
8. Continue only from the verified checkpoint.

## CONTINUE/RECOVER procedure

1. Inspect `git status`.
2. Inspect `git branch -vv`.
3. Inspect `git remote -v`.
4. Inspect recent Git commits/log.
5. Inspect the actual project structure and relevant files.
6. Identify the last verified checkpoint.
7. Identify DONE / IN PROGRESS / BLOCKED / NOT STARTED.
8. Do not overwrite, revert, or assume anything until the current reality is understood.
9. Report the current state and next safe step.
10. If the next step is clear and authorized, implement it; otherwise wait for authorization.

## Product architecture

Lion Park Desk is the digital platform for **Lion Park Resort — The Beach in the Bush**.

The product has two clearly separated experiences:

### Public Visitor Experience

The public experience is the front door of the product. Visitors should land on the resort experience, not an administrative shell.

Current/target public routes:

- `/` — resort homepage
- `/attractions` — attraction discovery
- `/activities` — water park, rides, lion viewing, quad bikes, family activities
- `/plan-your-visit` — opening information, location, contact, and practical planning
- `/packages` — birthday, school, group, conference, and camping options
- `/book` — booking/enquiry path
- `/contact` — contact, location, and direct-support path

### Staff Experience

The existing staff/admin experience is `/desk` and must remain a separate operational area.

Planned operational areas include visitors, bookings, customers, and operations, but new routes or workflows should only be implemented when explicitly authorized.

Public visitors must not be redirected into the staff/admin shell. Staff functionality must not dominate the public resort homepage.

## Data and backend boundaries

- Firebase/Firestore is the project's backend foundation.
- Public and staff experiences may share the same backend/data state.
- Do not create new operational Firebase collections, CRUD workflows, booking systems, payment systems, or other backend functionality unless explicitly authorized.
- Preserve useful AdminHub infrastructure selectively.
- Do not blindly carry AdminHub legacy functionality into Lion Park Desk.

## Approved visual direction

The public resort experience is predominantly light and must feel like a professional destination/resort product, not a generic SaaS dashboard and not an AdminHub clone.

Design direction:

- warm white / cream surfaces
- near-black typography
- gold primary energy
- orange secondary energy
- cyan/water/activity accents
- dark surfaces reserved for strategic contrast
- professional resort / destination feel

Design hierarchy:

**TOKENS → GLOBAL PRIMITIVES → COMPONENTS → PAGE**

`src/app/globals.css` is the foundational design system and should be treated as a source of truth for the visual language.

## Approved homepage

The current homepage has been visually approved by the Product Owner and is the baseline to preserve.

Approved structure:

1. Resort header
2. Hero — “The Beach in the Bush”
3. Experiences — Water Park, Rides & Adventure, Lion Viewing, Food & Drinks
4. Activity strip
5. Plan Your Day
6. Strategic dark CTA
7. Dark footer

Do not redesign this homepage without explicit Product Owner direction. Future work should extend the approved direction rather than replacing it.

## PWA / install experience

The application includes PWA/service-worker and installation support.

The install prompt is part of the product experience and must follow the Lion Park visual system. When a dark install surface is used, text and controls must have sufficient contrast against that dark surface. Do not reuse dark-on-light text tokens inside dark panels.

## Asset policy

Current public assets include `public/logo.png` and `public/placeholder.png`. Do not claim an asset is an official Lion Park Resort logo or brand asset unless it has been confirmed. Do not invent official imagery or branding.

## Current project status

### DONE

- Lion Park Desk repository established on GitHub
- Permanent development workflow recorded
- Public Visitor Experience established as the product front door
- Staff `/desk` experience retained as a separate area
- Lion Park visual foundation and tokens established
- Approved resort homepage implemented
- Resort header and footer implemented
- Mobile navigation implemented
- Firebase project configuration migrated to Lion Park Desk
- PWA/service-worker/install infrastructure retained
- Homepage checkpoint pushed to `origin/main`
- Install prompt contrast fix pushed to `origin/main`

### IN PROGRESS

- Public visitor route implementation
- Deeper visitor experience beyond the approved homepage
- Production/browser verification across key routes
- Official resort assets/content where confirmed

### BLOCKED

- None currently known

### NOT STARTED

- Full public visitor route set
- Deeper resort content and interactions
- Authorized booking/enquiry workflows
- Additional operational workflows beyond the existing `/desk` area

## Working rule for every next phase

**BUILD → VERIFY → CHECKPOINT.**

If something unexpected appears:

**STOP → inspect reality → fix only the actual problem → verify again.**

Do not make speculative rewrites. Do not change the approved homepage simply to accommodate future functionality. Build outward from the verified foundation.
