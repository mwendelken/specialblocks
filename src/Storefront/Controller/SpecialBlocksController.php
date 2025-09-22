<?php declare(strict_types=1);

namespace SpecialBlocks\Storefront\Controller;

use SpecialBlocks\Service\ConfigService;
use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Shopware\Storefront\Controller\StorefrontController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(defaults: ['_routeScope' => ['storefront']])]
class SpecialBlocksController extends StorefrontController
{
    private ConfigService $configService;

    public function __construct(ConfigService $configService)
    {
        $this->configService = $configService;
    }

    #[Route(
        path: '/special-blocks/css',
        name: 'frontend.special-blocks.css',
        methods: ['GET']
    )]
    public function css(SalesChannelContext $context): Response
    {
        $colors = $this->configService->getStatusColors($context->getSalesChannel()->getId());

        $css = "
        .cms-element-special-opening-hours .opening-hours-current-status.status-open {
            background-color: {$colors['statusOpenBackgroundColor']} !important;
            color: {$colors['statusOpenTextColor']} !important;
            border-color: {$colors['statusOpenBackgroundColor']} !important;
        }

        .cms-element-special-opening-hours .opening-hours-current-status.status-open .status-indicator {
            background-color: {$colors['statusOpenDotColor']} !important;
        }

        .cms-element-special-opening-hours .opening-hours-current-status.status-closed {
            background-color: {$colors['statusClosedBackgroundColor']} !important;
            color: {$colors['statusClosedTextColor']} !important;
            border-color: {$colors['statusClosedBackgroundColor']} !important;
        }

        .cms-element-special-opening-hours .opening-hours-current-status.status-closed .status-indicator {
            background-color: {$colors['statusClosedDotColor']} !important;
        }
        ";

        $response = new Response($css);
        $response->headers->set('Content-Type', 'text/css');
        $response->headers->set('Cache-Control', 'public, max-age=3600');

        return $response;
    }
}