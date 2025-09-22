<?php declare(strict_types=1);

namespace SpecialBlocks\Core\Content\Cms\SalesChannel\Element;

use Shopware\Core\Content\Cms\Aggregate\CmsSlot\CmsSlotEntity;
use Shopware\Core\Content\Cms\DataResolver\CriteriaCollection;
use Shopware\Core\Content\Cms\DataResolver\Element\AbstractCmsElementResolver;
use Shopware\Core\Content\Cms\DataResolver\Element\ElementDataCollection;
use Shopware\Core\Content\Cms\DataResolver\ResolverContext\ResolverContext;
use SpecialBlocks\Core\Content\Cms\DataResolver\Element\Struct\OpeningHoursBlockStruct;

class OpeningHoursElementResolver extends AbstractCmsElementResolver
{
    public function getType(): string
    {
        return 'special-opening-hours';
    }

    public function collect(CmsSlotEntity $slot, ResolverContext $resolverContext): ?CriteriaCollection
    {
        return null;
    }

    public function enrich(CmsSlotEntity $slot, ResolverContext $resolverContext, ElementDataCollection $result): void
    {
        $config = $slot->getFieldConfig();
        $openingHoursStruct = new OpeningHoursBlockStruct();

        // Process weekly schedule
        $weeklySchedule = [];
        $days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        
        foreach ($days as $day) {
            $daySchedule = [
                'morning' => [
                    'open' => $config->get($day . '_morning_open')?->getValue() ?? '',
                    'close' => $config->get($day . '_morning_close')?->getValue() ?? ''
                ],
                'afternoon' => [
                    'open' => $config->get($day . '_afternoon_open')?->getValue() ?? '',
                    'close' => $config->get($day . '_afternoon_close')?->getValue() ?? ''
                ],
                'closed' => $config->get($day . '_closed')?->getValue() ?? false
            ];
            $weeklySchedule[$day] = $daySchedule;
        }

        $openingHoursStruct->setWeeklySchedule($weeklySchedule);

        $displayStyleConfig = $config->get('displayStyle');
        if ($displayStyleConfig) {
            $openingHoursStruct->setDisplayStyle($displayStyleConfig->getValue() ?? 'table');
        }

        $showCurrentStatusConfig = $config->get('showCurrentStatus');
        if ($showCurrentStatusConfig) {
            $openingHoursStruct->setShowCurrentStatus($showCurrentStatusConfig->getValue() ?? false);
        }

        $timeFormatConfig = $config->get('timeFormat');
        if ($timeFormatConfig) {
            $openingHoursStruct->setTimeFormat($timeFormatConfig->getValue() ?? '24h');
        }

        $slot->setData($openingHoursStruct);
    }
}