---
description: "Build and deploy the site to production (buba)"
agent: build
---

You are deploying the current changes to production (rubenhutter.ch on buba). Follow these steps exactly:

## 1. Pre-flight checks
Verify the build works locally:
- `npm run build`

If the build fails, STOP and report errors — do not proceed.

## 2. AI code review
Invoke the `@reviewer` subagent on the staged diff. Pass it all changed files so it can review for security issues, code quality, and best practices.

- If the reviewer returns **FAIL**: STOP and report the issues to the user. Do not proceed until the user confirms the issues are acceptable or have been fixed.
- If the reviewer returns **PASS**: proceed to the next step.

## 3. Commit
- Run `git status` and `git diff` to see all changes
- Stage all relevant files (`git add`)
- Write a concise commit message in **English**, imperative mood
- If no changes are staged, report that and stop

## 4. Push
- Push to origin master: `git push origin master`
- If the push fails, report the error and stop

## 5. Deploy to buba
SSH into buba and run the deploy script:
```bash
ssh buba "cd ~/portfolio && git pull && npm ci --omit=dev && npm run build"
```

If the deploy fails, report the error and stop.

## 6. Verify
Check that the site is responding:
```bash
curl -s -o /dev/null -w "%{http_code}" https://rubenhutter.ch
```

## 7. Report
- Confirm the deployment was successful
- Report what was deployed to production

IMPORTANT: Never force push. Never use --no-verify. If anything fails, stop and report.
