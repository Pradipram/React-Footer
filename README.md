# react-footer

A customizable React component for displaying a footer with dynamic website name, custom classes, and styles.

## Features

-   **Dynamic Content**: Display the current year and website name dynamically.
-   **Customizable Styles**: Apply custom classes and inline styles for flexible styling options.
-   **Easy Integration**: Integrates smoothly with existing React applications.
    **Lightweight**: Minimal dependencies for efficient performance.

## Installation

Install the component package via npm or yarn:

```bash
npm install @p__readip/react-footer
# or
yarn add @p__readip/react-footer

```

## Peer Dependencies

Make sure you have the following peer dependencies installed in your project:

-   `@emotion/react: "^11.0.0"`
-   `@emotion/styled: "^11.0.0"`
-   `@mui/material: "^5.0.0"`
-   `react: "^17.0.0 || ^18.0.0"`
-   `react-dom: "^17.0.0 || ^18.0.0"`

These packages are required for the Footer component to function correctly. You can install them using npm or yarn:

```javascript
npm install @mui/material @emotion/react @emotion/styled react react-dom
# or
yarn add @mui/material @mui/styled-engine-sc styled-components react react-dom
```

## Usage

Import the Footer component and use it in your React application:

```javascript
import React from "react";
import { Footer } from "@p__readip/react-footer";

const App = () => {
    return (
        <div>
            <Footer websiteName="Your website name" />
        </div>
    );
};

export default App;
```

## Props

|    Name     |        Type         | Required |                                  Description                                   |
| :---------: | :-----------------: | :------: | :----------------------------------------------------------------------------: |
| websiteName |       string        |   Yes    |          specifies the name of the website to display in the footer.           |
|  className  |       string        |    No    |     Allows adding custom CSS classes to the footer for additional styling.     |
|    style    | React.CSSProperties |    No    | Allows applying custom inline styles to override default styles of the footer. |

## Contributing

Contributions are always welcome! If you have any suggestions or improvements, please submit a pull request or open an issue on GitHub.

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## Feedback

If you have any feedback, please reach out to us at pradipramjnv@gmail.com
