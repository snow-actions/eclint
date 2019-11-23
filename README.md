
<p align="center">
  <a href="https://github.com/snow-actions/eclint"><img alt="GitHub Actions status" src="https://github.com/snow-actions/eclint/workflows/ECLint-action/badge.svg"></a>
</p>

# ECLint action

Execute [ECLint](https://github.com/jedmao/eclint) on GitHub Actions.  
ECLint validates or fixes code based on [EditorConfig](https://editorconfig.org/).

## Usage

See [action.yml](action.yml)

### Validate

Execute `eclint check`.

```yml
- uses: snow-actions/eclint@v1.0.1
  with:
    args: 'check'
```

### Fix

Execute `eclint fix *.yml`. Make commit yourself.

```yml
- uses: snow-actions/eclint@v1.0.1
  with:
    args: 'fix *.yml'
```
