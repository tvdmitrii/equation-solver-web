# Equation Solver Web Interface
This project is a front-end for [Equation Modeling Language Solver API](https://github.com/tvdmitrii/equation-solver-api). It has been created using the Angular framework (version 15) and Angular Material UI component library. Most of the element placement is done using Flexbox. The code editor component [ngx-codemirror](https://github.com/scttcper/ngx-codemirror) is a wrapper around [CodeMirror 5](https://codemirror.net/5/).

# Architecture
## Component Hierarchy (components marked in bold)
- **AppComponent**
  - **NavigationBarComponent**
  - Router Outlet shows either
    - **SolutionPageCpmponent**
      - Solution Button
      - **EquationEditorComponent**
      - Tab Group shows either
        - **SolutionTabComponent**
        - **GuessValuesTabComponent**
        - **SettingsTabComponent**
    - **AboutPageComponent**
    
## Data Exchange
Data exchange is currently achieved using reactive forms with fields spread out across the components. In the future, I would like to implement a data-sharing service to allow components to interact with each other. For example, result rounding is currently done on the server, but it should happen on the client side. This would allow changes in the settings tab to propagate to the solution tab, without the need to solve the system again.

## Learning Outcomes
The project has been a great opportunity to learn TypeScript, Angular, Angular Material UI, and web development in general.

## Possible Development
Eventually, this is meant to become a web-based IDE. You should be able to have files open in multiple tabs, and have different tabs with plots, arrays, and parametric study results. It might be beneficial to have an account system and allow people to store their work on the server.
