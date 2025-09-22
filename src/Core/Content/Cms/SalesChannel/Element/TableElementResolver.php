<?php declare(strict_types=1);

namespace SpecialBlocks\Core\Content\Cms\SalesChannel\Element;

use Shopware\Core\Content\Cms\Aggregate\CmsSlot\CmsSlotEntity;
use Shopware\Core\Content\Cms\DataResolver\CriteriaCollection;
use Shopware\Core\Content\Cms\DataResolver\Element\AbstractCmsElementResolver;
use Shopware\Core\Content\Cms\DataResolver\Element\ElementDataCollection;
use Shopware\Core\Content\Cms\DataResolver\ResolverContext\ResolverContext;
use SpecialBlocks\Core\Content\Cms\DataResolver\Element\Struct\TableBlockStruct;

class TableElementResolver extends AbstractCmsElementResolver
{
    public function getType(): string
    {
        return 'special-table';
    }

    public function collect(CmsSlotEntity $slot, ResolverContext $resolverContext): ?CriteriaCollection
    {
        return null;
    }

    public function enrich(CmsSlotEntity $slot, ResolverContext $resolverContext, ElementDataCollection $result): void
    {
        $config = $slot->getFieldConfig();
        $tableStruct = new TableBlockStruct();

        $tableHeadersConfig = $config->get('tableHeaders');
        if ($tableHeadersConfig) {
            $headers = $tableHeadersConfig->getValue() ?? [];
            if (is_string($headers)) {
                $headers = json_decode($headers, true) ?: [];
            }
            $tableStruct->setHeaders($headers);
        }

        $tableRowsConfig = $config->get('tableRows');
        if ($tableRowsConfig) {
            $rows = $tableRowsConfig->getValue() ?? [];
            if (is_string($rows)) {
                $rows = json_decode($rows, true) ?: [];
            }
            $tableStruct->setRows($rows);
        }

        $tableStyleConfig = $config->get('tableStyle');
        if ($tableStyleConfig) {
            $tableStruct->setStyle($tableStyleConfig->getValue() ?? 'default');
        }

        $showHeaderConfig = $config->get('showHeader');
        if ($showHeaderConfig) {
            $tableStruct->setShowHeader($showHeaderConfig->getValue() ?? true);
        }

        $stripedConfig = $config->get('striped');
        if ($stripedConfig) {
            $tableStruct->setStriped($stripedConfig->getValue() ?? false);
        }

        $borderedConfig = $config->get('bordered');
        if ($borderedConfig) {
            $tableStruct->setBordered($borderedConfig->getValue() ?? true);
        }

        $slot->setData($tableStruct);
    }
}