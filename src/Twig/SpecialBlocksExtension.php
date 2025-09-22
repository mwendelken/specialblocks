<?php declare(strict_types=1);

namespace SpecialBlocks\Twig;

use SpecialBlocks\Service\ConfigService;
use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class SpecialBlocksExtension extends AbstractExtension
{
    private ConfigService $configService;

    public function __construct(ConfigService $configService)
    {
        $this->configService = $configService;
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('special_blocks_colors', [$this, 'getSpecialBlocksColors'], ['needs_context' => true]),
            new TwigFunction('special_blocks_css', [$this, 'getSpecialBlocksCss'], ['needs_context' => true, 'is_safe' => ['html']])
        ];
    }

    public function getSpecialBlocksColors(array $context): array
    {
        $salesChannelContext = $context['context'] ?? null;
        $salesChannelId = $salesChannelContext instanceof SalesChannelContext
            ? $salesChannelContext->getSalesChannel()->getId()
            : null;

        return $this->configService->getStatusColors($salesChannelId);
    }

    public function getSpecialBlocksCss(array $context): string
    {
        $colors = $this->getSpecialBlocksColors($context);

        return sprintf('
            <style>
                .cms-element-special-opening-hours .opening-hours-current-status.status-open {
                    background-color: %s !important;
                    color: %s !important;
                    border-color: %s !important;
                }
                .cms-element-special-opening-hours .opening-hours-current-status.status-open .status-indicator {
                    background-color: %s !important;
                }
                .cms-element-special-opening-hours .opening-hours-current-status.status-closed {
                    background-color: %s !important;
                    color: %s !important;
                    border-color: %s !important;
                }
                .cms-element-special-opening-hours .opening-hours-current-status.status-closed .status-indicator {
                    background-color: %s !important;
                }
            </style>',
            $colors['statusOpenBackgroundColor'],
            $colors['statusOpenTextColor'],
            $colors['statusOpenBackgroundColor'],
            $colors['statusOpenDotColor'],
            $colors['statusClosedBackgroundColor'],
            $colors['statusClosedTextColor'],
            $colors['statusClosedBackgroundColor'],
            $colors['statusClosedDotColor']
        );
    }
}