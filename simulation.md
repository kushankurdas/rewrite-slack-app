# How this prompt will handle real scenarios

Here is a breakdown of how this specific prompt will transform common **"messy"** inputs.

## Scenario 1: The "Ramble"

### User Input:
> hey guys just wanted to say that i pushed the fix for the login bug but i had to change the api endpoint slightly so check the docs here http://docs.link/api/v2 and let me know if it breaks anything thanks

### AI Output (using your prompt):
I've pushed the fix for the login bug.  
Note that I had to slightly change the API endpoint; please check the docs here: http://docs.link/api/v2.

Let me know if this causes any issues.


## Scenario 2: The "Passive Aggressive" / Frustrated

### User Input:
> seriously why is nobody checking the logs?? the server is crashing every 5 mins and i am the only one looking at it. someone needs to look at this now.

### AI Output (using your prompt):
The server is crashing every 5 minutes.  
Could someone else please check the logs and assist? This needs immediate attention.


## Scenario 3: The "Technical List"

### User Input:
> update on the project:
>
> db migration is done  
> backend api is pending review  
> @sarah needs to check the frontend assets at /images/logo.png

### AI Output (using your prompt):

**Project Update:**

- DB migration is complete.
- Backend API is pending review.
- @sarah needs to check the frontend assets at `/images/logo.png`.
