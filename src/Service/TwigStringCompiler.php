<?php declare(strict_types=1);

namespace SpecialBlocks\Service;

use Psr\Log\LoggerInterface;
use Twig\Environment;

/**
 * Renders Twig strings with the current environment while failing gracefully.
 */
class TwigStringCompiler
{
    private Environment $twig;
    private LoggerInterface $logger;

    public function __construct(Environment $twig, LoggerInterface $logger)
    {
        $this->twig = $twig;
        $this->logger = $logger;
    }

    public function render(string $template, array $context = []): string
    {
        try {
            return $this->twig->createTemplate($template)->render($context);
        } catch (\Throwable $exception) {
            $this->logger->warning('SpecialBlocks: Twig string rendering failed', [
                'message' => $exception->getMessage(),
            ]);

            return $template;
        }
    }
}
