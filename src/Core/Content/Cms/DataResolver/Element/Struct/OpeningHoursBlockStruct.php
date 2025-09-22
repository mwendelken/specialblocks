<?php declare(strict_types=1);

namespace SpecialBlocks\Core\Content\Cms\DataResolver\Element\Struct;

use Shopware\Core\Framework\Struct\Struct;

class OpeningHoursBlockStruct extends Struct
{
    protected array $weeklySchedule = [];
    protected string $displayStyle = 'table';
    protected bool $showCurrentStatus = false;
    protected string $timeFormat = '24h';

    public function getWeeklySchedule(): array
    {
        return $this->weeklySchedule;
    }

    public function setWeeklySchedule(array $weeklySchedule): void
    {
        $this->weeklySchedule = $weeklySchedule;
    }

    public function getDisplayStyle(): string
    {
        return $this->displayStyle;
    }

    public function setDisplayStyle(string $displayStyle): void
    {
        $this->displayStyle = $displayStyle;
    }

    public function getShowCurrentStatus(): bool
    {
        return $this->showCurrentStatus;
    }

    public function setShowCurrentStatus(bool $showCurrentStatus): void
    {
        $this->showCurrentStatus = $showCurrentStatus;
    }

    public function getTimeFormat(): string
    {
        return $this->timeFormat;
    }

    public function setTimeFormat(string $timeFormat): void
    {
        $this->timeFormat = $timeFormat;
    }

    /**
     * Prüft ob aktuell geöffnet (vereinfacht)
     */
    public function isCurrentlyOpen(): bool
    {
        $now = new \DateTime();
        $currentDay = strtolower($now->format('l')); // monday, tuesday, etc.
        $currentTime = $now->format('H:i');

        $todaySchedule = $this->weeklySchedule[$currentDay] ?? null;
        
        if (!$todaySchedule || $todaySchedule['closed']) {
            return false;
        }

        // Vormittag prüfen
        if (!empty($todaySchedule['morning']['open']) && !empty($todaySchedule['morning']['close'])) {
            if ($currentTime >= $todaySchedule['morning']['open'] && $currentTime <= $todaySchedule['morning']['close']) {
                return true;
            }
        }

        // Nachmittag prüfen
        if (!empty($todaySchedule['afternoon']['open']) && !empty($todaySchedule['afternoon']['close'])) {
            if ($currentTime >= $todaySchedule['afternoon']['open'] && $currentTime <= $todaySchedule['afternoon']['close']) {
                return true;
            }
        }

        return false;
    }

    public function getApiAlias(): string
    {
        return 'special_opening_hours_block';
    }
}