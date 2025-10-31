<?php declare(strict_types=1);

namespace SpecialBlocks;

use Shopware\Core\Content\Media\Aggregate\MediaDefaultFolder\MediaDefaultFolderEntity;
use Shopware\Core\Content\Media\Aggregate\MediaFolder\MediaFolderEntity;
use Shopware\Core\Framework\Context;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepository;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Filter\EqualsFilter;
use Shopware\Core\Framework\Plugin;
use Shopware\Core\Framework\Plugin\Context\InstallContext;
use Shopware\Core\Framework\Plugin\Context\UninstallContext;
use Shopware\Core\Framework\Uuid\Uuid;

class SpecialBlocks extends Plugin
{
    public function install(InstallContext $installContext): void
    {
        parent::install($installContext);
        $this->createMediaFolder($installContext->getContext());
    }

    public function uninstall(UninstallContext $uninstallContext): void
    {
        parent::uninstall($uninstallContext);
    }

    private function createMediaFolder(Context $context): void
    {
        /** @var EntityRepository $mediaFolderRepository */
        $mediaFolderRepository = $this->container->get('media_folder.repository');

        /** @var EntityRepository $mediaDefaultFolderRepository */
        $mediaDefaultFolderRepository = $this->container->get('media_default_folder.repository');

        // Check if "Video" default folder already exists
        $criteria = new Criteria();
        $criteria->addFilter(new EqualsFilter('entity', 'special_blocks_video'));

        $defaultFolder = $mediaDefaultFolderRepository->search($criteria, $context)->first();

        if (!$defaultFolder instanceof MediaDefaultFolderEntity) {
            // Create media default folder
            $mediaDefaultFolderRepository->create([
                [
                    'id' => Uuid::randomHex(),
                    'entity' => 'special_blocks_video',
                    'associationFields' => [],
                    'folder' => [
                        'id' => Uuid::randomHex(),
                        'name' => 'Video',
                        'useParentConfiguration' => false,
                        'configuration' => [
                            'createThumbnails' => false,
                            'keepAspectRatio' => true,
                            'thumbnailQuality' => 80,
                        ],
                    ],
                ],
            ], $context);
        }
    }
}