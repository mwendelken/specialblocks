<?php declare(strict_types=1);

namespace SpecialBlocks\Core\Content\Cms\DataResolver\Element\Struct;

use Shopware\Core\Framework\Struct\Struct;
class VideoBlockStruct extends Struct
{
    protected string $videoSrc = '';
    protected bool $autoplay = false;
    protected bool $controls = true;
    protected bool $muted = false;
    protected bool $loop = false;
    protected string $width = '100%';
    protected string $height = 'auto';

    public function getVideoSrc(): string
    {
        return $this->videoSrc;
    }

    public function setVideoSrc(string $videoSrc): void
    {
        $this->videoSrc = $videoSrc;
    }

    public function isAutoplay(): bool
    {
        return $this->autoplay;
    }

    public function setAutoplay(bool $autoplay): void
    {
        $this->autoplay = $autoplay;
    }

    public function hasControls(): bool
    {
        return $this->controls;
    }

    public function setControls(bool $controls): void
    {
        $this->controls = $controls;
    }

    public function isMuted(): bool
    {
        return $this->muted;
    }

    public function setMuted(bool $muted): void
    {
        $this->muted = $muted;
    }

    public function isLoop(): bool
    {
        return $this->loop;
    }

    public function setLoop(bool $loop): void
    {
        $this->loop = $loop;
    }

    public function getWidth(): string
    {
        return $this->width;
    }

    public function setWidth(string $width): void
    {
        $this->width = $width;
    }

    public function getHeight(): string
    {
        return $this->height;
    }

    public function setHeight(string $height): void
    {
        $this->height = $height;
    }

    public function getApiAlias(): string
    {
        return 'special_video_block';
    }
}
