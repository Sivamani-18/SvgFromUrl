# SvgFromUrl

A React component for fetching and rendering SVGs from a given URL, with status callbacks for success and error handling.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Example](#example)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install `SvgFromUrl` via npm or yarn.

### npm

```bash
npm install svg-from-url
```

### yarn

```bash
yarn add svg-from-url
```

## Usage

Import the `SvgFromUrl` component and use it in your React application. Pass the SVG URL and a callback function to handle status updates.

```tsx
import React from 'react';
import SvgFromUrl from 'svg-from-url';

const App = () => {
  const handleStatus = (status: 'success' | 'error') => {
    console.log('SVG status:', status);
  };

  return (
    <div>
      <h1>SVG from URL</h1>
      <SvgFromUrl url="https://example.com/path/to/your/image.svg" onStatus={handleStatus} />
    </div>
  );
};

export default App;
```

## API

### SvgFromUrl

#### Props

- `url` (string) - The URL of the SVG to fetch and render.
- `onStatus` (function) - A callback function that receives the status of the SVG fetching process. The status can be `'success'` or `'error'`.

```tsx
interface SvgFromUrlProps {
  url: string;
  onStatus: (status: 'success' | 'error') => void;
}
```

### checkSvgUrl (Optional Utility Function)

If you need to validate the URL outside of the component, you can use the `checkSvgUrl` function.

```tsx
const checkSvgUrl = async (url: string): Promise<boolean> => {
  // Implementation...
};
```

#### Returns

- `Promise<boolean>` - Resolves to `true` if the URL points to an SVG file, otherwise `false`.

## Example

```tsx
import React from 'react';
import SvgFromUrl from 'svg-from-url';

const App = () => {
  const handleStatus = (status: 'success' | 'error') => {
    console.log('SVG status:', status);
  };

  return (
    <div>
      <h1>SVG from URL Example</h1>
      <SvgFromUrl url="https://example.com/path/to/your/image.svg" onStatus={handleStatus} />
    </div>
  );
};

export default App;
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your improvements.

### Development Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/Sivamani-18/svg-from-url.git
    cd svg-from-url
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

### Running Tests

To run the tests, use:

```bash
npm link
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

<!--

## Acknowledgments

Thanks to all contributors and open-source projects that helped in building this component.
