import './component';
import './config';
import './preview';

const { Application } = Shopware;

Application.getContainer('service').cmsService.registerCmsElement({
  plugin: 'SpecialBlocks',
  icon: 'regular-code',
  name: 'special-twig-code',
  label: 'sw-cms.elements.special.twigCode.label',
  component: 'sw-cms-el-special-twig-code',
  configComponent: 'sw-cms-el-config-special-twig-code',
  previewComponent: 'sw-cms-el-preview-special-twig-code',
  defaultConfig: {
    contentHTML: {
      source: 'static',
      value: `<div class="special-twig-code-example">
  <h3>{{ "specialBlocks.twigCode.label"|trans }}</h3>
  <p>Dies ist ein Beispiel für HTML/Twig-Code.</p>
</div>`.trim()
    },
    contentCSS: {
      source: 'static',
      value: null
    },
    contentJS: {
      source: 'static',
      value: null
    },
    useTwig: {
      source: 'static',
      value: true
    }
  }
});
