# Slack `/rewrite` App — UAT Simulation & Edge Cases

This document contains real-world Slack message scenarios used to validate the `/rewrite` command before opening it to everyone.

Each scenario includes:
- Raw **User Input**
- Expected **AI-Rewritten Output**


## Scenario 1: The “Ramble”

### User Input
> hey guys just wanted to say that i pushed the fix for the login bug but i had to change the api endpoint slightly so check the docs here http://docs.link/api/v2 and let me know if it breaks anything thanks

### Expected Output
I've pushed the fix for the login bug.  
Note that I had to slightly change the API endpoint; please check the docs here: http://docs.link/api/v2.

Let me know if this causes any issues.



## Scenario 2: Passive Aggressive / Frustrated

### User Input
> seriously why is nobody checking the logs?? the server is crashing every 5 mins and i am the only one looking at it. someone needs to look at this now.

### Expected Output
The server is crashing every 5 minutes.  
Could someone else please check the logs and assist? This needs immediate attention.



## Scenario 3: Technical List

### User Input
> update on the project:
>
> db migration is done  
> backend api is pending review  
> @sarah needs to check the frontend assets at /images/logo.png

### Expected Output
**Project Update:**

- DB migration is complete.
- Backend API is pending review.
- @sarah needs to check the frontend assets at `/images/logo.png`.



## Scenario 4: Overly Blunt / Rude

### User Input
> this is broken. api is trash. whoever wrote this clearly didnt test anything.

### Expected Output
The API is currently broken and appears not to have been tested thoroughly.  
Could we review and fix the issues as soon as possible?



## Scenario 5: Too Polite / Vague

### User Input
> sorry to bother but just wondering if maybe someone could possibly take a look at the prod issue when they have time no rush

### Expected Output
Could someone take a look at the production issue when possible?  
There’s no immediate rush, but assistance would be appreciated.



## Scenario 6: Mixed Emotions (Frustrated but Professional)

### User Input
> i’ve followed the doc exactly, still auth is failing. not sure what else to try at this point.

### Expected Output
I’ve followed the documentation exactly, but authentication is still failing.  
I’m not sure what else to try—any guidance would be helpful.



## Scenario 7: Multiple Mentions + Action Items

### User Input
> @john api is deployed  
> @sarah frontend still points to old base url  
> can one of you fix this today pls

### Expected Output
**Update:**

- @john: The API has been deployed.
- @sarah: The frontend is still pointing to the old base URL.

Could one of you please address this today?



## Scenario 8: Command-like / Authoritative Tone

### User Input
> deploy this now. we can’t delay anymore. handle rollback if things go wrong.

### Expected Output
Please deploy this now—we can’t afford further delays.  
Ensure a rollback plan is in place in case of issues.



## Scenario 9: Casual Slang + Typos

### User Input
> pushed a quick fix, pls chk if its wrkn fine on ur end

### Expected Output
I’ve pushed a quick fix.  
Please check if it’s working correctly on your end.



## Scenario 10: Wall of Text / Incident Summary

### User Input
> so what happened was the cron ran twice because the lock didn’t exist and then the retries kicked in and that caused duplicate rows and prod slowed down a lot so i disabled it for now

### Expected Output
Here’s what happened:

- The cron ran twice due to a missing lock.
- Retries were triggered, causing duplicate rows.
- Production performance degraded as a result.

I’ve disabled the cron for now.



## Scenario 11: Sensitive Feedback (Avoid Blame)

### User Input
> this keeps happening because no one documents these changes properly

### Expected Output
This issue may be recurring due to insufficient documentation around recent changes.  
Improving documentation could help prevent this going forward.



## Scenario 12: Question With Missing Context

### User Input
> is this expected behavior or a bug?

### Expected Output
Is this expected behavior, or could this be a bug?  
Any additional context would help clarify.



## Scenario 13: Emoji-heavy Slack Message

### User Input
> prod is down again 😓🔥 pls help asap 🙏

### Expected Output
Production is down again.  
Could someone please help as soon as possible?



## Scenario 14: Tech + Business Impact

### User Input
> auth0 rate limit hit again, this blocks customer onboarding which is bad for sales

### Expected Output
Auth0 rate limits were hit again, blocking customer onboarding.  
This is impacting sales and needs to be addressed.



## Scenario 15: Direct Blame (“You” Language)

### User Input
> you broke the deployment yesterday

### Expected Output
The deployment broke yesterday.  
Let’s identify what went wrong and fix it.



## Scenario 16: Already Clean Message (No Rewrite Needed)

### User Input
> Deployment completed successfully. Monitoring for any issues.

### Expected Output
Deployment completed successfully.  
Monitoring for any issues.



## Scenario 17: Code Snippet Preservation

### User Input
> updated config
> ```
> ENABLE_AUTH=false
> RETRY_COUNT=3
> ```
> pls confirm if ok

### Expected Output
I’ve updated the configuration:
```aiignore
ENABLE_AUTH=false
RETRY_COUNT=3
```
Please confirm if this looks okay.



## Scenario 18: Mild Sarcasm

### User Input
> yeah looks great, crashing on startup 👍

### Expected Output
The application is currently crashing on startup.  
This needs to be fixed.



## Scenario 19: Deadline-driven Request

### User Input
> need review on this PR before 6pm or release gets pushed

### Expected Output
I need a review on this PR before 6 PM; otherwise, the release will be pushed.



## Scenario 20: Hyperbolic / Unsafe Language

### User Input
> this bug is killing us

### Expected Output
This bug is causing significant issues for us and needs urgent attention.



## UAT Acceptance Checklist

- Tone is professional and neutral
- Meaning and urgency are preserved
- Mentions (`@user`) remain intact
- URLs and code blocks are not altered
- Emojis and slang are removed carefully
- Clean messages are not over-processed
- Blame language is neutralized

