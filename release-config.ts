export const releaseConfig = {
  branches: [{ name: 'master' }, { name: 'next', channel: 'next', prerelease: 'beta' }],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
      },
    ],
    ['@semantic-release/npm', { pkgRoot: './dist' }],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'package-lock.json', 'CHANGELOG.md'],
        message:
          // eslint-disable-next-line no-template-curly-in-string
          'chore(release): ${nextRelease.version} [skip ci]\n\n<%=nextRelease.notes.replace(/([^\\n]{100})/g, "$1\\n") %>',
      },
    ],
    '@semantic-release/changelog',
    '@semantic-release/github',
    [
      'semantic-release-slack-bot',
      {
        notifyOnSuccess: true,
      },
    ],
  ],
};
