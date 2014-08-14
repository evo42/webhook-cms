// Put general configuration here. This file is included
// in both production and development BEFORE Ember is
// loaded.
//
// For example to enable a feature on a canary build you
// might do:
//
// window.ENV = {FEATURES: {'with-controller': true}};

window.ENV = window.ENV || {};
window.ENV = {
  dbName: window.ENV.dbName || 'webhook',
  uploadUrl: window.ENV.uploadUrl || 'http://server.webhook.com/',
  embedlyKey: window.ENV.embedlyKey || '13dde81b8137446e89c7933edca679eb',
  displayUrl : 'https://i.embed.ly/1/display/',

  themes: [
    {
      name:  'Podcast & blog',
      image: 'https://raw.githubusercontent.com/webhook/webhook-theme-podcast/master/static/images/theme-screenshot.png',
      url:   'https://github.com/webhook/webhook-theme-podcast/archive/master.zip',
      demo:  'http://www.dadstrength.tv',
      code:  'https://github.com/webhook/webhook-theme-podcast',
      description: 'Podcast theme with simple blog. Comes with a persistant audio player and iTunes formatted RSS.'
    },
    {
      name:  'Video, livestream & blog',
      image: 'https://raw.githubusercontent.com/webhook/webhook-theme-streamer/master/static/images/theme-screenshot.png',
      url:   'https://github.com/webhook/webhook-theme-streamer/archive/master.zip',
      demo:  'http://webhook-theme-streamer.webhook.org',
      code:  'https://github.com/webhook/webhook-theme-streamer',
      description: 'Theme for video producers who manage multiple shows across YouTube, Vimeo and Twitch.'
    },
    {
      name:  'Simple personality site',
      image: 'http://webhook-theme-internet-presence.webhook.org/static/images/theme.jpg',
      url:   'https://github.com/webhook/webhook-theme-internet-presence/archive/master.zip',
      demo:  'http://webhook-theme-internet-presence.webhook.org',
      code:  'https://github.com/webhook/webhook-theme-internet-presence',
      description: 'Theme for individuals that need a simple site to manage their online presence, previous work, upcoming events and blog.'
    },
    {
      name:  'Preprocessors built in',
      image: 'https://raw.githubusercontent.com/webhook/webhook-theme-preprocessor/master/theme.png',
      url:   'https://github.com/webhook/webhook-theme-preprocessor/archive/master.zip',
      code:  'https://github.com/webhook/webhook-theme-preprocessor',
      description: 'This theme will automatically add popular CSS and JS preprocessors to your site. Once installed, you\'ll need to restart your runserver.'
    },
    {
      name:  'Bootstrap',
      image: 'https://raw.githubusercontent.com/webhook/webhook-theme-bootstrap/master/theme-screenshot.png',
      url:   'https://github.com/webhook/webhook-theme-bootstrap/archive/master.zip',
      demo:  'http://getbootstrap.com',
      code:  'https://github.com/webhook/webhook-theme-bootstrap',
      description: 'Loads Bootstrap CSS and JS from a CDN so you can start designing immediately. Does not include source files.'
    },
    {
      name:  'Wyrm sass',
      image: 'https://raw.githubusercontent.com/webhook/webhook-theme-wyrm/master/static/images/theme-screenshot.png',
      url:   'https://github.com/webhook/webhook-theme-wyrm/archive/master.zip',
      demo:  'http://www.wyrmsass.org',
      code:  'https://github.com/webhook/webhook-theme-wyrm',
      description: 'Installs boilerplate templates for the Wyrm Sass framework. Requires bower.js and Sass to use. Check github for installation instructions.'
    },
    {
      name:  'Bootstrap blog',
      image: 'https://raw.github.com/snide/webhook-theme-bootstrap-blog/master/theme_screenshot.png',
      url:   'https://github.com/snide/webhook-theme-bootstrap-blog/archive/master.zip',
      demo:  'http://daveblog.webhook.org',
      code:  'https://github.com/snide/webhook-theme-bootstrap-blog',
      description: 'Installs a very basic blog using Bootstrap for some minimal styling. Also loads in some starter forms.'
    }
  ],
  controlTypeGroups: [
    {
      name: 'Text',
      controlTypes: [
        {
          name     : 'Single line text',
          iconClass: 'icon-font',
          widget   : 'textfield'
        },
        {
          name     : 'Paragraph text',
          iconClass: 'icon-align-left',
          widget   : 'textarea'
        },
        {
          name     : 'WYSIWYG text',
          iconClass: 'icon-magic',
          widget   : 'wysiwyg',
        },
        {
          name     : 'Markdown text',
          iconClass: 'icon-markdown-mark',
          widget   : 'markdown',
          help     : 'Learn about Markdown syntax <a href="http://guides.github.com/overviews/mastering-markdown/" target="_blank">here</a>'
        }
      ]
    }, {
      name: 'Basics',
      controlTypes: [
        {
          name     : 'Number',
          widget   : 'number',
          iconClass: 'icon-list-ol'
        },
        {
          name     : 'Checkbox',
          widget   : 'checkbox',
          iconClass: 'icon-checkbox-checked'
        },
        {
          name     : 'Multiple choice',
          widget   : 'radio',
          iconClass: 'icon-radio-checked'
        },
        {
          name     : 'Dropdown',
          widget   : 'select',
          iconClass: 'icon-menu'
        }
      ]
    }, {
      name: 'Files',
      controlTypes: [
        {
          name     : 'Image',
          widget   : 'image',
          valueType: 'object',
          iconClass: 'icon-image'
        },
        {
          name     : 'Gallery',
          widget   : 'gallery',
          iconClass: 'icon-images'
        },
        {
          name     : 'Audio file',
          widget   : 'audio',
          valueType: 'object',
          iconClass: 'icon-music'
        },
        {
          name     : 'Other file',
          widget   : 'file',
          valueType: 'object',
          iconClass: 'icon-paper-clip'
        }
      ]
    }, {
      name: 'Specifics',
      controlTypes: [
        {
          name     : 'Person',
          widget   : 'name',
          valueType: 'object',
          iconClass: 'icon-user'
        },
        {
          name     : 'Address',
          widget   : 'address',
          valueType: 'object',
          iconClass: 'icon-direction'
        },
        {
          name     : 'Phone number',
          widget   : 'phone',
          iconClass: 'icon-phone-sign'
        },
        {
          name     : 'Email',
          widget   : 'email',
          iconClass: 'icon-envelop'
        },
        {
          name     : 'Date time',
          widget   : 'datetime',
          iconClass: 'icon-calendar'
        },
        {
          name       : 'Website',
          widget     : 'url',
          label      : 'Website',
          placeholder: 'http://www.sitename.com',
          iconClass  : 'icon-link'
        },
        {
          name     : 'Rating',
          widget   : 'rating',
          iconClass: 'icon-star'
        },
        {
          name     : 'Tabular Data',
          widget   : 'tabular',
          iconClass: 'icon-table',
          valueType: 'object'
        },
        // {
        //   name     : 'Tags',
        //   widget   : 'tag',
        //   iconClass: 'icon-tags'
        // },
        {
          name     : 'Embed.ly',
          widget   : 'embedly',
          valueType: 'object',
          iconClass: 'icon-code'
        },
        {
          name     : 'Color',
          widget   : 'color',
          iconClass: 'icon-droplet'
        }
      ]
    }, {
      name: 'Advanced',
      controlTypes: [
        {
          name: 'Instructions',
          widget: 'instruction',
          iconClass: 'icon-question-sign'
        },
        {
          name     : 'Relationship',
          widget   : 'relation',
          iconClass: 'icon-tags'
        },
        {
          name: 'Page Layout',
          widget: 'layout',
          iconClass: 'icon-file-xml'
        }
      ]
    }
  ]
};
