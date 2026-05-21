# TypeScript installation

> In this session, you will learn how to install TypeScript and set it up with your code editor. I will explain each step clearly in a beginner-friendly way. If you have any doubts about a particular step, ask in GitHub.

- What you will learn in this session:
  - How to install TypeScript?
  - What each command does?
  - Why each keyword is used?
  - How to setup TypeScript?
  - How to write a simple TypeScript program?

## Step-1 Installation:

Installation is mostly command-based. So open your terminal, copy the given commands, and paste them into the terminal.

### Installation Ways :

- I know two ways to install TypeScript. But most industries follow and recommend one standard way. I will explain both methods with their advantages and disadvantages.
  - Global
  - Project specific

#### Global Way :

- You can run this command to install TypeScript globally.

```bash [npm]
npm install-g typescript

// shorthand command

npm i-g typescript
```

Syntax for global installation

```bash [npm]
npm i -g <package-name>
```

Now let’s see the advantages and disadvantages.

##### Advantages :

- TypeScript installs system-wide. So we can access the compiler command anywhere in the terminal like Git Bash, Windows CMD, PowerShell, etc.
- It is helpful when learning or practicing TypeScript.

##### Disadvantages :

- Project version conflicts may occur because different projects may require different TypeScript versions.
- Team collaboration problems can happen if team members use different TypeScript versions. Some syntax, rules, or features may work in one version but not in another version.

#### Project specific :

- You can run this command to install TypeScript only for a specific project..

::: code-group

```bash [npm]
npm install-D typescript
// shorthand command
npm i-D typescript
```

```bash [pnpm]
pnpm add -D typescript
```

:::

Syntax for project installation

```bash [npm]
npm i -D <package-name>
```

- `D` means save this package inside `devDependencies` in the `package.json` file. We will talk about this in future upcoming sessions about package managers and their use cases.
- In this way, we install TypeScript separately for each project. So every project can use its own TypeScript version.
- This helps avoid version conflicts because the project uses its own local TypeScript version instead of the global one.
  - Here you may get confused about “version mismatch” or “version conflict”:
    > - These issues occur mainly each TypeScript compiler version may have different syntax rules and features.
    > - For example, TypeScript 5.1 may support some rules, while TypeScript 5.2 may change, remove, or improve them.
    > - If a project is built or compiled using different TypeScript versions, errors may occur.
- That’s why developers mostly recommend project-specific installation.

##### Advantages

- TypeScript installs only for that project, so version conflicts are reduced.
- Team members can use the same TypeScript version because the package manager stores and locks the project dependencies.

##### Disadvantages

- We need to install TypeScript separately for every project.
- Need a small setup for TypeScript compilation commands.
- Each project has its own `node_modules` folder, so storage usage increases slightly.
- We will later discuss `node_modules` and why it exists.
