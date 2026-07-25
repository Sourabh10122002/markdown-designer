# Mermaid Cheatsheet

Copy-adapt these verified patterns. All render natively on GitHub, GitLab, and VS Code (with mermaid preview support). Every block goes inside a fenced code block tagged `mermaid`.

## 1. Flowchart — processes, pipelines, decision logic

```mermaid
flowchart TD
    A[Start: user submits form] --> B{Valid input?}
    B -- Yes --> C[Save to database]
    B -- No --> D[Show validation errors]
    D --> A
    C --> E[Send confirmation email]
    E --> F([Done])
```

Directions: `TD` (top-down), `LR` (left-right, best for pipelines), `BT`, `RL`.

Node shapes:
| Syntax | Shape | Use for |
|---|---|---|
| `A[text]` | Rectangle | Process step |
| `A{text}` | Diamond | Decision |
| `A([text])` | Stadium | Start / end |
| `A[(text)]` | Cylinder | Database |
| `A((text))` | Circle | Connector point |
| `A[/text/]` | Parallelogram | Input / output |
| `A[[text]]` | Subroutine | Sub-process |

Edges: `-->` arrow, `---` line, `-.->` dotted, `==>` thick, `-- label -->` labeled.

### Architecture variant with subgraphs

```mermaid
flowchart LR
    subgraph Client
        UI[React App]
    end
    subgraph Backend
        API[REST API]
        Auth[Auth Service]
    end
    subgraph Data
        DB[(PostgreSQL)]
        Cache[(Redis)]
    end
    UI --> API
    API --> Auth
    API --> DB
    API --> Cache
```

## 2. Sequence diagram — interactions over time

```mermaid
sequenceDiagram
    autonumber
    participant U as User
    participant F as Frontend
    participant A as API
    participant D as Database

    U->>F: Click "Login"
    F->>A: POST /auth/login
    A->>D: SELECT user
    D-->>A: user row
    alt password valid
        A-->>F: 200 + JWT
        F-->>U: Redirect to dashboard
    else invalid
        A-->>F: 401
        F-->>U: Show error
    end
```

Arrows: `->>` solid (request), `-->>` dashed (response), `-x` lost message. Blocks: `alt/else/end`, `loop/end`, `opt/end`, `par/and/end`. `autonumber` numbers each step.

## 3. State diagram — lifecycles and transitions

```mermaid
stateDiagram-v2
    [*] --> Draft
    Draft --> InReview: submit
    InReview --> Draft: request changes
    InReview --> Approved: approve
    Approved --> Published: publish
    Published --> Archived: archive
    Archived --> [*]
```

`[*]` is both initial and final state. Nested states: `state Parent { A --> B }`.

## 4. Gantt — schedules and phases

```mermaid
gantt
    title Project Roadmap
    dateFormat YYYY-MM-DD
    section Design
        Wireframes       :done,    d1, 2026-07-01, 7d
        Visual design    :active,  d2, after d1, 10d
    section Build
        Backend API      :         b1, after d2, 14d
        Frontend         :         b2, after d2, 21d
    section Launch
        QA + fixes       :crit,    l1, after b2, 7d
        Go live          :milestone, after l1, 0d
```

Tags: `done`, `active`, `crit`, `milestone`. Durations: `7d`, `2w`. Dependencies: `after <id>`.

## 5. Timeline — chronological events / roadmap

```mermaid
timeline
    title Product History
    2024 Q4 : Prototype built
    2025 Q1 : Seed funding
            : First 3 hires
    2025 Q3 : Public beta
    2026 Q1 : GA launch
```

## 6. ER diagram — database schemas

```mermaid
erDiagram
    USER ||--o{ ORDER : places
    ORDER ||--|{ ORDER_ITEM : contains
    PRODUCT ||--o{ ORDER_ITEM : "appears in"

    USER {
        int id PK
        string email UK
        string name
    }
    ORDER {
        int id PK
        int user_id FK
        datetime created_at
    }
```

Cardinality: `||` exactly one, `o|` zero or one, `o{` zero or more, `|{` one or more.

## 7. Pie — proportions (only with real numbers)

```mermaid
pie showData
    title Bundle size by package
    "react-dom" : 130
    "lodash" : 71
    "app code" : 48
    "other" : 22
```

## 8. Class diagram — type relationships

```mermaid
classDiagram
    class Animal {
        +String name
        +move() void
    }
    class Dog {
        +bark() void
    }
    Animal <|-- Dog : extends
    Animal <|-- Cat
    Owner "1" --> "*" Animal : owns
```

Relations: `<|--` inheritance, `*--` composition, `o--` aggregation, `-->` association, `..>` dependency.

## 9. Git graph — branching strategies

```mermaid
gitGraph
    commit
    branch develop
    commit
    branch feature/login
    commit
    commit
    checkout develop
    merge feature/login
    checkout main
    merge develop tag: "v1.2.0"
```

## 10. Mindmap — hierarchies and brainstorms

```mermaid
mindmap
  root((Markdown Design))
    Diagrams
      Flowchart
      Sequence
      Gantt
    Emphasis
      Alerts
      Tables
    Structure
      TOC
      Collapsible
```

Indentation defines hierarchy. Shapes: `((circle))`, `(rounded)`, `[square]`.

## 11. Quadrant chart — prioritization

```mermaid
quadrantChart
    title Effort vs Impact
    x-axis Low Effort --> High Effort
    y-axis Low Impact --> High Impact
    quadrant-1 Plan carefully
    quadrant-2 Do first
    quadrant-3 Skip
    quadrant-4 Quick wins... maybe
    Dark mode: [0.3, 0.75]
    Rewrite in Rust: [0.9, 0.4]
    Fix login bug: [0.2, 0.9]
```

Coordinates are `[x, y]` in 0–1 range.

## Common render failures and fixes

| Symptom | Cause | Fix |
|---|---|---|
| Diagram breaks mid-render | Unquoted `( ) : ; #` in a label | Quote the label: `A["Step (2)"]` |
| Flowchart ends abruptly | Node ID literally named `end` | Rename to `End`/`finish` |
| Label line break ignored | `\n` used | Use `<br/>` |
| Nothing renders | Fence tagged wrong | Must be exactly ```` ```mermaid ```` |
| Gantt bars missing | Date format mismatch | Match `dateFormat` to your dates |
| Arrows crossing chaos | Too many nodes | Split into 2+ diagrams, ≤20 nodes each |
| Subgraph name breaks | Spaces/punctuation in ID | `subgraph id["Display Name"]` |
