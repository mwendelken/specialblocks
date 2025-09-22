<?php declare(strict_types=1);

namespace SpecialBlocks\Service;

use Shopware\Core\System\SystemConfig\SystemConfigService;

class ConfigService
{
    private SystemConfigService $systemConfigService;

    public function __construct(SystemConfigService $systemConfigService)
    {
        $this->systemConfigService = $systemConfigService;
    }

    public function getStatusColors(?string $salesChannelId = null): array
    {
        return [
            'statusOpenBackgroundColor' => $this->systemConfigService->get('SpecialBlocks.config.statusOpenBackgroundColor', $salesChannelId) ?? '#B8C5DD',
            'statusOpenTextColor' => $this->systemConfigService->get('SpecialBlocks.config.statusOpenTextColor', $salesChannelId) ?? '#2B3136',
            'statusOpenDotColor' => $this->systemConfigService->get('SpecialBlocks.config.statusOpenDotColor', $salesChannelId) ?? '#005B99',
            'statusClosedBackgroundColor' => $this->systemConfigService->get('SpecialBlocks.config.statusClosedBackgroundColor', $salesChannelId) ?? '#f8d7da',
            'statusClosedTextColor' => $this->systemConfigService->get('SpecialBlocks.config.statusClosedTextColor', $salesChannelId) ?? '#721c24',
            'statusClosedDotColor' => $this->systemConfigService->get('SpecialBlocks.config.statusClosedDotColor', $salesChannelId) ?? '#dc3545'
        ];
    }
}