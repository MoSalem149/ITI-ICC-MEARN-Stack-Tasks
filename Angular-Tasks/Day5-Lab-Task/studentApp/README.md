# StudentApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.9.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Task 5 — Theory Questions

### 1. Difference between SPA and MPA

| | SPA | MPA |
|---|---|---|
| Full name | Single Page Application | Multi Page Application |
| HTML pages | One single HTML page | Many HTML pages |
| Navigation | Angular swaps components without reloading | Browser loads a new page every time |
| Example | Angular, React apps | Traditional websites |

Angular is a SPA — there is only one `index.html` and Angular dynamically updates the content without reloading the page.

---

### 2. MVC vs MVVM in Angular

| | MVC | MVVM |
|---|---|---|
| Full name | Model View Controller | Model View ViewModel |
| Used in | Traditional web (Laravel, Rails) | Angular |
| Connects View & Model via | Controller | ViewModel |

Angular uses **MVVM**:
- **Model** → the data (`students` array)
- **View** → `student.html` (what the user sees)
- **ViewModel** → `student.ts` (connects data to the view)

---

### 3. Purpose of component files

| File | Purpose |
|---|---|
| `.ts` | Defines the component interface, data and logic |
| `.html` | Displays the HTML page content |
| `.css` | Styles the component |
| `.spec.ts` | Contains unit tests for the component |

---

### 4. Interpolation

Interpolation is a way to display component data in the HTML template using double curly braces `{{ }}`.

**Example:**
```html
{{ std.name }}
```
This will display the student's name from the component class directly in the HTML page.
