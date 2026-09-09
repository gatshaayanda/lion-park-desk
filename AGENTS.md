# Lion Park Desk Development Instructions

## Permanent workflow

Follow this workflow for all work in this repository:

**START → BUILD → VERIFY → CHECKPOINT → CONTINUE/RECOVER**

Core loop:

> User decides → ChatGPT inspects/plans → Codex implements → verify → checkpoint

## Roles

- **User** — Product Owner and Final Reviewer
- **ChatGPT** — Technical Navigator
- **Codex** — Hands-on Implementation Agent
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
5. After meaningful implementation, verify the result.
6. Only after successful verification create a meaningful Git checkpoint commit.
7. Never commit secrets, credentials, `.env` files, Firebase admin keys, customer data, or other sensitive information.
8. Before pushing, verify the remote and branch.
9. Never push to the original AdminHub repository.
10. When recovering from another Codex session, inspect Git, files, project structure, and current state before continuing.

## Git safety

- `origin` → `https://github.com/gatshaayanda/lion-park-desk.git`
- `adminhub-global` → `https://github.com/gatshaayanda/adminhub-global.git`
- `main` should track `origin/main`.
- `adminhub-global` is the preserved original AdminHub repository.
- Never push Lion Park work to `adminhub-global`.
- When Codex cannot perform a Git operation because of local Windows permissions or ACL restrictions, Codex must stop and provide the exact Git Bash command(s) for the user to run manually.
- Codex must not repeatedly attempt the same denied `.git` operation.
- Git commands provided to the user must be written as Git Bash commands.
- The user remains the human control layer for Git operations when Codex lacks filesystem permission.

## Checkpoint procedure

Follow this procedure within the permanent workflow:

1. Implement the phase.
2. Verify the result.
3. Codex attempts the checkpoint operation if permissions allow.
4. If Codex lacks permission, stop.
5. Give the user the exact Git Bash command(s).
6. The user runs them in VS Code Git Bash.
7. Codex verifies the resulting state.
8. Only then continue.

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
10. Wait for authorization before implementing if the recovery state is unclear.

## Lion Park Desk direction

- This is a resort operations application.
- Owner/Staff Desk is the internal operational experience.
- Visitor View is the public experience.
- Both experiences share the same Firebase data and state.
- Build Owner/Staff Desk first, then Visitor View.
- Preserve useful AdminHub infrastructure selectively.
- Do not blindly carry AdminHub legacy functionality into Lion Park Desk.
