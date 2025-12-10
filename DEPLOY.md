# Deployment Instructions

It seems that `git` is not installed or configured in your system's PATH, so I couldn't automatically push the code to GitHub.

## Steps to Deploy

1. **Install Git**: Download and install Git from [git-scm.com](https://git-scm.com/downloads) if you haven't already.
2. **Open Terminal**: Open a terminal (Command Prompt or PowerShell) in this project folder:
   `c:\Users\harih\.gemini\antigravity\scratch\tutor-connect-lite`
3. **Run the following commands**:

```bash
git init
git add .
git commit -m "Initial commit: TutorConnect Lite"
git branch -M main
git remote add origin https://github.com/hariharsha26/Tutor-connect.git
git push -u origin main
```

Note: You may be asked to log in to GitHub if this is your first time pushing from this machine.
