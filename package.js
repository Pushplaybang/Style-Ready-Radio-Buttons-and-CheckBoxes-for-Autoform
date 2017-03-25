Package.describe({
  name: 'pushplaybang:autoform-style-ready-radio-and-checkbox',
  summary: 'Custom radio and checkbox CSS ready templates for AutoForm',
  version: '0.0.2',
  git: 'https://github.com/Pushplaybang/Style-Ready-Radio-Buttons-and-CheckBoxes-for-Autoform'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('blaze-html-templates@1.0.4');
  api.use('aldeed:autoform@6.0.0');
  api.use('random@1.0.10');
  api.use('underscore@1.0.10');
  api.addFiles([
    './select-checkbox-styled/select-checkbox-styled.html',
    './select-checkbox-styled/select-checkbox-styled.js',
    './select-radio-styled/select-radio-styled.html',
    './select-radio-styled/select-radio-styled.js',
    './boolean-checkbox-styled/boolean-checkbox-styled.html',
    './boolean-checkbox-styled/boolean-checkbox-styled.js',
    './boolean-radios-styled/boolean-radios-styled.html',
    './boolean-radios-styled/boolean-radios-styled.js',
  ], 'client');
});
