<?php declare(strict_types=1);

namespace SpecialBlocks\Core\Content\Cms\DataResolver\Element\Struct;

use Shopware\Core\Framework\Struct\Struct;

class TableBlockStruct extends Struct
{
    protected array $headers = [];
    protected array $rows = [];
    protected string $style = 'default';
    protected bool $showHeader = true;
    protected bool $striped = false;
    protected bool $bordered = true;

    public function getHeaders(): array
    {
        return $this->headers;
    }

    public function setHeaders(array $headers): void
    {
        $this->headers = $headers;
    }

    public function getRows(): array
    {
        return $this->rows;
    }

    public function setRows(array $rows): void
    {
        $this->rows = $rows;
    }

    public function getStyle(): string
    {
        return $this->style;
    }

    public function setStyle(string $style): void
    {
        $this->style = $style;
    }

    public function getShowHeader(): bool
    {
        return $this->showHeader;
    }

    public function setShowHeader(bool $showHeader): void
    {
        $this->showHeader = $showHeader;
    }

    public function getStriped(): bool
    {
        return $this->striped;
    }

    public function setStriped(bool $striped): void
    {
        $this->striped = $striped;
    }

    public function getBordered(): bool
    {
        return $this->bordered;
    }

    public function setBordered(bool $bordered): void
    {
        $this->bordered = $bordered;
    }

    public function getApiAlias(): string
    {
        return 'special_table_block';
    }
}