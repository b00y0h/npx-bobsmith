# Bob Smith - Digital Business Card

A modern CLI-based digital business card that can be run using npx.

## Usage

Run my digital business card with:

```bash
npx bobsmith
```

### Command Line Options

- **Security Demo Mode**: Shows a cybersecurity awareness demonstration

  ```bash
  npx bobsmith -security
  ```

## Features

- Interactive CLI interface
- Contact information
- GitHub profile
- Meeting scheduler
- Security awareness demo
- Portfolio link (when available)

## Development

To build and run locally:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Run locally
npm start
```

## Publishing

This package is set up with a GitHub Actions workflow to automatically publish to npm when a new release is created.

### Option 1: Publish via GitHub UI

1. Go to your repository on GitHub (`https://github.com/b00y0h/npx-bobsmith`)
2. Click on the "Releases" tab (or navigate to `https://github.com/b00y0h/npx-bobsmith/releases`)
3. Click the "Create a new release" or "Draft a new release" button
4. Fill in the details:
   - Choose a tag (e.g., `v1.3.1` - increment from current version in package.json)
   - Add a release title (usually the same as the tag)
   - Add release notes describing what's new
5. Click "Publish release"

### Option 2: Publish via Command Line

Using GitHub CLI:

```bash
# Install GitHub CLI if needed
brew install gh

# Login to GitHub
gh auth login

# Create a release (update version number as needed)
gh release create v1.3.1 --title "v1.3.1" --notes "Added security demo with command line parameter"
```

### Pre-publish Checklist

Before publishing:

1. Update version in package.json
2. Ensure all changes are committed and pushed
3. Verify tests pass locally
4. Confirm npm_token secret is set in GitHub repository settings

## Security Note

The security demo included in this package is for educational purposes only. It simulates what malicious packages could potentially do, but does not actually perform any harmful operations or access sensitive information.

## License

ISC
