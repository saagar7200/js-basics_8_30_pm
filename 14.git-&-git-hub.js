// git 
//? git commands
//! 1. setup & configuration 
//*  git -v / git --version -> check git version
//*  git config --global --list -> checl all git configs
//*  git config --global user.name "your name" -> set username to global cofig
//* git config --global user.email "your_email@ecamle.com"
//* git config --global init.defaultbranch "main" -> set default branch to main


//! 2. start git repository
// * git init -> create a  new repository inside project folder

// * git clone <repo_url> -> clone/copy existing repo from github



//! 4. Remote Repository
//* git remote -v -> show all remote repo links
//* git remote add origin <remote_repo_url>   => add remote repo link to local repository
//* git remote remove origin   => remove remote repo list

//! 3. basic workflow 
//? working directory  -> staging area -> local repository ->  remote repository

//* git status    -> check current status
// * git add <file_path>   -> stage single file 
// * git commit -m "<commit_message>"  //commit staged changes with message ( local repository )

// stage a  ll file at once
//* git add .

// unstage change
//* git restore --staged <file_path> 



