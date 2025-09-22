<?php declare(strict_types=1);

namespace SpecialBlocks\Core\Content\Cms\SalesChannel\Element;

use Shopware\Core\Content\Cms\Aggregate\CmsSlot\CmsSlotEntity;
use Shopware\Core\Content\Cms\DataResolver\CriteriaCollection;
use Shopware\Core\Content\Cms\DataResolver\Element\AbstractCmsElementResolver;
use Shopware\Core\Content\Cms\DataResolver\Element\ElementDataCollection;
use Shopware\Core\Content\Cms\DataResolver\ResolverContext\ResolverContext;
use SpecialBlocks\Core\Content\Cms\DataResolver\Element\Struct\VideoBlockStruct;

class VideoElementResolver extends AbstractCmsElementResolver
{
    public function getType(): string
    {
        return 'special-video';
    }

    public function collect(CmsSlotEntity $slot, ResolverContext $resolverContext): ?CriteriaCollection
    {
        return null;
    }

    public function enrich(CmsSlotEntity $slot, ResolverContext $resolverContext, ElementDataCollection $result): void
    {
        $config = $slot->getFieldConfig();
        $videoStruct = new VideoBlockStruct();

        $videoSrcConfig = $config->get('videoSrc');
        if ($videoSrcConfig) {
            $videoStruct->setVideoSrc($videoSrcConfig->getValue() ?? '');
        }

        $autoplayConfig = $config->get('autoplay');
        if ($autoplayConfig) {
            $videoStruct->setAutoplay($autoplayConfig->getValue() ?? false);
        }

        $controlsConfig = $config->get('controls');
        if ($controlsConfig) {
            $videoStruct->setControls($controlsConfig->getValue() ?? true);
        }

        $mutedConfig = $config->get('muted');
        if ($mutedConfig) {
            $videoStruct->setMuted($mutedConfig->getValue() ?? false);
        }

        $loopConfig = $config->get('loop');
        if ($loopConfig) {
            $videoStruct->setLoop($loopConfig->getValue() ?? false);
        }

        $widthConfig = $config->get('width');
        if ($widthConfig) {
            $videoStruct->setWidth($widthConfig->getValue() ?? '100%');
        }

        $heightConfig = $config->get('height');
        if ($heightConfig) {
            $videoStruct->setHeight($heightConfig->getValue() ?? 'auto');
        }

        $slot->setData($videoStruct);
    }
}