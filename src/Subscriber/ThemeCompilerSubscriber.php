<?php declare(strict_types=1);

namespace SpecialBlocks\Subscriber;

use SpecialBlocks\Service\ConfigService;
use Shopware\Core\Framework\Context;
use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Shopware\Storefront\Event\ThemeCompilerEnrichScssVariablesEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class ThemeCompilerSubscriber implements EventSubscriberInterface
{
    private ConfigService $configService;

    public function __construct(ConfigService $configService)
    {
        $this->configService = $configService;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            ThemeCompilerEnrichScssVariablesEvent::class => 'enrichScssVariables'
        ];
    }

    public function enrichScssVariables(ThemeCompilerEnrichScssVariablesEvent $event): void
    {
        $salesChannelId = $event->getSalesChannelId();
        $colors = $this->configService->getStatusColors($salesChannelId);

        $variables = [
            'special-blocks-status-open-bg' => $colors['statusOpenBackgroundColor'],
            'special-blocks-status-open-text' => $colors['statusOpenTextColor'],
            'special-blocks-status-open-dot' => $colors['statusOpenDotColor'],
            'special-blocks-status-closed-bg' => $colors['statusClosedBackgroundColor'],
            'special-blocks-status-closed-text' => $colors['statusClosedTextColor'],
            'special-blocks-status-closed-dot' => $colors['statusClosedDotColor']
        ];

        $event->addVariable('special-blocks-colors', $variables);
    }
}