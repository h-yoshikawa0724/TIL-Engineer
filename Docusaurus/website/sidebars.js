/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  linux: {
    Linux: [
      'Linux/linux-overview',
      {
        type: 'category',
        label: 'CLI',
        items: [
          'Linux/Command/linux-ssh-key'
        ],
      },
    ]
  },
  git: {
    Git: [
      'Git/git-overview',
      'Git/git-ssh',
      'Git/git-concept',
      'Git/git-ignore',
      'Git/git-github-flow',
      {
        type: 'category',
        label: 'CLI',
        items: [
          'Git/Command/git-cli-setting',
          'Git/Command/git-cli-basic',
          'Git/Command/git-cli-branch',
          'Git/Command/git-cli-tag'
        ],
      },
    ]
  },
  general: {
    'テクニック': [
      'General/if-flat'
    ]
  },
  java: {
    Pure: [
      'Java/Pure/java-overview',
      {
        type: 'category',
        label: '概念',
        items: [
          'Java/Pure/Concept/java-syntax',
          'Java/Pure/Concept/java-class',
        ],
      },
      {
        type: 'category',
        label: '考え方',
        items: [
          'Java/Pure/Thought/java-encapsulation'
        ],
      },
      {
        type: 'category',
        label: '基本処理',
        items: [
          'Java/Pure/Basic/java-print',
          'Java/Pure/Basic/java-if',
          'Java/Pure/Basic/java-loop'
        ],
      },
      {
        type: 'category',
        label: '配列',
        items: [
          'Java/Pure/Array/java-array-basic'
        ],
      },
    ]
  },
  php: {
    Pure: [
      'PHP/Pure/php-overview',
      {
        type: 'category',
        label: '概念',
        items: [
          'PHP/Pure/Concept/php-syntax',
          'PHP/Pure/Concept/php-class',
        ],
      },
      {
        type: 'category',
        label: '基本処理',
        items: [
          'PHP/Pure/Basic/php-print',
          'PHP/Pure/Basic/php-if',
          'PHP/Pure/Basic/php-loop'
        ],
      },
      {
        type: 'category',
        label: '配列',
        items: [
          'PHP/Pure/Array/php-array-basic'
        ],
      },
    ]
  }
};
