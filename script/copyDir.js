import { exec } from "child_process";

exec(
  "powershell Copy-Item ./packages ./docs -Recurse",
  (err, stdout, stderr) => {
    if (err) {
      console.log(err);
      return;
    }
  }
);
